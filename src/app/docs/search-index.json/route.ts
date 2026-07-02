import { getDocs } from "@/lib/content";

export function GET() {
  const docs = getDocs().map((doc) => ({
    title: doc.title,
    description: doc.description,
    section: doc.section,
    slug: doc.slug,
    href: `/docs/${doc.slug}`,
    body: doc.content
      .replace(/```[\s\S]*?```/g, "")
      .replace(/^---[\s\S]*?---/g, "")
      .replace(/[#>*_`-]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  }));

  return Response.json({ generatedAt: new Date().toISOString(), docs });
}
