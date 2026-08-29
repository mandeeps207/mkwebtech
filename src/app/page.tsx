import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Blocks, CheckCircle2, Code2, Database, PlugZap, Settings2, ShieldCheck, ShoppingBag, Wrench } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { ProductCard } from "@/components/cards";
import { FAQ } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/content";
import { pageMetadata, webPageSchema } from "@/lib/seo";

const description = "MK WebTech builds practical WordPress and WooCommerce plugins, Shopify apps, and custom ecommerce software for merchants, agencies, and growing businesses.";

export const metadata: Metadata = pageMetadata({
  title: "WordPress Plugins, Shopify Apps & Development",
  description,
  path: "/"
});

const faqs = [
  {
    question: "Which MK WebTech products are available now?",
    answer: "MkWebTech CTA Studio and MKWebTech Variation Swatches for WooCommerce are available free on WordPress.org. Fixify is a Shopify shipping-address editing app, with product details and an enquiry path available on this site."
  },
  {
    question: "Does MK WebTech build custom WordPress and WooCommerce functionality?",
    answer: "Yes. Custom work can include plugins, WooCommerce workflows, admin interfaces, existing-plugin customization, third-party APIs, and maintenance for store-specific requirements."
  },
  {
    question: "Does MK WebTech develop Shopify apps?",
    answer: "Yes. The Shopify focus includes app authentication, Admin GraphQL API integrations, customer account extensions, order workflows, webhooks, billing, and external services."
  },
  {
    question: "Where should I ask for product support?",
    answer: "Use the support link on the relevant product page. WordPress products link to their official WordPress.org support forums, while Fixify enquiries use the MK WebTech contact form."
  }
];

export default function HomePage() {
  const wordpressProducts = getProducts("wordpress");

  return (
    <>
      <JsonLd nodes={[webPageSchema({ path: "/", name: "MK WebTech", description })]} />
      <section className="relative overflow-hidden border-b border-border">
        <AnimatedBackground />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,rgba(20,184,166,0.10),transparent_34%),linear-gradient(240deg,rgba(99,102,241,0.10),transparent_38%)]" />
        <div className="container grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
          <Reveal>
            <Badge variant="accent">Independent software product studio</Badge>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Practical WordPress plugins and Shopify apps for better commerce workflows
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              MK WebTech builds focused software for website owners, store teams, and agencies. Current products cover WordPress calls to action, WooCommerce variation swatches, and controlled Shopify shipping-address corrections.
            </p>
            <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
              When an existing product is not the right fit, custom development is available for WordPress, WooCommerce, Shopify, and wider ecommerce integrations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild><Link href="/products">Explore products <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button size="lg" variant="outline" asChild><Link href="/contact?subject=custom-development">Discuss a custom project</Link></Button>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-500/20 via-indigo-500/10 to-rose-500/20 blur-2xl" />
            <div className="rounded-lg border border-border bg-card/90 p-6 shadow-soft backdrop-blur-xl">
              <div className="text-sm font-semibold text-muted-foreground">Available products</div>
              <div className="mt-5 space-y-4">
                {[
                  ["CTA Studio", "WordPress", "Build and track inline, popup, sticky, and floating CTAs.", "/products/mkwebtech-cta-studio"],
                  ["Variation Swatches", "WooCommerce", "Present product options as accessible color and image swatches.", "/products/mkwebtech-variation-swatches-for-woocommerce"],
                  ["Fixify", "Shopify", "Let customers correct eligible shipping addresses within merchant controls.", "/fixify"]
                ].map(([name, platform, detail, href]) => (
                  <Link key={name} href={href} className="block rounded-lg border border-border bg-background p-4 transition hover:border-teal-500">
                    <div className="flex items-center justify-between gap-3"><span className="font-semibold">{name}</span><Badge variant="secondary">{platform}</Badge></div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container py-20">
        <SectionHeading eyebrow="Products" title="Software built around specific store and website tasks" description="Start with a published product when it matches the workflow. Each product page documents its capabilities, limits, setup path, and support options." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {wordpressProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
          <Link href="/fixify" className="group rounded-lg border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
            <Badge variant="secondary"><ShoppingBag className="mr-1 h-3 w-3" /> Shopify App</Badge>
            <h3 className="mt-5 text-xl font-semibold">Fixify</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">Controlled shipping-address corrections for eligible Shopify orders.</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">View the Shopify shipping-address app <ArrowRight className="h-4 w-4" /></span>
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-7 shadow-sm">
            <Blocks className="h-6 w-6 text-teal-600" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">WordPress and WooCommerce tools</h2>
            <p className="mt-4 leading-7 text-muted-foreground">CTA Studio helps teams publish and measure calls to action without custom templates. Variation Swatches replaces supported variation dropdowns with visual controls while retaining WooCommerce&apos;s native select workflow.</p>
            <Link href="/products/wordpress" className="mt-5 inline-flex items-center gap-2 font-medium underline underline-offset-4">Browse WordPress and WooCommerce plugins <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-lg border border-border bg-card p-7 shadow-sm">
            <ShoppingBag className="h-6 w-6 text-teal-600" />
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">Shopify app workflows</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Fixify focuses on eligible shipping-address corrections through Shopify Customer Accounts. The wider Shopify development focus includes admin workflows, customer account extensions, APIs, webhooks, billing, and external integrations.</p>
            <Link href="/products/shopify" className="mt-5 inline-flex items-center gap-2 font-medium underline underline-offset-4">Explore Shopify apps and capabilities <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Badge variant="accent">Custom development</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Build the workflow when an existing product is not enough</h2>
            <p className="mt-4 leading-7 text-muted-foreground">Custom engagements cover platform-specific plugins and apps, integrations between existing systems, admin tools, order and catalog workflows, and maintained web applications.</p>
            <Button className="mt-6" variant="outline" asChild><Link href="/services">Explore development services <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["WordPress and WooCommerce", "Plugins, extensions, admin interfaces, APIs, product, cart, checkout, and order workflows.", Wrench],
              ["Shopify", "Apps, Admin GraphQL API work, customer accounts, authentication, webhooks, and billing.", Settings2],
              ["Modern web applications", "React and Next.js interfaces backed by practical APIs and maintainable data flows.", Code2],
              ["Ecommerce integrations", "Magento, PHP, store migrations, third-party services, and system-to-system connections.", Database]
            ].map(([title, detail, Icon]) => (
              <div key={title as string} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                <Icon className="h-5 w-5 text-teal-600" />
                <h3 className="mt-4 font-semibold">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/25 py-20">
        <div className="container">
          <SectionHeading eyebrow="Working approach" title="Clear scope, platform-aware implementation, and maintainable delivery" />
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              ["Respect the platform", "Work with WordPress, WooCommerce, and Shopify conventions so the result fits the surrounding system.", PlugZap],
              ["Make constraints explicit", "Document supported workflows and edge cases instead of hiding important limits behind broad promises.", ShieldCheck],
              ["Leave a supportable codebase", "Keep integrations understandable, test the important paths, and plan upgrades around platform changes.", CheckCircle2]
            ].map(([title, detail, Icon]) => (
              <div key={title as string} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <Icon className="h-5 w-5 text-teal-600" />
                <h3 className="mt-4 font-semibold">{title as string}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{detail as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <SectionHeading eyebrow="FAQ" title="Products, support, and custom development" />
        <div className="mt-8"><FAQ items={faqs} /></div>
      </section>

      <section className="container pb-20">
        <div className="rounded-lg bg-foreground px-6 py-14 text-center text-background shadow-soft">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">Choose a product or describe the workflow you need</h2>
          <p className="mx-auto mt-4 max-w-2xl text-background/70">Browse the current product catalog, or contact MK WebTech when the requirement calls for custom development.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="secondary" asChild><Link href="/products">Explore products</Link></Button>
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90" asChild><Link href="/contact?subject=custom-development">Discuss a custom project <ArrowRight className="h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
