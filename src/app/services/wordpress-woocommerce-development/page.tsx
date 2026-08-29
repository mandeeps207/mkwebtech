import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/seo";

const path = "/services/wordpress-woocommerce-development";
const description = "Custom WordPress plugins and WooCommerce development for admin tools, integrations, product, cart, checkout, and order workflows.";
export const metadata: Metadata = pageMetadata({ title: "WordPress & WooCommerce Development", description, path });

export default function WordPressWooCommerceDevelopmentPage() {
  return <ServicePage
    path={path}
    title="WordPress and WooCommerce development"
    description={description}
    serviceType="WordPress and WooCommerce development"
    intro="Build a plugin, extension, or integration around the way your site or store actually operates. The work can start from a new requirement, an existing plugin that needs careful extension, or a WooCommerce workflow that has outgrown manual handling."
    sections={[
      {
        title: "Plugins and admin workflows",
        description: "Create focused functionality that belongs inside WordPress rather than in fragile theme snippets.",
        items: ["Custom WordPress plugins", "Existing plugin customization", "Settings screens and admin interfaces", "Roles, permissions, validation, and secure data handling"]
      },
      {
        title: "WooCommerce behavior",
        description: "Extend store operations while respecting WooCommerce data and lifecycle conventions.",
        items: ["Product and catalog workflows", "Cart and checkout behavior", "Order processing and post-purchase tools", "Compatibility with native variation and order flows"]
      },
      {
        title: "Integrations and maintenance",
        description: "Connect WordPress to the systems around it and keep the result supportable as dependencies change.",
        items: ["Third-party REST and GraphQL APIs", "Webhooks and scheduled processing", "Performance and compatibility review", "Testing, upgrades, debugging, and maintenance"]
      }
    ]}
    related={[
      { title: "MkWebTech CTA Studio", description: "A first-party WordPress plugin for inline CTAs, popups, sticky bars, floating buttons, countdowns, and conversion tracking.", href: "/products/mkwebtech-cta-studio", anchor: "Review CTA Studio" },
      { title: "MKWebTech Conversion Blocks", description: "A first-party Gutenberg plugin for campaign blocks, ready-made patterns, and optional WooCommerce display targeting.", href: "/products/mkwebtech-conversion-blocks", anchor: "Review Conversion Blocks" },
      { title: "Variation Swatches for WooCommerce", description: "A first-party WooCommerce plugin for accessible color, dual-color, and image swatches.", href: "/products/mkwebtech-variation-swatches-for-woocommerce", anchor: "Review Variation Swatches" }
    ]}
  />;
}
