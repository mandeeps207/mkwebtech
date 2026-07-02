import type { MetadataRoute } from "next";
import { blogTaxonomySlug, getBlogCategories, getBlogPosts, getBlogTags, getDocs, getProducts } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/products", "/products/shopify", "/products/wordpress", "/blog", "/docs", "/changelog", "/pricing", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...staticRoutes.map((route) => ({ url: absoluteUrl(route), lastModified: new Date() })),
    ...getProducts().map((product) => ({ url: absoluteUrl(`/products/${product.slug}`), lastModified: new Date() })),
    ...getBlogPosts().map((post) => ({ url: absoluteUrl(`/blog/${post.slug}`), lastModified: new Date(post.date) })),
    ...getBlogCategories().map((category) => ({ url: absoluteUrl(`/blog/categories/${blogTaxonomySlug(category)}`), lastModified: new Date() })),
    ...getBlogTags().map((tag) => ({ url: absoluteUrl(`/blog/tags/${blogTaxonomySlug(tag)}`), lastModified: new Date() })),
    ...getDocs().map((doc) => ({ url: absoluteUrl(`/docs/${doc.slug}`), lastModified: new Date() }))
  ];
}
