import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "About", description: "Learn about MK WebTech." };

export default function AboutPage() {
  return (
    <section className="container py-16">
      <SectionHeading eyebrow="About" title="A focused product studio for commerce software" description="MK WebTech builds practical, polished tools for merchants and agencies working across Shopify and WordPress." />
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {[
          ["Platform respect", "We design around Shopify and WordPress conventions so teams can adopt products quickly."],
          ["Operational clarity", "Every product aims to reduce tickets, edge-case confusion, and brittle custom code."],
          ["Long-term support", "Documentation, changelogs, and careful releases are part of the product, not afterthoughts."]
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
