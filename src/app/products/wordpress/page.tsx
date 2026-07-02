import type { Metadata } from "next";
import { ProductCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { getProducts } from "@/lib/content";

export const metadata: Metadata = { title: "WordPress Plugins", description: "Premium WordPress plugins from MK WebTech." };

export default function WordPressProductsPage() {
  return (
    <section className="container py-16">
      <SectionHeading eyebrow="WordPress" title="WordPress plugins for faster, cleaner workflows" description="Reliable plugins for performance, integrations, and publishing operations." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{getProducts("wordpress").map((product) => <ProductCard key={product.slug} product={product} />)}</div>
    </section>
  );
}
