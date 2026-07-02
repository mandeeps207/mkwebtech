import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  CheckCircle2,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  MessageSquareText,
  PackageCheck,
  PlugZap,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { ProductCard } from "@/components/cards";
import { FAQ } from "@/components/faq";
import { NewsletterForm } from "@/components/newsletter-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/content";

const trustedBy = ["DTC operators", "Shopify agencies", "WooCommerce teams", "Plugin-led SaaS", "Growth marketers"];

const faqs = [
  {
    question: "What does MK WebTech build?",
    answer:
      "We build Shopify apps and WordPress plugins for commerce teams that need reliable growth, automation, performance, and support workflows."
  },
  {
    question: "Are the products suitable for agencies?",
    answer:
      "Yes. Our products are documented for repeatable implementation, client handoff, and ongoing support across multiple stores or WordPress sites."
  },
  {
    question: "Do you provide implementation help?",
    answer:
      "Yes. We help with setup, configuration, migration, theme placement, performance review, and product-fit guidance."
  },
  {
    question: "How are releases communicated?",
    answer:
      "Product changes are published through changelogs, docs updates, and practical release notes so teams know what changed and why it matters."
  }
];

const stats = [
  ["25K+", "commerce workflows powered"],
  ["4.8/5", "average support rating"],
  ["99.9%", "target product uptime"],
  ["3 min", "typical first setup"]
];

const testimonials = [
  {
    quote: "Smart Bundles gave our team a clean way to launch offers without custom theme work or checkout surprises.",
    name: "Aarav Mehta",
    role: "Growth Lead, direct-to-consumer brand"
  },
  {
    quote: "The WordPress plugins feel built by people who understand agency handoff, support queues, and real client constraints.",
    name: "Priya Shah",
    role: "Founder, commerce agency"
  },
  {
    quote: "MK WebTech products are calm to use. Clear defaults, useful docs, and no unnecessary complexity.",
    name: "Daniel Brooks",
    role: "Operations Manager, subscription retailer"
  }
];

export default function HomePage() {
  const shopifyProducts = getProducts("shopify").slice(0, 3);
  const wordpressProducts = getProducts("wordpress").slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <AnimatedBackground />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,rgba(20,184,166,0.10),transparent_34%),linear-gradient(240deg,rgba(244,63,94,0.09),transparent_38%)]" />
        <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <Reveal>
            <Badge variant="accent" className="shadow-sm">
              <Sparkles className="mr-1 h-3 w-3" />
              Premium commerce software studio
            </Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Shopify apps and WordPress plugins that feel quietly exceptional.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              MK WebTech builds polished, platform-native products for merchants, agencies, and SaaS teams that care about speed, reliability, and customer experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/products">
                  Explore products <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Talk to MK WebTech</Link>
              </Button>
            </div>
            <div className="mt-8 grid max-w-xl gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {["Native platform UX", "Fast storefronts", "Clear documentation"].map((item) => (
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
                <Badge variant="secondary">Product command center</Badge>
              </div>
              <div className="grid gap-4 p-4 sm:p-5">
                <div className="rounded-lg bg-foreground p-5 text-background">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm text-background/60">Revenue assisted</div>
                      <div className="mt-2 text-4xl font-semibold">$482K</div>
                    </div>
                    <div className="rounded-md bg-background/10 px-3 py-2 text-sm text-background/80">+18.4%</div>
                  </div>
                  <div className="mt-6 grid grid-cols-12 gap-1.5">
                    {[35, 52, 44, 68, 58, 74, 62, 82, 70, 88, 78, 92].map((height, index) => (
                      <div key={index} className="flex h-24 items-end rounded-sm bg-background/10 p-1">
                        <div className="w-full rounded-sm bg-gradient-to-t from-teal-300 to-white" style={{ height: `${height}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    ["Smart Bundles", "AOV campaigns", "Live"],
                    ["Review Pulse", "Trust automation", "Queued"],
                    ["WP Speed Suite", "Vitals audit", "Optimized"],
                    ["Form Bridge", "Lead routing", "Synced"]
                  ].map(([name, detail, status]) => (
                    <div key={name} className="rounded-lg border border-border bg-background p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="font-medium">{name}</div>
                        <Badge variant="outline">{status}</Badge>
                      </div>
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
        <div className="container">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Trusted by teams building serious commerce experiences</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-muted-foreground">
            {trustedBy.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-teal-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Badge variant="accent">Featured Shopify Apps</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Storefront and checkout tools built for modern Shopify teams.</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Launch offers, collect proof, validate carts, and keep merchant workflows calm when traffic gets serious.</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/products/shopify">View Shopify apps <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {shopifyProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Badge variant="accent">Featured WordPress Plugins</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Reliable WordPress plugins for agencies and growing site owners.</h2>
              <p className="mt-4 leading-7 text-muted-foreground">Improve performance, route leads, support WooCommerce workflows, and make client operations easier to maintain.</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/products/wordpress">View WordPress plugins <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {wordpressProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <SectionHeading eyebrow="Why Choose Us" title="Product craft for teams that notice the difference" description="Every MK WebTech product is shaped around platform conventions, merchant clarity, and operational trust." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["Platform-native", "No awkward workflows. Apps and plugins feel at home inside Shopify and WordPress.", Globe2],
            ["Support-aware", "Settings, logs, docs, and empty states are designed to reduce avoidable support work.", MessageSquareText],
            ["Performance-minded", "Storefront assets, admin screens, and content pages are kept lean and responsive.", Gauge]
          ].map(([title, description, Icon]) => (
            <div key={title as string} className="rounded-lg border border-border bg-card p-7 shadow-sm">
              <Icon className="h-6 w-6 text-teal-600" />
              <h3 className="mt-5 text-xl font-semibold">{title as string}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-foreground py-20 text-background">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(20,184,166,0.25),transparent_35%),linear-gradient(315deg,rgba(244,63,94,0.18),transparent_35%)]" />
        <div className="container relative">
          <div className="max-w-2xl">
            <Badge className="border-background/20 bg-background/10 text-background">Features</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Everything a serious product website and commerce suite needs.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["MDX content", "Products, docs, and articles are easy to maintain without a database.", Code2],
              ["SEO foundations", "Metadata, structured routes, sitemap, robots, RSS, and clean content hierarchy.", Layers3],
              ["Accessible UI", "Readable contrast, keyboard-friendly controls, and responsive layouts.", ShieldCheck],
              ["Reusable components", "Cards, accordions, CTAs, forms, badges, and navigation primitives.", Blocks],
              ["Smooth motion", "Subtle Framer Motion reveals that respect reduced-motion preferences.", Sparkles],
              ["Deployment-ready", "Static generation where it matters and a Vercel-friendly setup.", PackageCheck]
            ].map(([title, description, Icon]) => (
              <div key={title as string} className="rounded-lg border border-background/15 bg-background/8 p-6 backdrop-blur">
                <Icon className="h-5 w-5 text-teal-200" />
                <h3 className="mt-4 font-semibold">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-background/70">{description as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-lg border border-border bg-card p-6 text-center shadow-sm">
              <div className="text-4xl font-semibold tracking-tight">{value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="Trusted by builders who care about clean execution" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <blockquote className="text-sm leading-7 text-muted-foreground">&quot;{testimonial.quote}&quot;</blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{testimonial.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <SectionHeading eyebrow="FAQ" title="Answers before you start building" />
        <div className="mt-8">
          <FAQ items={faqs} />
        </div>
      </section>

      <section className="container pb-10">
        <div className="rounded-lg border border-border bg-card p-8 text-center shadow-soft">
          <Badge variant="secondary">Newsletter</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Get product notes worth reading.</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Practical release updates, platform guidance, and commerce UX observations from the MK WebTech team.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-lg bg-foreground px-6 py-14 text-center text-background shadow-soft">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,184,166,0.24),transparent_36%),linear-gradient(250deg,rgba(99,102,241,0.22),transparent_42%)]" />
          <div className="relative mx-auto max-w-2xl">
            <PlugZap className="mx-auto h-8 w-8 text-teal-200" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Ready to make your commerce stack feel sharper?</h2>
            <p className="mt-4 text-background/70">
              Explore the product suite or talk with MK WebTech about the fastest path from idea to polished, production-ready implementation.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/products">Browse products</Link>
              </Button>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild>
                <Link href="/contact">Start a conversation <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
