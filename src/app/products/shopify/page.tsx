import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const description = "Explore Fixify and MK WebTech's Shopify focus across customer accounts, order workflows, merchant operations, APIs, and integrations.";
export const metadata: Metadata = pageMetadata({ title: "Shopify Apps & Order Workflows", description, path: "/products/shopify" });

export default function ShopifyProductsPage() {
  return (
    <section className="container py-16">
      <JsonLd nodes={[
        webPageSchema({ path: "/products/shopify", name: "Shopify apps from MK WebTech", description, breadcrumbs: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Shopify apps", path: "/products/shopify" }] }),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Shopify apps", path: "/products/shopify" }])
      ]} />
      <Breadcrumb items={[{ label: "Products", href: "/products" }, { label: "Shopify apps" }]} />
      <div className="mt-8">
        <SectionHeading level="h1" eyebrow="Shopify" title="Shopify apps for focused commerce workflows" description="Fixify is MK WebTech's first documented Shopify app. Current availability is handled by enquiry, and future products will follow the same focus on clear merchant controls and practical customer workflows." />
      </div>
      <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-card p-8 text-center shadow-soft">
        <Badge variant="secondary">
          <ShoppingBag className="mr-1 h-3 w-3" />
          Shopify shipping-address editing
        </Badge>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight">Fixify</h2>
        <p className="mt-3 text-muted-foreground">
          Fixify supports eligible shipping-address corrections through Shopify Customer Accounts, subject to merchant settings and order eligibility.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/fixify">View Fixify <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact?product=fixify">
              Contact us about Fixify
            </Link>
          </Button>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-4xl border-t border-border pt-10">
        <h2 className="text-2xl font-semibold">Shopify development focus</h2>
        <p className="mt-4 leading-7 text-muted-foreground">MK WebTech works on app authentication, Admin GraphQL API integrations, customer account extensions, order workflows, webhooks, billing, and connections to external systems. That work is offered as custom development; this page does not imply that multiple public Shopify apps or a public Fixify installation link are currently available.</p>
        <Link href="/services/shopify-app-development" className="mt-5 inline-flex items-center gap-2 font-medium underline underline-offset-4">Explore Shopify app development services <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
