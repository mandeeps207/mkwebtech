import Link from "next/link";
import { ArrowRight, BadgeCheck, Blocks, CheckCircle2, Clock3, Gauge, Megaphone, MousePointerClick, PlugZap, Sparkles, Timer } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { ProductCard } from "@/components/cards";
import { FAQ } from "@/components/faq";
import { NewsletterForm } from "@/components/newsletter-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/content";

const faqs = [
  {
    question: "How many products does MK WebTech currently offer?",
    answer: "Right now, MK WebTech has one live product: MkWebTech CTA Studio for WordPress."
  },
  {
    question: "Is MkWebTech CTA Studio available on WordPress.org?",
    answer: "Yes. The plugin is available from the official WordPress.org plugin directory."
  },
  {
    question: "Do you have any Shopify apps?",
    answer: "Not yet. Shopify apps are planned for the future, but there are no live MK WebTech Shopify apps right now."
  },
  {
    question: "Does CTA Studio track performance?",
    answer: "Yes. It tracks impressions, clicks, and conversion rate inside WordPress without requiring a separate third-party analytics script."
  }
];

export default function HomePage() {
  const ctaStudio = getProducts("wordpress")[0];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <AnimatedBackground />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,rgba(20,184,166,0.10),transparent_34%),linear-gradient(240deg,rgba(99,102,241,0.10),transparent_38%)]" />
        <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <Reveal>
            <Badge variant="accent" className="shadow-sm">
              <Sparkles className="mr-1 h-3 w-3" />
              Live on WordPress.org
            </Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Build conversion-focused CTAs in WordPress without custom code.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              MkWebTech CTA Studio helps you create inline CTAs, popups, sticky bars, floating buttons, countdown timer offers, and conversion-focused buttons directly inside WordPress.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/products/mkwebtech-cta-studio">
                  View CTA Studio <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://wordpress.org/plugins/mkwebtech-cta-studio/">Open on WordPress.org</Link>
              </Button>
            </div>
            <div className="mt-8 grid max-w-2xl gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {["Visual builder", "Countdown timers", "Built-in analytics"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-500/20 via-indigo-500/10 to-rose-500/20 blur-2xl" />
            <div className="overflow-hidden rounded-lg border border-border bg-card/85 shadow-soft backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <Badge variant="secondary">CTA Studio</Badge>
              </div>
              <div className="grid gap-4 p-5">
                <div className="rounded-lg bg-foreground p-5 text-background">
                  <div className="text-sm text-background/60">CTA performance dashboard</div>
                  <div className="mt-2 text-4xl font-semibold">Impressions, clicks, conversions</div>
                  <div className="mt-6 grid grid-cols-12 gap-1.5">
                    {[34, 52, 44, 68, 58, 74, 62, 82, 70, 88, 78, 92].map((height, index) => (
                      <div key={index} className="flex h-24 items-end rounded-sm bg-background/10 p-1">
                        <div className="w-full rounded-sm bg-gradient-to-t from-teal-300 to-white" style={{ height: `${height}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    ["Inline CTA", "Embed CTAs inside posts and pages"],
                    ["Sticky Bar", "Show top or bottom announcements"],
                    ["Popup", "Display timed offers with overlay controls"],
                    ["Floating Buttons", "Add phone, WhatsApp, social, or custom actions"]
                  ].map(([name, detail]) => (
                    <div key={name} className="rounded-lg border border-border bg-background p-4">
                      <div className="font-medium">{name}</div>
                      <div className="mt-2 text-sm text-muted-foreground">{detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-muted/25 py-8">
        <div className="container flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-muted-foreground">
          {["WordPress plugin", "Self-hosted assets", "Shortcode support", "Device visibility", "Translation-ready"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-teal-600" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Badge variant="accent">Featured WordPress Plugin</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">MkWebTech CTA Studio is the current live product.</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Available on WordPress.org for creating CTAs, popups, sticky bars, floating buttons, countdown timers, and lightweight conversion analytics.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/products/wordpress">View WordPress plugin <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ctaStudio ? <ProductCard product={ctaStudio} /> : null}
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge variant="secondary">Shopify Apps</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Shopify apps are coming soon.</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              MK WebTech does not have a live Shopify app right now. This section will be updated when the first app is ready.
            </p>
            <Button className="mt-6" variant="outline" asChild>
              <Link href="/products/shopify">View Shopify status</Link>
            </Button>
          </div>
          <div className="rounded-lg border border-dashed border-border bg-card p-8 shadow-sm">
            <div className="text-sm font-medium text-muted-foreground">Current Shopify catalog</div>
            <div className="mt-3 text-3xl font-semibold">No live apps yet</div>
            <p className="mt-3 text-muted-foreground">No demo Shopify apps are shown because the catalog should reflect real MK WebTech products only.</p>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <SectionHeading eyebrow="What CTA Studio Includes" title="CTA layouts and controls for practical WordPress campaigns" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["CTA layouts", "Inline CTAs, sticky bars, popups, and floating action buttons.", Megaphone],
            ["Urgency tools", "Normal and evergreen countdown timers for campaigns and offers.", Timer],
            ["Performance tracking", "Impressions, clicks, and conversion rate stored inside WordPress.", MousePointerClick],
            ["Visual builder", "Live preview and design controls for backgrounds, typography, spacing, shadows, and radius.", Blocks],
            ["Visibility controls", "Show or hide CTAs for desktop, tablet, and mobile visitors.", Gauge],
            ["Local assets", "Frontend assets are served from your own site without extra third-party requests.", Clock3]
          ].map(([title, description, Icon]) => (
            <div key={title as string} className="rounded-lg border border-border bg-card p-7 shadow-sm">
              <Icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-5 text-xl font-semibold">{title as string}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <SectionHeading eyebrow="FAQ" title="Questions about the current product catalog" />
        <div className="mt-8">
          <FAQ items={faqs} />
        </div>
      </section>

      <section className="container pb-10">
        <div className="rounded-lg border border-border bg-card p-8 text-center shadow-soft">
          <Badge variant="secondary">Newsletter</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Get MK WebTech product updates.</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Follow releases for CTA Studio and future MK WebTech products.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-lg bg-foreground px-6 py-14 text-center text-background shadow-soft">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,184,166,0.24),transparent_36%),linear-gradient(250deg,rgba(99,102,241,0.22),transparent_42%)]" />
          <div className="relative mx-auto max-w-2xl">
            <PlugZap className="mx-auto h-8 w-8 text-teal-200" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Try MkWebTech CTA Studio on WordPress.org.</h2>
            <p className="mt-4 text-background/70">
              Create CTAs, popups, sticky bars, floating buttons, countdown timer offers, and track simple conversion performance inside WordPress.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/products/mkwebtech-cta-studio">View product page</Link>
              </Button>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                <Link href="https://wordpress.org/plugins/mkwebtech-cta-studio/">Open WordPress.org <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
