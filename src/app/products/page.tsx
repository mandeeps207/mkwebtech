import type { Metadata } from "next";
import { ProductCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/content";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const description = "Explore MK WebTech products for WordPress calls to action, WooCommerce variation swatches, and controlled Shopify shipping-address editing.";
export const metadata: Metadata = pageMetadata({ title: "WordPress Plugins & Shopify Apps", description, path: "/products" });

export default function ProductsPage() {
  const products = getProducts();
  return (
    <section className="container py-16">
      <JsonLd nodes={[
        webPageSchema({ path: "/products", name: "MK WebTech product catalog", description, breadcrumbs: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }] }),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }])
      ]} />
      <Breadcrumb items={[{ label: "Products" }]} />
      <div className="mt-8">
        <SectionHeading level="h1" eyebrow="Products" title="Software products for WordPress, WooCommerce, and Shopify" description="Focused tools for website owners, ecommerce teams, and agencies that need clearer conversion, product-selection, and post-purchase workflows." />
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        <div className="rounded-lg border border-dashed border-border bg-muted/30 p-6">
          <Badge variant="secondary">
            <Store className="mr-1 h-3 w-3" />
            Shopify App
          </Badge>
          <h2 className="mt-5 text-xl font-semibold">Fixify</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Customer-friendly, merchant-controlled shipping-address corrections for eligible Shopify orders.
          </p>
          <Button className="mt-5" variant="outline" asChild>
            <Link href="/fixify">View Fixify <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl gap-5 border-t border-border pt-10 md:grid-cols-2">
        <Link href="/products/wordpress" className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">WordPress and WooCommerce plugins</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">Compare the current WordPress.org plugins and choose the tool that matches your site or store workflow.</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">Browse WordPress plugins <ArrowRight className="h-4 w-4" /></span>
        </Link>
        <Link href="/products/shopify" className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Shopify apps</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">See Fixify and the Shopify workflows MK WebTech builds around customer accounts, orders, and merchant operations.</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">Explore Shopify apps <ArrowRight className="h-4 w-4" /></span>
        </Link>
      </div>
    </section>
  );
}
