import Link from "next/link";
import { Rss, Search } from "lucide-react";
import { BlogCard } from "@/components/cards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { blogTaxonomySlug, getBlogCategories, getBlogTags } from "@/lib/content";
import type { BlogPost } from "@/types/content";

export function BlogListing({
  posts,
  title,
  description,
  eyebrow = "Blog"
}: {
  posts: BlogPost[];
  title: string;
  description: string;
  eyebrow?: string;
}) {
  const [featured, ...rest] = posts;
  const categories = getBlogCategories();
  const tags = getBlogTags();

  return (
    <section className="container py-16">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="accent">{eyebrow}</Badge>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance">{title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>
      </div>

      <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-9" placeholder="Search articles by topic, platform, or workflow" data-search-index="/blog/search-index.json" />
        </div>
        <Button variant="outline" asChild>
          <Link href="/rss.xml">
            <Rss className="h-4 w-4" /> RSS
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1fr_260px]">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link key={category} href={`/blog/categories/${blogTaxonomySlug(category)}`}>
              <Badge variant="outline">{category}</Badge>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {tags.slice(0, 8).map((tag) => (
            <Link key={tag} href={`/blog/tags/${blogTaxonomySlug(tag)}`}>
              <Badge variant="secondary">{tag}</Badge>
            </Link>
          ))}
        </div>
      </div>

      {featured ? (
        <Link href={`/blog/${featured.slug}`} className="group mt-12 grid overflow-hidden rounded-lg border border-border bg-card shadow-soft md:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-10">
            <Badge variant="accent">{featured.category}</Badge>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance">{featured.title}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">{featured.description}</p>
            <div className="mt-6 text-sm text-muted-foreground">
              {featured.author} · {featured.readingTime}
            </div>
          </div>
          <div className="min-h-72 bg-cover bg-center transition duration-500 group-hover:scale-[1.02]" style={{ backgroundImage: `url(${featured.image})` }} />
        </Link>
      ) : null}

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {(featured ? rest : posts).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
