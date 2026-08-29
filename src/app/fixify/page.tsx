import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  History,
  MapPin,
  PlayCircle,
  Settings2,
  ShieldCheck,
  UserRound
} from "lucide-react";
import { FAQ } from "@/components/faq";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, pageMetadata, softwareApplicationSchema, webPageSchema } from "@/lib/seo";

const description = "Fixify supports eligible shipping-address corrections through Shopify Customer Accounts, with merchant-controlled eligibility and editing windows.";
export const metadata: Metadata = pageMetadata({
  title: "Shopify Shipping Address Editing App - Fixify",
  description,
  path: "/fixify",
  image: "/fixify-screenshot-4.jpg",
  imageWidth: 1600,
  imageHeight: 900,
  imageAlt: "Fixify shipping-address correction screen in Shopify Customer Accounts"
});

const features = [
  {
    title: "Shipping address editing",
    description: "Customers can correct eligible shipping details before fulfillment starts.",
    icon: MapPin
  },
  {
    title: "Merchant controls",
    description: "Merchants define when eligible shipping-address corrections are allowed.",
    icon: Settings2
  },
  {
    title: "Customer Account integration",
    description: "Customers correct an eligible shipping address from Shopify Customer Accounts.",
    icon: UserRound
  },
  {
    title: "Activity history",
    description: "Merchants can review successfully completed customer edits in one clear activity history.",
    icon: History
  }
];

const steps = [
  "Contact MK WebTech to confirm current availability for your store.",
  "Configure the allowed editing window and eligibility rules.",
  "A customer opens an eligible order in Shopify Customer Accounts.",
  "Fixify validates ownership, order eligibility, and merchant rules.",
  "The customer confirms the shipping-address correction.",
  "Shopify updates the eligible order and Fixify records the completed activity."
];

const faqs = [
  {
    question: "Which orders can receive a shipping-address correction?",
    answer: "Eligibility depends on the merchant's settings, the allowed editing window, the current order state, and whether fulfillment has started."
  },
  {
    question: "Does Fixify let customers change any order?",
    answer: "No. Fixify checks ownership, order state, merchant rules, and the editing window before permitting an eligible shipping-address correction."
  },
  {
    question: "Where do customers edit their orders?",
    answer: "Customers access the eligible shipping-address workflow from their order inside Shopify Customer Accounts."
  },
  {
    question: "Can merchants control editing?",
    answer: "Yes. Merchants define the eligibility rules and length of the editing window."
  },
  {
    question: "Can I install Fixify from a public Shopify App Store listing?",
    answer: "A public App Store installation link is not currently published on this site. Contact MK WebTech to ask about current availability and onboarding."
  }
];

export default function FixifyPage() {
  return (
    <>
      <JsonLd nodes={[
        webPageSchema({ path: "/fixify", name: "Fixify Shopify shipping-address editing app", description, breadcrumbs: [{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Fixify", path: "/fixify" }] }),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Fixify", path: "/fixify" }]),
        softwareApplicationSchema({ name: "Fixify", description, path: "/fixify", image: "/fixify-screenshot-4.jpg" })
      ]} />
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(20,184,166,0.10),transparent_38%),linear-gradient(250deg,rgba(99,102,241,0.08),transparent_44%)]" />
        <div className="container py-10"><Breadcrumb items={[{ label: "Products", href: "/products" }, { label: "Fixify" }]} /></div>
        <div className="container grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20">
          <div>
            <div className="mb-5 h-16 w-16 overflow-hidden rounded-xl border border-border bg-white shadow-sm">
              <Image src="/fixify-logo.jpg" alt="Fixify logo" width={64} height={64} className="h-full w-full object-cover" priority />
            </div>
            <Badge variant="accent">
              Shopify shipping-address editing
            </Badge>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">Let customers correct eligible Shopify shipping addresses with Fixify</h1>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">Handle verified address corrections through Shopify Customer Accounts.</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#availability">Check availability <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact?product=fixify">Contact support</Link>
              </Button>
            </div>
          </div>

          <figure className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            <div className="relative aspect-video bg-muted">
              <Image
                src="/fixify-screenshot-4.jpg"
                alt="Fixify Customer Account screen for reviewing a Shopify shipping-address correction"
                fill
                className="object-contain"
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </div>
            <figcaption className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
              Customers review an eligible shipping-address correction from their Shopify Customer Account.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-border bg-muted/25 py-20">
        <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Badge variant="secondary">How Fixify helps</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Turn routine correction requests into controlled self-service.</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              An incorrect shipping address can become a manual support request. Fixify gives authenticated customers a direct correction path within merchant-defined limits.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Correct an eligible shipping address", "Validate order ownership", "Apply merchant eligibility rules", "Record completed activity"].map((item) => (
              <div key={item} className="flex gap-3 border-t border-border py-4">
                <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <SectionHeading eyebrow="Features" title="Verified shipping-address editing with merchant control" description="Fixify focuses on eligible shipping-address corrections through Shopify Customer Accounts." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <Icon className="h-6 w-6 text-teal-600 dark:text-teal-300" />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <div className="grid overflow-hidden rounded-xl border border-border bg-card shadow-soft lg:grid-cols-[1fr_0.9fr]">
          <div className="p-7 sm:p-10">
            <Badge variant="secondary">Video walkthrough</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">See the Fixify workflow in action</h2>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Watch a step-by-step product walkthrough on YouTube. Current availability and supported workflows are confirmed during onboarding.
            </p>
            <Button className="mt-6" asChild>
              <a href="https://youtu.be/bpne7uWCfPE" target="_blank" rel="noreferrer">
                <PlayCircle className="h-4 w-4" /> Watch the Fixify walkthrough
              </a>
            </Button>
          </div>
          <a
            href="https://youtu.be/bpne7uWCfPE"
            target="_blank"
            rel="noreferrer"
            aria-label="Watch the Fixify walkthrough on YouTube"
            className="group grid min-h-72 place-items-center border-t border-border bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_45%),linear-gradient(135deg,rgba(34,197,94,0.14),rgba(255,255,255,0))] p-10 lg:border-l lg:border-t-0"
          >
            <div className="text-center">
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition group-hover:-translate-y-1">
                <Image src="/fixify-logo.jpg" alt="" width={112} height={112} className="h-full w-full object-cover" />
              </div>
              <PlayCircle className="mx-auto mt-6 h-12 w-12 text-teal-600 transition group-hover:scale-110" aria-hidden="true" />
              <span className="mt-3 block font-semibold">Open video on YouTube</span>
            </div>
          </a>
        </div>
      </section>

      <section className="border-y border-border bg-muted/25 py-16">
        <div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Need a different Shopify workflow?</h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">MK WebTech also develops Shopify apps and integrations involving the Admin GraphQL API, customer accounts, order workflows, webhooks, billing, and external services.</p>
          </div>
          <Button variant="outline" asChild><Link href="/services/shopify-app-development">Explore Shopify app development <ArrowRight className="h-4 w-4" /></Link></Button>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container">
          <SectionHeading eyebrow="How it works" title="A clear path from request to address correction" />
          <ol className="mx-auto mt-12 grid max-w-5xl gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step} className="border-t border-border pt-5">
                <div className="text-sm font-semibold text-teal-700 dark:text-teal-300">Step {index + 1}</div>
                <p className="mt-2 leading-7 text-muted-foreground">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Badge variant="secondary">Eligibility</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Address corrections stay within clear order limits.</h2>
          </div>
          <ul className="grid gap-4 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
            {[
              "Corrections apply only when the order passes the configured eligibility checks.",
              "Fulfilled, cancelled, and otherwise ineligible orders cannot be changed.",
              "The customer must access the order through Shopify Customer Accounts.",
              "Merchant rules define how long the correction window remains open."
            ].map((item) => (
              <li key={item} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="availability" className="scroll-mt-20 border-y border-border bg-muted/25 py-20">
        <div className="container">
          <SectionHeading eyebrow="Availability" title="Ask about Fixify for your store" description="A public Shopify App Store installation link is not currently published on this site. Contact MK WebTech to confirm current availability, onboarding, and plan information." />
          <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-card p-7 text-center shadow-sm">
            <h3 className="text-xl font-semibold">Discuss your shipping-address workflow</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">Include your Shopify store domain and the order states in which customers need to request an address correction.</p>
            <Button className="mt-6" asChild>
              <Link href="/contact?product=fixify">Contact us about Fixify</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/25 py-20">
        <div className="container">
          <SectionHeading eyebrow="FAQ" title="Questions about Fixify" />
          <div className="mt-8"><FAQ items={faqs} /></div>
        </div>
      </section>

      <section className="container py-20">
        <div className="rounded-lg bg-foreground px-6 py-14 text-center text-background shadow-soft">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Give customers a controlled way to correct eligible shipping addresses.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">Tell us about your Shopify store and the shipping-address requests you handle today.</p>
          <Button className="mt-8 bg-background text-foreground hover:bg-background/90" size="lg" asChild>
            <Link href="/contact?product=fixify">Contact us about Fixify <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-background/70">
            <Link href="/fixify/privacy-policy" className="underline underline-offset-4 hover:text-background">Privacy Policy</Link>
            <Link href="/contact?product=fixify" className="underline underline-offset-4 hover:text-background">Contact / Support</Link>
          </div>
        </div>
      </section>
    </>
  );
}
