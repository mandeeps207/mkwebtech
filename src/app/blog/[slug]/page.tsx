import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, UserRound } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { BlogCard } from "@/components/cards";
import { MdxContent } from "@/components/mdx-content";
import { Badge } from "@/components/ui/badge";
import { blogTaxonomySlug, getBlogPost, getBlogPosts, getRelatedBlogPosts } from "@/lib/content";
import { absoluteUrl, formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.image, alt: post.title }]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image]
    }
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const related = getRelatedBlogPosts(post.slug, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "MK WebTech" },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    keywords: post.tags.join(", ")
  };

  return (
    <article className="container py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
      <header className="mx-auto mt-10 max-w-3xl text-center">
        <Link href={`/blog/categories/${blogTaxonomySlug(post.category)}`}>
          <Badge variant="accent">{post.category}</Badge>
        </Link>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.description}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <UserRound className="h-4 w-4" />
            {post.author}
          </span>
          <span className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-2">
            <Clock3 className="h-4 w-4" />
            {post.readingTime}
          </span>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/blog/tags/${blogTaxonomySlug(tag)}`}>
              <Badge variant="secondary">{tag}</Badge>
            </Link>
          ))}
        </div>
      </header>
      <div className="relative mx-auto mt-10 aspect-[16/8] max-w-5xl overflow-hidden rounded-lg border border-border bg-muted shadow-soft">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="100vw" />
      </div>
      <div className="mx-auto mt-10 max-w-3xl">
        <MdxContent source={post.content} />
      </div>
      {related.length > 0 ? (
        <section className="mx-auto mt-16 max-w-5xl border-t border-border pt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Badge variant="outline">Related posts</Badge>
              <h2 className="mt-3 text-2xl font-semibold">Keep reading</h2>
            </div>
            <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              All posts
            </Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
