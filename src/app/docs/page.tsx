import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { getDocs } from "@/lib/content";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const description = "Setup and usage guides for MK WebTech products, including CTA Studio, Variation Swatches for WooCommerce, and Fixify.";

export const metadata: Metadata = pageMetadata({
  title: "Product Documentation",
  description,
  path: "/docs"
});

export default function DocsIndexPage() {
  const docs = getDocs();
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Documentation", path: "/docs" }];

  return (
    <section className="container py-16">
      <JsonLd nodes={[
        webPageSchema({ path: "/docs", name: "MK WebTech product documentation", description, breadcrumbs }),
        breadcrumbSchema(breadcrumbs)
      ]} />
      <Breadcrumb items={[{ label: "Documentation" }]} />
      <div className="mt-8">
        <SectionHeading
          level="h1"
          eyebrow="Documentation"
          title="Product setup and usage guides"
          description="Practical documentation for the WordPress plugins and Shopify app currently published by MK WebTech."
        />
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
        {docs.map((doc) => (
          <Link key={doc.slug} href={`/docs/${doc.slug}`} className="rounded-lg border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
            <BookOpen className="h-5 w-5 text-teal-600" />
            <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{doc.section}</div>
            <h2 className="mt-2 text-xl font-semibold">{doc.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{doc.description}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">Read guide <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
