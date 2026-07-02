import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms", description: "MK WebTech terms of service." };

export default function TermsPage() {
  return (
    <section className="container max-w-3xl py-16">
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
