import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  ExternalLink,
  Headphones,
  PackageCheck,
  Sparkles,
  WalletCards
} from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { FAQ } from "@/components/faq";
import { MdxContent } from "@/components/mdx-content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types/content";

function ProductSection({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-m-24 border-t border-border py-12">
      {eyebrow ? <Badge variant="secondary">{eyebrow}</Badge> : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  const screenshots =
    product.screenshots ||
    product.gallery.map((src, index) => ({
      src,
      alt: `${product.title} screenshot ${index + 1}`,
      caption: index === 0 ? "Product dashboard" : "Configuration workflow"
    }));
  const installation = product.installation || [
    "Install the product from the platform marketplace or package file.",
    "Connect the required permissions and choose the recommended defaults.",
    "Publish the storefront or site experience after reviewing the preview."
  ];
  const documentation = product.documentation || [
    { label: "Getting started", href: product.docsUrl, description: "Install, configure, and launch with the recommended setup path." }
  ];
  const support = product.support || [
    { label: "Product support", href: product.supportUrl, description: "Get help with setup, compatibility, configuration, and launch questions." }
  ];
  const pricingPlans = product.pricingPlans || [
    { name: "Standard", price: product.pricing, description: "Best for teams adopting this product on one active store or site.", features: product.features.slice(0, 3) }
  ];

  return (
    <article>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(20,184,166,0.12),transparent_35%),linear-gradient(250deg,rgba(99,102,241,0.10),transparent_40%)]" />
        <div className="container py-10">
          <Breadcrumb items={[{ label: "Products", href: "/products" }, { label: product.title }]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <Badge variant="accent">{product.category === "shopify" ? "Shopify App" : "WordPress Plugin"}</Badge>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-balance md:text-6xl">{product.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{product.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={product.downloadUrl}>
                    <Download className="h-4 w-4" /> Download
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={product.docsUrl}>
                    Documentation <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href={product.supportUrl}>Support</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-500/20 via-indigo-500/10 to-rose-500/10 blur-2xl" />
              <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-border bg-muted shadow-soft">
                <Image src={product.heroImage} alt={product.title} fill className="object-cover" priority sizes="(min-width: 1024px) 45vw, 100vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container grid gap-10 py-12 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
          <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <div className="text-sm font-semibold">Product sections</div>
            <nav className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {["overview", "screenshots", "features", "benefits", "installation", "faq", "changelog", "documentation", "pricing", "support"].map((item) => (
                <a key={item} href={`#${item}`} className="rounded-md px-3 py-2 capitalize hover:bg-accent hover:text-foreground">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="min-w-0">
          <ProductSection id="overview" eyebrow="Overview" title={`What ${product.title} does`}>
            <MdxContent source={product.content} />
          </ProductSection>

          <ProductSection id="screenshots" eyebrow="Screenshots" title="Designed for clear daily workflows">
            <div className="grid gap-4 md:grid-cols-2">
              {screenshots.map((screenshot) => (
                <figure key={screenshot.src} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                  <div className="relative aspect-video bg-muted">
                    <Image src={screenshot.src} alt={screenshot.alt} fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
                  </div>
                  <figcaption className="p-4 text-sm text-muted-foreground">{screenshot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </ProductSection>

          <ProductSection id="features" eyebrow="Features" title="Product capabilities">
            <div className="grid gap-3 md:grid-cols-2">
              {product.features.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm shadow-sm">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </ProductSection>

          <ProductSection id="benefits" eyebrow="Benefits" title="Why teams install it">
            <div className="grid gap-3 md:grid-cols-3">
              {product.benefits.map((benefit) => (
                <div key={benefit} className="rounded-lg border border-border bg-card p-5 text-sm leading-6 text-muted-foreground shadow-sm">
                  <CheckCircle2 className="mb-4 h-5 w-5 text-teal-600" />
                  {benefit}
                </div>
              ))}
            </div>
          </ProductSection>

          <ProductSection id="installation" eyebrow="Installation" title="Launch path">
            <ol className="grid gap-4">
              {installation.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-sm">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-foreground text-sm font-semibold text-background">{index + 1}</span>
                  <p className="pt-1 text-sm leading-6 text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </ProductSection>

          <ProductSection id="faq" eyebrow="FAQ" title="Common questions">
            <FAQ items={product.faq} />
          </ProductSection>

          <ProductSection id="changelog" eyebrow="Changelog" title="Recent improvements">
            <div className="space-y-3">
              {product.changelog.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground shadow-sm">
                  <PackageCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                  {item}
                </div>
              ))}
            </div>
          </ProductSection>

          <ProductSection id="documentation" eyebrow="Documentation" title="Guides and references">
            <div className="grid gap-4 md:grid-cols-2">
              {documentation.map((doc) => (
                <Link key={doc.href} href={doc.href} className="rounded-lg border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <BookOpen className="h-5 w-5 text-teal-600" />
                  <h3 className="mt-4 font-semibold">{doc.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{doc.description}</p>
                </Link>
              ))}
            </div>
          </ProductSection>

          <ProductSection id="pricing" eyebrow="Pricing" title="Choose the right plan">
            <div className="grid gap-4 md:grid-cols-2">
              {pricingPlans.map((plan) => (
                <div key={plan.name} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                  <WalletCards className="h-5 w-5 text-teal-600" />
                  <h3 className="mt-4 text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-2 text-3xl font-semibold">{plan.price}</div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{plan.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ProductSection>

          <ProductSection id="support" eyebrow="Support" title="Get help when it matters">
            <div className="grid gap-4 md:grid-cols-2">
              {support.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <Headphones className="h-5 w-5 text-teal-600" />
                  <h3 className="mt-4 font-semibold">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                    Open support <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </ProductSection>
        </div>
      </div>
    </article>
  );
}
