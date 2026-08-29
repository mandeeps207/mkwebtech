import type { Metadata } from "next";
import { ProductCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { getProducts } from "@/lib/content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const description = "Browse free MK WebTech WordPress.org plugins for calls to action, campaign analytics, and accessible WooCommerce variation swatches.";
export const metadata: Metadata = pageMetadata({ title: "WordPress & WooCommerce Plugins", description, path: "/products/wordpress" });

export default function WordPressProductsPage() {
  return (
    <section className="container py-16">
      <JsonLd nodes={[
        webPageSchema({ path: "/products/wordpress", name: "WordPress and WooCommerce plugins", description, breadcrumbs: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "WordPress plugins", path: "/products/wordpress" }] }),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "WordPress plugins", path: "/products/wordpress" }])
      ]} />
      <Breadcrumb items={[{ label: "Products", href: "/products" }, { label: "WordPress plugins" }]} />
      <div className="mt-8">
        <SectionHeading level="h1" eyebrow="WordPress" title="WordPress and WooCommerce plugins" description="Two free WordPress.org plugins for building measurable calls to action and presenting WooCommerce product variations as accessible visual choices." />
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{getProducts("wordpress").map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      <div className="mt-12 rounded-lg border border-border bg-muted/30 p-7">
        <h2 className="text-2xl font-semibold">Need store-specific WordPress functionality?</h2>
        <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">MK WebTech also develops custom WordPress plugins, WooCommerce extensions, admin interfaces, API integrations, and product, cart, checkout, and order workflows.</p>
        <Link href="/services/wordpress-woocommerce-development" className="mt-5 inline-flex items-center gap-2 font-medium underline underline-offset-4">Explore WordPress and WooCommerce development <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
