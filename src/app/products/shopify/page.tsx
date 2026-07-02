import type { Metadata } from "next";
import { ProductCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { getProducts } from "@/lib/content";

export const metadata: Metadata = { title: "Shopify Apps", description: "Premium Shopify apps from MK WebTech." };

export default function ShopifyProductsPage() {
  return (
    <section className="container py-16">
      <SectionHeading eyebrow="Shopify" title="Shopify apps built for growth and control" description="Native storefront, checkout, and admin workflows for modern merchants." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{getProducts("shopify").map((product) => <ProductCard key={product.slug} product={product} />)}</div>
    </section>
  );
}
