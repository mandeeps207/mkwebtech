import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import sitemap from "@/app/sitemap";
import { breadcrumbSchema, organizationAndWebsiteSchemas, pageMetadata, serializeJsonLd, softwareApplicationSchema } from "@/lib/seo";

describe("SEO foundations", () => {
  it("creates absolute, page-specific canonical and social metadata", () => {
    const metadata = pageMetadata({ title: "Example Page", description: "A unique example description.", path: "/example" });
    expect(metadata.alternates?.canonical).toBe("https://mkwebtech.com/example");
    expect(metadata.openGraph).toMatchObject({ url: "https://mkwebtech.com/example", title: "Example Page | MK WebTech" });
    expect(metadata.twitter).toMatchObject({ card: "summary_large_image", title: "Example Page | MK WebTech" });
  });

  it("keeps the sitemap unique and free from fake dates and utility endpoints", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    expect(new Set(urls).size).toBe(urls.length);
    expect(entries.every((entry) => entry.lastModified === undefined)).toBe(true);
    expect(urls.some((url) => url.includes("/api/") || url.endsWith(".json"))).toBe(false);
    expect(urls).toEqual(expect.arrayContaining([
      "https://mkwebtech.com/services",
      "https://mkwebtech.com/services/wordpress-woocommerce-development",
      "https://mkwebtech.com/services/shopify-app-development",
      "https://mkwebtech.com/services/ecommerce-development"
    ]));
  });

  it("uses stable schema identifiers and safe JSON serialization", () => {
    const nodes = [
      ...organizationAndWebsiteSchemas(),
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Example <Page>", path: "/example" }]),
      softwareApplicationSchema({ name: "Example", description: "A free example.", path: "/example", free: true })
    ];
    const serialized = serializeJsonLd({ "@context": "https://schema.org", "@graph": nodes });
    expect(serialized).not.toContain("<Page>");
    expect(() => JSON.parse(serialized)).not.toThrow();
    expect(nodes.map((node) => node["@id"]).filter(Boolean)).toEqual(expect.arrayContaining([
      "https://mkwebtech.com/#organization",
      "https://mkwebtech.com/#website",
      "https://mkwebtech.com/example#breadcrumb",
      "https://mkwebtech.com/example#software"
    ]));
    expect(nodes.at(-1)?.offers).toEqual({
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url: "https://mkwebtech.com/example",
      availability: "https://schema.org/InStock"
    });
  });

  it("provides an exact 1200 by 630 raster social image", () => {
    const image = readFileSync(join(process.cwd(), "public", "og-default.png"));
    expect(image.subarray(1, 4).toString()).toBe("PNG");
    expect(image.readUInt32BE(16)).toBe(1200);
    expect(image.readUInt32BE(20)).toBe(630);
  });
});
