import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "@/components/blog-listing";
import { blogTaxonomySlug, getBlogTags, getPostsByTag } from "@/lib/content";

export function generateStaticParams() {
  return getBlogTags().map((tag) => ({ tag: blogTaxonomySlug(tag) }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const match = getBlogTags().find((item) => blogTaxonomySlug(item) === tag);
  if (!match) return {};
  return {
    title: `${match} Posts`,
    description: `MK WebTech blog posts tagged ${match}.`,
    alternates: { canonical: `/blog/tags/${tag}` }
  };
}

export default async function BlogTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const match = getBlogTags().find((item) => blogTaxonomySlug(item) === tag);
  if (!match) notFound();
  const posts = getPostsByTag(tag);
  return (
    <BlogListing
      posts={posts}
      eyebrow="Tag"
      title={`Posts tagged ${match}`}
      description={`Focused articles connected to ${match.toLowerCase()} across Shopify, WordPress, commerce UX, and product operations.`}
    />
  );
}
