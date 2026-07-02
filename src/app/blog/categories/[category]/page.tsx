import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "@/components/blog-listing";
import { blogTaxonomySlug, getBlogCategories, getPostsByCategory } from "@/lib/content";

export function generateStaticParams() {
  return getBlogCategories().map((category) => ({ category: blogTaxonomySlug(category) }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const match = getBlogCategories().find((item) => blogTaxonomySlug(item) === category);
  if (!match) return {};
  return {
    title: `${match} Articles`,
    description: `Articles in the ${match} category from MK WebTech.`,
    alternates: { canonical: `/blog/categories/${category}` }
  };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const match = getBlogCategories().find((item) => blogTaxonomySlug(item) === category);
  if (!match) notFound();
  const posts = getPostsByCategory(category);
  return (
    <BlogListing
      posts={posts}
      eyebrow="Category"
      title={`${match} articles`}
      description={`Writing about ${match.toLowerCase()} workflows, releases, implementation choices, and product strategy.`}
    />
  );
}
