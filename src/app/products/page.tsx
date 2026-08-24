import type { Metadata } from "next";
import { ProductCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/content";

export const metadata: Metadata = { title: "Products", description: "Shopify apps and WordPress plugins by MK WebTech." };

export default function ProductsPage() {
  const products = getProducts();
  return (
    <section className="container py-16">
      <SectionHeading eyebrow="Products" title="MK WebTech product catalog" description="Practical tools for Shopify merchants and WordPress teams." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        <div className="rounded-lg border border-dashed border-border bg-muted/30 p-6">
          <Badge variant="secondary">
            <Store className="mr-1 h-3 w-3" />
            Shopify App
          </Badge>
          <h2 className="mt-5 text-xl font-semibold">Fixify</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Customer-friendly, merchant-controlled editing for eligible Shopify orders before fulfillment.
          </p>
          <Button className="mt-5" variant="outline" asChild>
            <Link href="/fixify">View Fixify <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
