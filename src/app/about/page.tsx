import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const description = "Learn how MK WebTech builds focused WordPress plugins, Shopify apps, and custom ecommerce software around practical workflows.";
export const metadata: Metadata = pageMetadata({ title: "About the Product & Development Studio", description, path: "/about" });

export default function AboutPage() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }];
  return (
    <section className="container py-16">
      <JsonLd nodes={[
        webPageSchema({ path: "/about", name: "About MK WebTech", description, breadcrumbs }),
        breadcrumbSchema(breadcrumbs)
      ]} />
      <Breadcrumb items={[{ label: "About" }]} />
      <div className="mt-8">
        <SectionHeading level="h1" eyebrow="About" title="An independent software studio for commerce products and custom development" description="MK WebTech builds practical tools for WordPress, WooCommerce, and Shopify, then applies the same platform-aware approach to custom projects and integrations." />
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {[
          ["Products with defined jobs", "CTA Studio, Conversion Blocks, Variation Swatches for WooCommerce, and Fixify each address a specific workflow with documented features and limits."],
          ["Work with platform conventions", "Implementations account for the APIs, lifecycle events, permissions, compatibility requirements, and extension points of the underlying platform."],
          ["Keep delivery supportable", "Clear scope, readable code, testing of important paths, documentation, and upgrade planning matter as much as the first release."]
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-teal-600" />
            <h2 className="mt-4 font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-10 border-t border-border pt-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Current product work</h2>
          <p className="mt-4 leading-7 text-muted-foreground">The public catalog includes three free WordPress.org plugins and product information for Fixify, a Shopify app for controlled shipping-address corrections. Product pages explain what each tool does, who it helps, and where to get support.</p>
          <Link href="/products" className="mt-5 inline-flex items-center gap-2 font-medium underline underline-offset-4">Explore MK WebTech products <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Technical focus</h2>
          <p className="mt-4 leading-7 text-muted-foreground">Custom development covers WordPress, WooCommerce, Shopify, Magento, React, Next.js, PHP, APIs, store migrations, and integrations. The goal is not to claim every possible service, but to solve defined commerce and operational requirements in the right layer.</p>
          <Link href="/services" className="mt-5 inline-flex items-center gap-2 font-medium underline underline-offset-4">Review development services <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-5xl rounded-lg bg-foreground px-6 py-10 text-center text-background">
        <h2 className="text-3xl font-semibold">Have a product question or a custom workflow to discuss?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-background/70">Use the contact page for product support, Fixify enquiries, or a concise description of a development project.</p>
        <Button className="mt-6 bg-background text-foreground hover:bg-background/90" asChild><Link href="/contact">Contact MK WebTech</Link></Button>
      </div>
    </section>
  );
}
