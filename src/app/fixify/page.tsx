import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  History,
  MapPin,
  PackageCheck,
  Palette,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  UserRound
} from "lucide-react";
import { FAQ } from "@/components/faq";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Fixify - Shopify Order Editing App",
  description: "Let customers update eligible shipping addresses, variants, and quantities from Shopify Customer Accounts while merchants stay in control.",
  alternates: { canonical: "/fixify" },
  openGraph: {
    title: "Fixify - Shopify Order Editing App | MK WebTech",
    description: "Customer-friendly, merchant-controlled editing for eligible unfulfilled Shopify orders.",
    url: "/fixify",
    type: "website"
  }
};

const features = [
  {
    title: "Shipping address editing",
    description: "Customers can correct eligible shipping details before fulfillment starts.",
    icon: MapPin
  },
  {
    title: "Variant changes",
    description: "Customers can switch between eligible variants of the same product when the change is financially neutral.",
    icon: Palette
  },
  {
    title: "Quantity changes",
    description: "Customers can adjust eligible quantities when the change does not require an additional payment or refund.",
    icon: PackageCheck
  },
  {
    title: "Merchant controls",
    description: "Merchants choose which supported edits customers can make and define the allowed editing window.",
    icon: Settings2
  },
  {
    title: "Customer Account integration",
    description: "Customers edit eligible orders from the familiar Shopify Customer Accounts experience.",
    icon: UserRound
  },
  {
    title: "Activity history",
    description: "Merchants can review successfully completed customer edits in one clear activity history.",
    icon: History
  }
];

const steps = [
  "Install and configure Fixify for your Shopify store.",
  "A customer opens an eligible order in Shopify Customer Accounts.",
  "Fixify validates ownership, order eligibility, and merchant rules.",
  "The customer previews and confirms an allowed edit.",
  "Shopify updates the order and Fixify records the completed activity."
];

const faqs = [
  {
    question: "What orders can customers edit?",
    answer: "Eligibility depends on the merchant's settings, the allowed editing window, the current order state, and whether fulfillment has started."
  },
  {
    question: "Does Fixify let customers edit any order?",
    answer: "No. Fixify checks eligibility and only permits supported changes to eligible orders when enabled by the merchant."
  },
  {
    question: "Where do customers edit their orders?",
    answer: "Customers access supported editing from their order inside Shopify Customer Accounts."
  },
  {
    question: "Can merchants control editing?",
    answer: "Yes. Merchants control the supported editing permissions and the length of the editing window."
  },
  {
    question: "Do quantity or variant changes require a payment or refund?",
    answer: "The launch experience is limited to eligible changes that do not require an additional payment or refund."
  }
];

export default function FixifyPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(20,184,166,0.10),transparent_38%),linear-gradient(250deg,rgba(99,102,241,0.08),transparent_44%)]" />
        <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <div>
            <Badge variant="accent">
              <ShoppingBag className="mr-1 h-3 w-3" />
              Shopify order editing
            </Badge>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">Fixify</h1>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">Give customers a simple way to correct eligible Shopify orders after purchase.</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Authenticated customers can make permitted changes from Shopify Customer Accounts while you retain control over which edits are allowed and for how long.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#pricing">View pricing <ArrowRight className="h-4 w-4" /></Link>
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
                ["Variant", "Change an eligible same-product option", Palette],
                ["Quantity", "Adjust eligible quantities", PackageCheck]
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
                Changes are checked against merchant rules and order status.
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
              Wrong addresses, sizes, colors, and quantities often become manual support requests. Fixify gives customers a direct way to make eligible corrections within merchant-defined limits.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Correct a shipping address", "Choose an eligible size or color", "Adjust an eligible quantity", "Reduce manual support handling"].map((item) => (
              <div key={item} className="flex gap-3 border-t border-border py-4">
                <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <SectionHeading eyebrow="Features" title="Supported editing with merchant control" description="Fixify focuses on practical changes that can be safely completed for eligible orders before fulfillment." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <Icon className="h-6 w-6 text-teal-600 dark:text-teal-300" />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container">
          <SectionHeading eyebrow="How it works" title="A clear path from request to completed edit" />
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
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Editing stays within clear order limits.</h2>
          </div>
          <ul className="grid gap-4 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
            {[
              "Edits apply only to eligible unfulfilled orders.",
              "Fulfilled, cancelled, and otherwise ineligible orders cannot be edited.",
              "Variant changes must use an eligible variant of the same product and be financially neutral.",
              "Quantity changes requiring an additional payment or refund are not automatically completed in the launch version."
            ].map((item) => (
              <li key={item} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-20 border-y border-border bg-muted/25 py-20">
        <div className="container">
          <SectionHeading eyebrow="Pricing" title="Simple plans for every stage" description="Paid plan charges are handled through Shopify billing. Pro has no trial." />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {[
              { name: "Free", price: "$0", features: ["5 completed edits per UTC month", "Editing window up to 60 minutes"] },
              { name: "Pro", price: "$9.90/month", features: ["Unlimited completed edits", "Editing window up to 24 hours", "No trial"] }
            ].map((plan, index) => (
              <div key={plan.name} className={`rounded-lg border bg-card p-7 shadow-sm ${index === 1 ? "border-teal-500 shadow-soft" : "border-border"}`}>
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4 text-3xl font-semibold">{plan.price}</div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full" variant={index === 1 ? "default" : "outline"} asChild>
                  <Link href="/contact?product=fixify">Contact us about Fixify</Link>
                </Button>
              </div>
            ))}
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
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Give customers a better way to correct eligible orders.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">Tell us about your Shopify store and the order-editing requests your team handles today.</p>
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
