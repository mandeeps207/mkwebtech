import type { Metadata } from "next";
import { ProductCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";
import { getProducts } from "@/lib/content";

export const metadata: Metadata = { title: "WordPress Plugins", description: "WordPress plugins from MK WebTech for conversion tools and WooCommerce product experiences." };

export default function WordPressProductsPage() {
  return (
    <section className="container py-16">
      <SectionHeading eyebrow="WordPress" title="WordPress plugins" description="MK WebTech builds focused WordPress plugins for conversion workflows and WooCommerce product experiences." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{getProducts("wordpress").map((product) => <ProductCard key={product.slug} product={product} />)}</div>
    </section>
  );
}
