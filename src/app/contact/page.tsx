import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = { title: "Contact", description: "Contact MK WebTech for product support or implementation help." };

export default function ContactPage() {
  return (
    <section className="container py-16">
      <SectionHeading eyebrow="Contact" title="Tell us what you are building" description="Ask about support, implementation, partnerships, or product fit." />
      <div className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <h2 className="font-semibold">Response times</h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">We typically reply within one business day. Product customers receive priority support through their plan.</p>
          <h2 className="mt-8 font-semibold">Email</h2>
          <p className="mt-3 text-sm text-muted-foreground">hello@mkwebtech.com</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
