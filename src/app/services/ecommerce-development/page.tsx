import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/seo";

const path = "/services/ecommerce-development";
const description = "Ecommerce development across WordPress, WooCommerce, Shopify, Magento, React, Next.js, PHP, APIs, migrations, and custom integrations.";
export const metadata: Metadata = pageMetadata({ title: "Custom Ecommerce Development", description, path });

export default function EcommerceDevelopmentPage() {
  return <ServicePage
    path={path}
    title="Custom ecommerce development and integrations"
    description={description}
    serviceType="Ecommerce development and systems integration"
    intro="Connect storefronts, admin tools, catalogs, orders, and external services when the requirement crosses platform boundaries. This broader service is for projects that do not fit entirely inside a single WordPress plugin or Shopify app."
    sections={[
      {
        title: "Platforms and application layers",
        description: "Choose the implementation layer based on the system that owns the workflow and data.",
        items: ["WordPress and WooCommerce", "Shopify and Magento", "React and Next.js interfaces", "PHP services and existing application code"]
      },
      {
        title: "APIs and connected systems",
        description: "Move validated data between commerce platforms and the services used by the business.",
        items: ["REST and GraphQL integrations", "Catalog, customer, and order synchronization", "Webhooks, background jobs, and failure recovery", "Internal admin and operational tools"]
      },
      {
        title: "Migration and ongoing change",
        description: "Plan transitions and upgrades around data integrity, compatibility, and rollback requirements.",
        items: ["Store and application migrations", "Incremental replacement of legacy workflows", "Performance and deployment review", "Testing, documentation, maintenance, and upgrades"]
      }
    ]}
    related={[
      { title: "WordPress and WooCommerce development", description: "Use the platform-specific service when the requirement belongs mainly inside WordPress or WooCommerce.", href: "/services/wordpress-woocommerce-development", anchor: "Review WordPress and WooCommerce development" },
      { title: "Shopify app development", description: "Use the Shopify-specific service for app authentication, Admin API work, customer accounts, webhooks, and billing.", href: "/services/shopify-app-development", anchor: "Review Shopify app development" }
    ]}
  />;
}
