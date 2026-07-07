import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { DocPage, Product, ProductCategory, TocItem } from "@/types/content";

const contentRoot = path.join(process.cwd(), "content");

function readMdxFile<T>(folder: string, slug: string) {
  const fullPath = path.join(contentRoot, folder, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { ...(data as T), slug, content };
}

function slugs(folder: string) {
  const directory = path.join(contentRoot, folder);
  if (!fs.existsSync(directory)) return [];
  const walk = (dir: string): string[] =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(fullPath);
      if (!entry.name.endsWith(".mdx")) return [];
      return path.relative(directory, fullPath).replace(/\\/g, "/").replace(/\.mdx$/, "");
    });
  return walk(directory);
}

export function getProducts(category?: ProductCategory) {
  const products = slugs("products").map((slug) => readMdxFile<Omit<Product, "slug" | "content">>("products", slug) as Product);
  return category ? products.filter((product) => product.category === category) : products;
}

export function getProduct(slug: string) {
  return getProducts().find((product) => product.slug === slug);
}

export function getDocs() {
  return slugs("docs")
    .map((slug) => readMdxFile<Omit<DocPage, "slug" | "content">>("docs", slug) as DocPage)
    .sort((a, b) => a.order - b.order);
}

export function getDoc(slugParts: string[]) {
  const slug = slugParts.join("/");
  return getDocs().find((doc) => doc.slug === slug);
}

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[`*_[\]()]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getTableOfContents(content: string): TocItem[] {
  const matches = content.matchAll(/^(##|###)\s+(.+)$/gm);
  return Array.from(matches).map((match) => {
    const title = match[2].trim();
    return {
      title,
      url: `#${slugifyHeading(title)}`,
      depth: match[1].length
    };
  });
}
