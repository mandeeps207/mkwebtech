import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/product-detail";
import { getProduct, getProducts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const path = `/products/${product.slug}`;
  const title = product.slug === "mkwebtech-cta-studio"
    ? "WordPress CTA Plugin - CTA Studio"
    : "WooCommerce Variation Swatches Plugin";
  const description = product.slug === "mkwebtech-cta-studio"
    ? "Create inline CTAs, popups, sticky bars, floating buttons, countdown offers, and track clicks inside WordPress with CTA Studio."
    : "Add accessible color, dual-color, and image variation swatches to WooCommerce while retaining native variation selects.";
  const socialImage = product.heroImage.endsWith(".png") || product.heroImage.endsWith(".jpg") ? product.heroImage : undefined;
  return pageMetadata({ title, description, path, image: socialImage });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
