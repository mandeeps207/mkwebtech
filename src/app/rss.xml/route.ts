import { getBlogPosts } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = getBlogPosts()
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      return `<item>
        <title>${escapeXml(post.title)}</title>
        <link>${url}</link>
        <guid>${url}</guid>
        <description>${escapeXml(post.description)}</description>
        <author>${escapeXml(post.author)}</author>
        <category>${escapeXml(post.category)}</category>
        ${post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("")}
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      </item>`;
    })
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>MK WebTech Blog</title>
        <link>${absoluteUrl("/blog")}</link>
        <description>Commerce engineering, Shopify app, WordPress plugin, performance, and product UX notes.</description>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`,
    {
      headers: { "content-type": "application/rss+xml; charset=utf-8" }
    }
  );
}
