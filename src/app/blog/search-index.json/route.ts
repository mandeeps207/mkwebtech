import { getBlogPosts } from "@/lib/content";

export function GET() {
  const posts = getBlogPosts().map((post) => ({
    title: post.title,
    description: post.description,
    category: post.category,
    tags: post.tags,
    author: post.author,
    date: post.date,
    readingTime: post.readingTime,
    slug: post.slug,
    href: `/blog/${post.slug}`,
    body: post.content
      .replace(/```[\s\S]*?```/g, "")
      .replace(/[#>*_`-]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  }));

  return Response.json({ generatedAt: new Date().toISOString(), posts });
}
