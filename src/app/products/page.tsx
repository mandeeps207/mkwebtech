import type { Metadata } from "next";
import { ProductCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { SearchBox } from "@/components/search-box";
import { getProducts } from "@/lib/content";

export const metadata: Metadata = { title: "Products", description: "Shopify apps and WordPress plugins by MK WebTech." };

export default function ProductsPage() {
  const products = getProducts();
  return (
    <section className="container py-16">
      <SectionHeading eyebrow="Products" title="Apps and plugins for sharper commerce operations" description="Browse production-ready tools for Shopify and WordPress." />
      <div className="mx-auto mt-8 max-w-md"><SearchBox placeholder="Search products" /></div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
    </section>
  );
}
