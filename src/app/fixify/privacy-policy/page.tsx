import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fixify Privacy Policy",
  description: "Learn how Fixify processes merchant, customer, and order information when providing Shopify order-editing functionality.",
  alternates: { canonical: "/fixify/privacy-policy" },
  openGraph: {
    title: "Fixify Privacy Policy | MK WebTech",
    description: "How Fixify processes information to provide Shopify order-editing functionality.",
    url: "/fixify/privacy-policy",
    type: "article"
  }
};

export default function FixifyPrivacyPolicyPage() {
  return (
    <section className="container max-w-3xl py-16">
      <Link href="/fixify" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to Fixify
      </Link>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">Fixify Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: August 24, 2026</p>

      <div className="prose-mk mt-8">
        <p>
          This policy explains how MK WebTech processes information through Fixify, its Shopify order-editing application. Fixify integrates with Shopify and uses Shopify APIs to provide its functionality. MK WebTech operates Fixify independently and is not Shopify.
        </p>

        <h2>Information Fixify processes</h2>
        <p>Fixify may process information needed to provide, secure, and administer order-editing functionality, including:</p>
        <h3>Merchant and store information</h3>
        <ul>
          <li>Shopify shop or store identifiers and app installation or session information.</li>
          <li>Merchant configuration, settings, and supported editing permissions.</li>
          <li>Billing and subscription entitlement information.</li>
        </ul>
        <h3>Customer and order information</h3>
        <ul>
          <li>Shopify customer identifiers and the association between a customer and an order.</li>
          <li>Shopify order identifiers, order display or reference information, order status, and fulfillment information.</li>
          <li>Line items, selected products or variants, quantities, order totals, and currencies.</li>
        </ul>
        <h3>Shipping information</h3>
        <p>
          When a customer requests an eligible shipping-address correction, Fixify may temporarily process first and last name, company where supplied, address lines, city, province or state, postal code, and country. Fixify is designed to avoid unnecessarily persisting raw shipping-address information where it is not required. It may retain privacy-reduced evidence, such as hashes or idempotency records, when needed for safe processing.
        </p>
        <h3>Operational records</h3>
        <p>
          Fixify stores or may store keyed customer references or hashes, order-associated identifiers, edit proposals, completed edit history and activity, usage and accounting records, evidence needed to complete or reconcile an operation where applicable, and webhook or idempotency records used to prevent duplicate processing.
        </p>
        <p>
          Fixify does not currently request customer email addresses or phone numbers for its core Customer Account order-editing workflow. Shopify or a separate support interaction may process contact information under its own applicable terms and privacy practices.
        </p>

        <h2>Why information is processed</h2>
        <p>Fixify processes information to:</p>
        <ul>
          <li>Authenticate merchants and customers and verify order ownership.</li>
          <li>Determine whether an order and requested edit are eligible.</li>
          <li>Enforce merchant settings and perform supported order changes.</li>
          <li>Prevent duplicate edits and detect stale or concurrent changes.</li>
          <li>Maintain edit history and enforce Free and Pro usage rules.</li>
          <li>Maintain application security and respond to support requests.</li>
          <li>Handle Shopify privacy and compliance requests.</li>
          <li>Meet applicable legal and operational obligations.</li>
        </ul>

        <h2>Shopify and service providers</h2>
        <p>
          Fixify integrates with Shopify and uses Shopify APIs and services to authenticate users, access eligible order information, and perform supported changes. Shopify processes information under its own terms and privacy practices.
        </p>
        <p>
          MK WebTech uses Vercel for website and application infrastructure and may use other trusted providers for hosting, managed database services, security, and application operations. These providers receive information only as needed to perform services for MK WebTech and are subject to applicable contractual and confidentiality obligations.
        </p>

        <h2>Data retention</h2>
        <p>
          Retention depends on the information and why it is needed. Short-lived operational data may expire after it is no longer required. Edit and activity records may be retained to provide merchant history and application functionality. Billing and usage records may be retained for account and usage administration. Financial, operation, or idempotency evidence may be retained where needed to prevent duplicate actions or reconcile an operation.
        </p>
        <p>
          Data is deleted or anonymized when required by a valid Shopify privacy request, subject to legitimate legal, security, and operational retention requirements. Shop-associated data is removed following Shopify shop-redaction requirements according to the application&apos;s implementation. Deletion may therefore take place through an established compliance process rather than immediately upon uninstall.
        </p>

        <h2>Shopify privacy requests</h2>
        <p>
          Fixify supports Shopify privacy and compliance workflows for access to customer-associated data, customer data deletion or redaction, and shop data deletion or redaction. Merchants and customers may also contact MK WebTech with privacy questions through the support channel below.
        </p>

        <h2>Security</h2>
        <p>
          Access to Fixify functionality is authenticated, and server-side authorization is used to validate access and order edits against Shopify. Fixify minimizes persisted data where practical. Secrets and session tokens are not intentionally exposed to customers. No internet service can guarantee absolute security, but MK WebTech applies safeguards appropriate to the application and the information it processes.
        </p>

        <h2>Your choices and contact</h2>
        <p>
          For privacy questions or a request related to Fixify, use the <Link href="/contact?product=fixify">MK WebTech contact page</Link> or email <a href="mailto:mkwebtecindia@gmail.com">mkwebtecindia@gmail.com</a>. Please identify Fixify and your Shopify store, but do not send passwords, API keys, access tokens, or payment information.
        </p>
      </div>

      <div className="mt-12 border-t border-border pt-8">
        <Link href="/contact?product=fixify" className="inline-flex items-center gap-2 font-medium hover:underline">
          Contact Fixify support <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
