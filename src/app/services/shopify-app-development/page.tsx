import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/seo";

const path = "/services/shopify-app-development";
const description = "Custom Shopify app development for Admin GraphQL API integrations, customer accounts, order workflows, webhooks, billing, and external systems.";
export const metadata: Metadata = pageMetadata({ title: "Shopify App Development", description, path });

export default function ShopifyAppDevelopmentPage() {
  return <ServicePage
    path={path}
    title="Shopify app development"
    description={description}
    serviceType="Shopify app development"
    intro="Develop Shopify apps and integrations around merchant operations, customer-account experiences, orders, and connected business systems. The scope is defined by Shopify's extension points, API behavior, permissions, and the store workflow that needs to improve."
    sections={[
      {
        title: "App foundations",
        description: "Set up the app lifecycle and merchant access around Shopify's platform requirements.",
        items: ["App authentication and session handling", "Admin GraphQL API operations", "Permission and data-scope planning", "Billing flows where a paid app requires them"]
      },
      {
        title: "Merchant and customer workflows",
        description: "Build within supported Shopify surfaces instead of forcing storefront behavior into the wrong extension point.",
        items: ["Embedded admin workflows", "Customer Account extensions", "Order and fulfillment-related processes", "Validation, eligibility rules, and merchant controls"]
      },
      {
        title: "Events and integrations",
        description: "Connect Shopify changes to application services and external systems with explicit failure handling.",
        items: ["Webhook processing and retries", "External APIs and service integrations", "Secure deployment and environment configuration", "Monitoring, maintenance, and platform upgrades"]
      }
    ]}
    related={[
      { title: "Fixify", description: "MK WebTech's first-party Shopify app for controlled shipping-address corrections on eligible orders through Shopify Customer Accounts.", href: "/fixify", anchor: "Review Fixify" },
      { title: "Shopify apps hub", description: "See Fixify and the Shopify workflows MK WebTech focuses on.", href: "/products/shopify", anchor: "Explore Shopify apps" }
    ]}
  />;
}
