import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { BlogPost, Product } from "@/types/content";
import { formatDate } from "@/lib/utils";

export function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Icon className="h-5 w-5 text-teal-600 dark:text-teal-300" />
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image src={product.heroImage} alt={product.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
      </div>
      <div className="p-5">
        <Badge variant="secondary">{product.category === "shopify" ? "Shopify App" : "WordPress Plugin"}</Badge>
        <div className="mt-4 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-primary" />
        </div>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{product.description}</p>
      </div>
    </Link>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[16/9] bg-muted">
        <Image src={post.image} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 33vw, 100vw" />
      </div>
      <div className="p-5">
        <div className="text-xs text-muted-foreground">{formatDate(post.date)} · {post.readingTime}</div>
        <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{post.description}</p>
      </div>
    </Link>
  );
}

export function PricingCard({ name, price, features, highlighted }: { name: string; price: string; features: string[]; highlighted?: boolean }) {
  return (
    <div className={`rounded-lg border p-6 shadow-sm ${highlighted ? "border-primary bg-card shadow-soft" : "border-border bg-card"}`}>
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="mt-4 text-3xl font-semibold">{price}</div>
      <Button className="mt-6 w-full" variant={highlighted ? "default" : "outline"}>Get started</Button>
      <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
