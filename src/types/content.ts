export type ProductCategory = "shopify" | "wordpress";

export type Product = {
  slug: string;
  title: string;
  category: ProductCategory;
  description: string;
  heroImage: string;
  gallery: string[];
  screenshots?: { src: string; alt: string; caption: string }[];
  features: string[];
  benefits: string[];
  pricing: string;
  pricingPlans?: { name: string; price: string; description: string; features: string[] }[];
  installation?: string[];
  documentation?: { label: string; href: string; description: string }[];
  support?: { label: string; href: string; description: string }[];
  downloadUrl: string;
  supportUrl: string;
  docsUrl: string;
  changelog: string[];
  faq: { question: string; answer: string }[];
  content: string;
};

export type DocPage = {
  slug: string;
  title: string;
  description: string;
  section: string;
  order: number;
  content: string;
};

export type TocItem = {
  title: string;
  url: string;
  depth: number;
};
