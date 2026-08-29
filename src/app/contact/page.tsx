import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const description = "Contact MK WebTech for WordPress plugin support, Fixify enquiries, Shopify app development, or custom ecommerce software projects.";
export const metadata: Metadata = pageMetadata({ title: "Product Support & Development Enquiries", description, path: "/contact" });

export default function ContactPage() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }];
  return (
    <section className="container py-16">
      <JsonLd nodes={[
        webPageSchema({ path: "/contact", name: "Contact MK WebTech", description, breadcrumbs }),
        breadcrumbSchema(breadcrumbs)
      ]} />
      <Breadcrumb items={[{ label: "Contact" }]} />
      <div className="mt-8">
        <SectionHeading level="h1" eyebrow="Contact" title="Contact MK WebTech" description="Choose the relevant subject and include enough context to understand the product, store, or development workflow involved." />
      </div>
      <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="font-semibold">Product support</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">For CTA Studio, Conversion Blocks, or Variation Swatches, the product pages link to their official WordPress.org support forums and setup information.</p>
          <Link href="/products/wordpress" className="mt-3 inline-block text-sm font-medium underline underline-offset-4">Find WordPress plugin support</Link>
          <h2 className="mt-8 font-semibold">Fixify enquiries</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">Select Fixify support and include your Shopify store domain plus a clear description of the shipping-address workflow or issue.</p>
          <Link href="/fixify" className="mt-3 inline-block text-sm font-medium underline underline-offset-4">Review Fixify first</Link>
          <h2 className="mt-8 font-semibold">Custom development</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">Describe the current process, the platform involved, what needs to change, and any important integration or rollout constraints.</p>
          <Link href="/services" className="mt-3 inline-block text-sm font-medium underline underline-offset-4">Review development services</Link>
        </div>
        <Suspense fallback={<div className="min-h-[32rem] rounded-lg border border-border bg-card p-6 shadow-sm" />}>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}
