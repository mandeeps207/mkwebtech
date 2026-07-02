import type { Metadata } from "next";
import { PricingCard } from "@/components/cards";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Pricing", description: "Simple product pricing for MK WebTech apps and plugins." };

export default function PricingPage() {
  return (
    <section className="container py-16">
      <SectionHeading eyebrow="Pricing" title="Flexible pricing for stores, agencies, and product teams" description="Most products are priced individually. These packages help teams plan support and implementation." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <PricingCard name="Starter" price="$19/mo" features={["Single product license", "Email support", "Documentation access", "Standard updates"]} />
        <PricingCard highlighted name="Growth" price="$79/mo" features={["Multiple product licenses", "Priority support", "Launch guidance", "Advanced configuration help"]} />
        <PricingCard name="Agency" price="Custom" features={["Client portfolio support", "Implementation reviews", "Migration planning", "Private roadmap calls"]} />
      </div>
    </section>
  );
}
