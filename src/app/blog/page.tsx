import type { Metadata } from "next";
import { BlogListing } from "@/components/blog-listing";
import { getBlogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Commerce engineering, Shopify app, WordPress plugin, performance, and product UX notes from MK WebTech.",
  alternates: { canonical: "/blog", types: { "application/rss+xml": "/rss.xml" } },
  openGraph: {
    title: "MK WebTech Blog",
    description: "Practical commerce engineering notes from the MK WebTech team.",
    url: "/blog",
    type: "website"
  }
};

export default function BlogPage() {
  return (
    <BlogListing
      posts={getBlogPosts()}
      title="Commerce software notes for builders and operators"
      description="Deeply practical writing on Shopify apps, WordPress plugins, performance, support workflows, launch planning, and better product UX."
    />
  );
}
