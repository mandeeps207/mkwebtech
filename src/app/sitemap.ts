import type { MetadataRoute } from "next";
import { getDocs, getProducts } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/fixify",
    "/fixify/privacy-policy",
    "/products",
    "/products/shopify",
    "/products/wordpress",
    "/services",
    "/services/wordpress-woocommerce-development",
    "/services/shopify-app-development",
    "/services/ecommerce-development",
    "/docs",
    "/changelog",
    "/about",
    "/contact",
    "/privacy",
    "/terms"
  ];
  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route) })),
    ...getProducts().map((product) => ({ url: absoluteUrl(`/products/${product.slug}`) })),
    ...getDocs().map((doc) => ({ url: absoluteUrl(`/docs/${doc.slug}`) }))
  ];
}
