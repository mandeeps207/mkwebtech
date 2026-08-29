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
  const seo = {
    "mkwebtech-cta-studio": {
      title: "WordPress CTA Plugin - CTA Studio",
      description: "Create inline CTAs, popups, sticky bars, floating buttons, countdown offers, and track clicks inside WordPress with CTA Studio."
    },
    "mkwebtech-variation-swatches-for-woocommerce": {
      title: "WooCommerce Variation Swatches Plugin",
      description: "Add accessible color, dual-color, and image variation swatches to WooCommerce while retaining native variation selects."
    },
    "mkwebtech-conversion-blocks": {
      title: "Gutenberg Conversion Blocks for WordPress",
      description: "Add countdowns, notification bars, promo banners, coupon offers, and floating CTAs to WordPress with lightweight Gutenberg blocks."
    }
  }[product.slug] ?? { title: product.title, description: product.description };
  const socialImage = product.heroImage.endsWith(".png") || product.heroImage.endsWith(".jpg") ? product.heroImage : undefined;
  const socialImageSize = product.heroImage.includes("banner-1544x500") ? { imageWidth: 1544, imageHeight: 500 } : {};
  return pageMetadata({ title: seo.title, description: seo.description, path, image: socialImage, imageAlt: product.title, ...socialImageSize });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
