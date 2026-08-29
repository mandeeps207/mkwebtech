import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Blocks, ShoppingBag, Workflow } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";

const description = "Custom WordPress, WooCommerce, Shopify, and ecommerce development for plugins, apps, integrations, admin tools, and store workflows.";
export const metadata: Metadata = pageMetadata({ title: "Custom Ecommerce Development Services", description, path: "/services" });

const services = [
  {
    title: "WordPress and WooCommerce development",
    description: "Custom plugins, WooCommerce extensions, admin interfaces, APIs, compatibility work, and maintained store workflows.",
    href: "/services/wordpress-woocommerce-development",
    icon: Blocks
  },
  {
    title: "Shopify app development",
    description: "Apps and integrations using Shopify authentication, Admin GraphQL API, customer accounts, webhooks, billing, and external services.",
    href: "/services/shopify-app-development",
    icon: ShoppingBag
  },
  {
    title: "Ecommerce development and integrations",
    description: "Cross-platform work spanning WordPress, WooCommerce, Shopify, Magento, React, Next.js, PHP, APIs, and store migrations.",
    href: "/services/ecommerce-development",
    icon: Workflow
  }
];

export default function ServicesPage() {
  const breadcrumbs = [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }];
  return (
    <section className="container py-16">
      <JsonLd nodes={[
        webPageSchema({ path: "/services", name: "MK WebTech development services", description, breadcrumbs }),
        breadcrumbSchema(breadcrumbs)
      ]} />
      <Breadcrumb items={[{ label: "Services" }]} />
      <div className="mt-8">
        <SectionHeading level="h1" eyebrow="Services" title="Custom development for commerce platforms and connected systems" description="Use an existing MK WebTech product when it already fits. Commission custom development when the workflow, integration, or operational constraint is specific to your business." />
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map(({ title, description: serviceDescription, href, icon: Icon }) => (
          <div key={href} className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <Icon className="h-6 w-6 text-teal-600" />
            <h2 className="mt-5 text-xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{serviceDescription}</p>
            <Link href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4">Review this service <ArrowRight className="h-4 w-4" /></Link>
          </div>
        ))}
      </div>
      <div className="mt-14 grid gap-6 border-t border-border pt-12 lg:grid-cols-2">
        <div>
          <Badge variant="secondary">Existing product</Badge>
          <h2 className="mt-4 text-2xl font-semibold">Choose a published product for a supported, repeatable workflow</h2>
          <p className="mt-3 leading-7 text-muted-foreground">CTA Studio, Conversion Blocks, Variation Swatches for WooCommerce, and Fixify each solve a defined problem with documented capabilities and limits.</p>
          <Button className="mt-5" variant="outline" asChild><Link href="/products">Explore the product catalog</Link></Button>
        </div>
        <div>
          <Badge variant="secondary">Custom project</Badge>
          <h2 className="mt-4 text-2xl font-semibold">Build around a store-specific requirement or integration</h2>
          <p className="mt-3 leading-7 text-muted-foreground">Custom work begins with the current workflow, data ownership, platform constraints, compatibility requirements, and a maintainable delivery plan.</p>
          <Button className="mt-5" asChild><Link href="/contact?subject=custom-development">Discuss a custom project</Link></Button>
        </div>
      </div>
    </section>
  );
}
