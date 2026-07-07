import type { MetadataRoute } from "next";
import { getDocs, getProducts } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/products", "/products/shopify", "/products/wordpress", "/docs", "/changelog", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route), lastModified: new Date() })),
    ...getProducts().map((product) => ({ url: absoluteUrl(`/products/${product.slug}`), lastModified: new Date() })),
    ...getDocs().map((doc) => ({ url: absoluteUrl(`/docs/${doc.slug}`), lastModified: new Date() }))
  ];
}
