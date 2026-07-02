import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "MK WebTech privacy policy." };

export default function PrivacyPage() {
  return (
    <section className="container max-w-3xl py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
      <div className="prose-mk mt-8">
        <p>MK WebTech collects only the information needed to provide products, support, billing, and product communication.</p>
        <h2>Data we process</h2>
        <p>Depending on the product, we may process account details, support messages, store configuration, plugin settings, and diagnostic logs.</p>
        <h2>Retention</h2>
        <p>We retain operational records only as long as needed for support, security, compliance, and product improvement.</p>
        <h2>Contact</h2>
        <p>Questions about privacy can be sent to hello@mkwebtech.com.</p>
      </div>
    </section>
  );
}
