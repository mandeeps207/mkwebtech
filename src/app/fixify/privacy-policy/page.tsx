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
      <p className="mt-4 text-sm text-muted-foreground">Effective and last updated: August 26, 2026</p>

      <div className="prose-mk mt-8">
        <h2>Scope</h2>
        <p>
          This policy applies to Fixify, the Shopify order-editing application operated by MK WebTech. It explains the categories of information Fixify processes, why that information is needed, and the choices available to merchants and customers. Fixify integrates with Shopify and uses Shopify APIs to provide its functionality. MK WebTech operates Fixify independently and is not Shopify.
        </p>

        <h2>Information processed</h2>
        <h3>Merchant and shop information</h3>
        <p>Fixify may process:</p>
        <ul>
          <li>Shopify shop identity and app installation or session information.</li>
          <li>Merchant configuration, editing permissions, and editing-window settings.</li>
          <li>Subscription or plan status and completed order-edit activity.</li>
        </ul>

        <h3>Customer and order information</h3>
        <p>To provide order editing, Fixify may process:</p>
        <ul>
          <li>Shopify customer or Customer Account identifiers.</li>
          <li>Order identifiers, order state, fulfillment state, and other eligibility information.</li>
          <li>Line items, products, variants, quantities, totals, and currencies.</li>
          <li>Customer name and shipping address when needed for an eligible shipping-address edit.</li>
        </ul>
        <p>
          Fixify does not currently request customer email addresses or phone numbers for its core Customer Account order-editing workflow. Shopify or a separate support interaction may process contact information under its own applicable terms and privacy practices.
        </p>

        <h3>Pseudonymous references and access records</h3>
        <p>
          Fixify uses pseudonymous, HMAC-based identifiers for certain stored customer and context references. Fixify also maintains metadata-only protected-data access audit records for security and compliance. These audit records identify the context and purpose of access without storing the raw protected payload.
        </p>

        <h2>Why information is processed</h2>
        <p>Fixify processes information to:</p>
        <ul>
          <li>Authenticate Shopify Customer Account requests.</li>
          <li>Verify customer and order ownership.</li>
          <li>Determine order and requested-edit eligibility.</li>
          <li>Apply merchant editing permissions and editing-window rules.</li>
          <li>Preview and execute eligible order edits.</li>
          <li>Maintain completed edit and activity records.</li>
          <li>Enforce billing and plan limits.</li>
          <li>Support security, auditing, and abuse prevention.</li>
          <li>Process privacy requests, redaction, and deletion requirements.</li>
          <li>Provide troubleshooting and support where necessary.</li>
        </ul>
        <p>Protected customer data is not used for advertising.</p>

        <h2>Payments</h2>
        <p>
          Fixify does not collect or store customer payment-card credentials. The current launch product supports eligible edits that do not require an additional customer payment or refund. Fixify plan billing is administered through Shopify.
        </p>

        <h2>Shopify and service providers</h2>
        <p>
          Fixify uses Shopify APIs and platform services to authenticate requests, access eligible order information, and complete supported edits. Shopify processes information under its own terms and privacy practices.
        </p>
        <p>
          MK WebTech also uses trusted providers for application hosting, managed database hosting, security, and operational infrastructure. These providers process information only as needed to provide their services to MK WebTech and are subject to applicable contractual and confidentiality obligations. Provider certifications are not certifications of Fixify or MK WebTech.
        </p>

        <h2>Security</h2>
        <p>
          Fixify uses HTTPS/TLS for data in transit and provider-managed encryption at rest. Application secrets are managed outside customer-facing code. Shopify Customer Account session tokens authenticate customer requests, and server-side authorization validates customer identity, order ownership, eligibility, and merchant rules before an edit is completed.
        </p>
        <p>
          Production access is restricted to authorized operational access. Fixify uses pseudonymous identifiers for certain stored references and maintains metadata-only protected-data access logs. No internet service can guarantee perfect security, but MK WebTech applies safeguards appropriate to the information and application.
        </p>

        <h2>Retention</h2>
        <p>
          Personal data is retained only for as long as needed for application functionality, security and audit records, operational requirements, and applicable obligations. Retention differs by record type. Short-lived request data may expire after processing, while edit activity, plan usage, security evidence, and compliance records may be retained for their relevant operational purpose.
        </p>
        <p>
          Data is deleted or anonymized when required by a valid privacy request, subject to legitimate legal, security, and operational retention requirements. Shop-associated information is processed according to Shopify shop-redaction requirements and the application&apos;s applicable data-handling rules.
        </p>

        <h2>Shopify privacy requests</h2>
        <p>
          Fixify supports Shopify&apos;s mandatory privacy processes, including <code>customers/data_request</code>, <code>customers/redact</code>, and <code>shop/redact</code>. At a high level, these processes allow applicable customer-associated information to be identified for access or export and allow customer or shop information to be redacted or deleted according to Fixify&apos;s data-handling and retention rules.
        </p>

        <h2>Protected-data audit records</h2>
        <p>
          Fixify maintains metadata-only security audit records for protected customer-data access. These records use pseudonymous identifiers and do not contain customer names, shipping addresses, email addresses, phone numbers, session tokens, or raw protected payloads.
        </p>

        <h2>Data sale and advertising</h2>
        <p>
          Fixify does not sell merchant or customer personal data. Fixify does not use protected customer data for advertising.
        </p>

        <h2>Merchant and customer rights</h2>
        <p>
          Privacy requests may be initiated through the Shopify merchant and through applicable Shopify privacy mechanisms. Merchants and customers may also contact MK WebTech about access, correction, deletion, or other privacy questions. The ability to fulfill a request depends on the requester&apos;s relationship to the store, applicable Shopify processes, and relevant legal or operational requirements.
        </p>

        <h2>Contact</h2>
        <p>
          For Fixify privacy or support questions, use the <Link href="/contact?product=fixify">MK WebTech contact page</Link> or email <a href="mailto:mkwebtecindia@gmail.com">mkwebtecindia@gmail.com</a>. Please identify Fixify and your Shopify store, but do not send passwords, API keys, access tokens, payment information, or unnecessary customer/order data.
        </p>

        <h2>Policy updates</h2>
        <p>
          MK WebTech may update this policy when Fixify&apos;s functionality, data practices, service providers, or applicable requirements change. The effective and last-updated date at the top of this page will be revised when an update is published.
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
