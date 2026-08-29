import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata, webPageSchema } from "@/lib/seo";

const description = "Read the terms governing responsible use, licensing, support, and availability of MK WebTech products and services.";
export const metadata: Metadata = pageMetadata({ title: "Terms of Service", description, path: "/terms" });

export default function TermsPage() {
  return (
    <section className="container max-w-3xl py-16">
      <JsonLd nodes={[webPageSchema({ path: "/terms", name: "MK WebTech Terms of Service", description })]} />
      <h1 className="text-4xl font-semibold tracking-tight">Terms of Service</h1>
      <div className="prose-mk mt-8">
        <p>By using MK WebTech products, you agree to use them responsibly and in compliance with applicable platform rules and laws.</p>
        <h2>Licenses</h2>
        <p>Product licenses are tied to the plan, store, site, or agency agreement selected at purchase.</p>
        <h2>Support</h2>
        <p>Support covers product usage, configuration, and documented integrations. Custom development may require a separate agreement.</p>
        <h2>Availability</h2>
        <p>We work to keep products reliable and communicate planned changes through documentation and changelogs.</p>
      </div>
    </section>
  );
}
