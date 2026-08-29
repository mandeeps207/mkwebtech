import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";

export const SITE_NAME = "MK WebTech";
export const DEFAULT_SOCIAL_IMAGE = "/og-default.png";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

function brandedTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

export function pageMetadata({ title, description, path, image = DEFAULT_SOCIAL_IMAGE }: PageMetadataOptions): Metadata {
  const fullTitle = brandedTitle(title);
  const imageUrl = image.startsWith("http://") || image.startsWith("https://") ? image : absoluteUrl(image);

  return {
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${SITE_NAME} - WordPress plugins, Shopify apps and development` }]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl]
    }
  };
}

export type BreadcrumbItem = { name: string; path: string };
export type SchemaNode = Record<string, unknown>;

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function organizationAndWebsiteSchemas(): SchemaNode[] {
  return [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: SITE_NAME,
      url: absoluteUrl(),
      logo: {
        "@type": "ImageObject",
        "@id": absoluteUrl("/#logo"),
        url: absoluteUrl("/logo.jpg")
      }
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: absoluteUrl(),
      name: SITE_NAME,
      publisher: { "@id": absoluteUrl("/#organization") }
    }
  ];
}

export function breadcrumbSchema(items: BreadcrumbItem[]): SchemaNode {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(items.at(-1)?.path ?? "/")}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function webPageSchema({ path, name, description, breadcrumbs }: { path: string; name: string; description: string; breadcrumbs?: BreadcrumbItem[] }): SchemaNode {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#organization") },
    ...(breadcrumbs ? { breadcrumb: { "@id": `${absoluteUrl(path)}#breadcrumb` } } : {})
  };
}

export function softwareApplicationSchema({ name, description, path, image, free }: { name: string; description: string; path: string; image?: string; free?: boolean }): SchemaNode {
  return {
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(path)}#software`,
    name,
    description,
    url: absoluteUrl(path),
    publisher: { "@id": absoluteUrl("/#organization") },
    ...(image ? { image: image.startsWith("http://") || image.startsWith("https://") ? image : absoluteUrl(image) } : {}),
    ...(free ? {
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        url: absoluteUrl(path),
        availability: "https://schema.org/InStock"
      }
    } : {})
  };
}

export function serviceSchema({ name, description, path, serviceType }: { name: string; description: string; path: string; serviceType: string }): SchemaNode {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    serviceType,
    provider: { "@id": absoluteUrl("/#organization") }
  };
}
