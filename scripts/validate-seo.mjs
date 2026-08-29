const baseUrl = (process.env.SEO_BASE_URL || process.argv[2] || "http://localhost:3000").replace(/\/$/, "");

function decode(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(value) {
  return decode(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function match(html, expression) {
  return decode(html.match(expression)?.[1]?.trim() || "");
}

function normalizeUrl(value) {
  const url = new URL(value);
  return `${url.origin}${url.pathname === "/" ? "" : url.pathname.replace(/\/$/, "")}`;
}

const failures = [];
const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`, { redirect: "manual" });
if (sitemapResponse.status !== 200) throw new Error(`Sitemap returned ${sitemapResponse.status}`);
const sitemapXml = await sitemapResponse.text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decode(match[1]));

if (/<lastmod>/i.test(sitemapXml)) failures.push("Sitemap contains lastmod values without a verified modification-date source.");
if (new Set(sitemapUrls).size !== sitemapUrls.length) failures.push("Sitemap contains duplicate URLs.");
if (sitemapUrls.some((url) => /\/api\/|\.json(?:$|\?)/.test(url))) failures.push("Sitemap contains an API or utility URL.");

const titles = new Map();
const descriptions = new Map();
const internalLinks = new Set();
const report = [];

for (const productionUrl of sitemapUrls) {
  const productionPath = new URL(productionUrl).pathname;
  const localUrl = `${baseUrl}${productionPath === "/" ? "" : productionPath}`;
  const response = await fetch(localUrl, { redirect: "manual" });
  if (response.status !== 200) {
    failures.push(`${productionPath} returned ${response.status}${response.headers.get("location") ? ` -> ${response.headers.get("location")}` : ""}.`);
    continue;
  }

  const html = await response.text();
  const title = match(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = match(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i);
  const canonical = match(html, /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i);
  const ogUrl = match(html, /<meta[^>]+property="og:url"[^>]+content="([^"]*)"/i);
  const ogImage = match(html, /<meta[^>]+property="og:image"[^>]+content="([^"]*)"/i);
  const twitterCard = match(html, /<meta[^>]+name="twitter:card"[^>]+content="([^"]*)"/i);
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((item) => stripHtml(item[1]));
  const schemaBlocks = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((item) => item[1]);
  const schemaTypes = new Set();
  const schemaNodes = [];

  for (const block of schemaBlocks) {
    try {
      const parsed = JSON.parse(block);
      const nodes = parsed["@graph"] || [parsed];
      for (const node of nodes) {
        if (!node || typeof node !== "object") continue;
        schemaNodes.push(node);
        const types = Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]];
        for (const type of types) if (type) schemaTypes.add(type);
      }
    } catch (error) {
      failures.push(`${productionPath} contains invalid JSON-LD: ${error instanceof Error ? error.message : "parse error"}.`);
    }
  }

  const expectedCanonical = normalizeUrl(productionUrl);
  if (!title) failures.push(`${productionPath} has no title.`);
  if (!description) failures.push(`${productionPath} has no meta description.`);
  if (h1s.length !== 1) failures.push(`${productionPath} has ${h1s.length} H1 elements.`);
  if (!canonical || normalizeUrl(canonical) !== expectedCanonical) failures.push(`${productionPath} canonical is ${canonical || "missing"}; expected ${expectedCanonical}.`);
  if (!ogUrl || normalizeUrl(ogUrl) !== expectedCanonical) failures.push(`${productionPath} Open Graph URL is ${ogUrl || "missing"}; expected ${expectedCanonical}.`);
  if (!ogImage || /\.svg(?:$|\?)/i.test(ogImage)) failures.push(`${productionPath} has no reliable raster Open Graph image.`);
  if (twitterCard !== "summary_large_image") failures.push(`${productionPath} does not emit a summary_large_image Twitter card.`);
  if (!schemaTypes.has("WebPage")) failures.push(`${productionPath} has no WebPage schema.`);

  const nodesOfType = (type) => schemaNodes.filter((node) => (Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]]).includes(type));
  const organizationNodes = nodesOfType("Organization");
  const websiteNodes = nodesOfType("WebSite");
  const webPageNodes = nodesOfType("WebPage");
  if (organizationNodes.length !== 1) failures.push(`${productionPath} has ${organizationNodes.length} Organization entities; expected exactly one.`);
  if (websiteNodes.length !== 1) failures.push(`${productionPath} has ${websiteNodes.length} WebSite entities; expected exactly one.`);
  if (webPageNodes.length !== 1) failures.push(`${productionPath} has ${webPageNodes.length} WebPage entities; expected exactly one.`);

  const entityIds = new Map();
  for (const node of schemaNodes) {
    const id = node["@id"];
    if (typeof id !== "string") continue;
    if (entityIds.has(id)) failures.push(`${productionPath} repeats JSON-LD entity identifier ${id}.`);
    else entityIds.set(id, node["@type"] || "unknown");
  }

  for (const node of webPageNodes) {
    if (typeof node.url !== "string" || normalizeUrl(node.url) !== expectedCanonical) {
      failures.push(`${productionPath} WebPage URL is ${node.url || "missing"}; expected ${expectedCanonical}.`);
    }
  }

  const breadcrumbNodes = nodesOfType("BreadcrumbList");
  const visibleBreadcrumb = html.match(/<nav[^>]+aria-label="Breadcrumb"[^>]*>([\s\S]*?)<\/nav>/i);
  if (breadcrumbNodes.length > 1) failures.push(`${productionPath} has more than one BreadcrumbList entity.`);
  if (breadcrumbNodes.length === 1) {
    const items = Array.isArray(breadcrumbNodes[0].itemListElement) ? breadcrumbNodes[0].itemListElement : [];
    const names = items.map((item) => item?.name).filter(Boolean);
    const visibleNames = visibleBreadcrumb ? stripHtml(visibleBreadcrumb[1]) : "";
    if (!visibleBreadcrumb || visibleNames !== names.join(" ")) failures.push(`${productionPath} breadcrumb schema does not match the visible breadcrumb.`);
    const lastItem = items.at(-1)?.item;
    if (typeof lastItem !== "string" || normalizeUrl(lastItem) !== expectedCanonical) failures.push(`${productionPath} breadcrumb does not end at the canonical URL.`);
  } else if (visibleBreadcrumb) {
    failures.push(`${productionPath} has a visible breadcrumb but no BreadcrumbList schema.`);
  }

  for (const node of nodesOfType("SoftwareApplication")) {
    if (!node.name || !node.description || !stripHtml(html).includes(String(node.name))) failures.push(`${productionPath} has unsupported SoftwareApplication data.`);
    if (typeof node.url !== "string" || normalizeUrl(node.url) !== expectedCanonical) failures.push(`${productionPath} SoftwareApplication URL does not match its canonical.`);
    if (productionPath === "/fixify" && node.offers) failures.push("/fixify exposes an Offer without verified public pricing and availability.");
    if (node.offers) {
      const offers = Array.isArray(node.offers) ? node.offers : [node.offers];
      for (const offer of offers) {
        if (offer?.price === undefined || !offer?.priceCurrency || !offer?.url || !offer?.availability) {
          failures.push(`${productionPath} contains an incomplete SoftwareApplication Offer.`);
        }
      }
    }
  }

  for (const node of nodesOfType("Service")) {
    if (!node.name || !node.description || !stripHtml(html).includes(String(node.name))) failures.push(`${productionPath} has unsupported Service data.`);
    if (typeof node.url !== "string" || normalizeUrl(node.url) !== expectedCanonical) failures.push(`${productionPath} Service URL does not match its canonical.`);
  }

  if (titles.has(title)) failures.push(`${productionPath} duplicates the title used by ${titles.get(title)}.`); else titles.set(title, productionPath);
  if (descriptions.has(description)) failures.push(`${productionPath} duplicates the description used by ${descriptions.get(description)}.`); else descriptions.set(description, productionPath);

  for (const link of html.matchAll(/<a[^>]+href="([^"]+)"/gi)) {
    const href = decode(link[1]);
    if (href.startsWith("/") && !href.startsWith("//")) internalLinks.add(new URL(href, baseUrl).href.split("#")[0]);
  }

  report.push({ path: productionPath, title, description, h1: h1s[0] || "", canonical, schema: [...schemaTypes].join(", ") });
}

for (const link of internalLinks) {
  const response = await fetch(link, { redirect: "manual" });
  if (response.status < 200 || response.status >= 400) failures.push(`Internal link ${link} returned ${response.status}.`);
}

console.table(report);
if (failures.length) {
  console.error(`\nSEO validation failed with ${failures.length} issue(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`\nSEO validation passed for ${report.length} indexable routes and ${internalLinks.size} internal link targets.`);
