import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  History,
  MapPin,
  Settings2,
  ShieldCheck,
  ShoppingBag,
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
export const metadata: Metadata = pageMetadata({ title: "Shopify Shipping Address Editing App - Fixify", description, path: "/fixify" });

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
        softwareApplicationSchema({ name: "Fixify", description, path: "/fixify" })
      ]} />
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(20,184,166,0.10),transparent_38%),linear-gradient(250deg,rgba(99,102,241,0.08),transparent_44%)]" />
        <div className="container py-10"><Breadcrumb items={[{ label: "Products", href: "/products" }, { label: "Fixify" }]} /></div>
        <div className="container grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20">
          <div>
            <Badge variant="accent">
              <ShoppingBag className="mr-1 h-3 w-3" />
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

          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-soft">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div>
                <div className="text-sm font-semibold">Order #1048</div>
                <div className="mt-1 text-xs text-muted-foreground">Placed 12 minutes ago</div>
              </div>
              <Badge variant="secondary">Eligible to edit</Badge>
            </div>
            <div className="space-y-3 p-5">
              {[
                ["Shipping address", "Correct delivery details", MapPin],
                ["Merchant rules", "Check order eligibility and timing", Settings2],
                ["Customer Account", "Use the authenticated order view", UserRound]
              ].map(([title, detail, Icon]) => (
                <div key={title as string} className="flex items-center gap-4 rounded-lg border border-border bg-background p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-teal-500/10 text-teal-700 dark:text-teal-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium">{title as string}</div>
                    <div className="text-sm text-muted-foreground">{detail as string}</div>
                  </div>
                  <Check className="h-5 w-5 shrink-0 text-teal-600" />
                </div>
              ))}
              <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 shrink-0 text-teal-600" />
                Address corrections are checked against merchant rules and order status.
              </div>
            </div>
          </div>
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
