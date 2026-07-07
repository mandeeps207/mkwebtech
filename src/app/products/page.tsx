import type { Metadata } from "next";
import { ProductCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import { Store } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/content";

export const metadata: Metadata = { title: "Products", description: "Shopify apps and WordPress plugins by MK WebTech." };

export default function ProductsPage() {
  const products = getProducts();
  return (
    <section className="container py-16">
      <SectionHeading eyebrow="Products" title="MK WebTech product catalog" description="Right now, MK WebTech has one live WordPress plugin available on WordPress.org." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        <div className="rounded-lg border border-dashed border-border bg-muted/30 p-6">
          <Badge variant="secondary">
            <Store className="mr-1 h-3 w-3" />
            Shopify
          </Badge>
          <h2 className="mt-5 text-xl font-semibold">Shopify apps coming soon</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            There are no live MK WebTech Shopify apps yet. This page will stay honest and update when an app is available.
          </p>
          <Button className="mt-5" variant="outline" asChild>
            <Link href="/products/shopify">View status</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
