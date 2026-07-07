import type { Metadata } from "next";
import Link from "next/link";
import { Bell, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Shopify Apps",
  description: "Shopify apps from MK WebTech are coming soon."
};

export default function ShopifyProductsPage() {
  return (
    <section className="container py-16">
      <SectionHeading
        eyebrow="Shopify"
        title="Shopify apps are coming soon"
        description="MK WebTech does not have a live Shopify app yet. This section will be updated when the first Shopify app is ready."
      />
      <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-card p-8 text-center shadow-soft">
        <Badge variant="secondary">
          <Sparkles className="mr-1 h-3 w-3" />
          In planning
        </Badge>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight">No Shopify apps are available right now.</h2>
        <p className="mt-3 text-muted-foreground">
          For now, MK WebTech is focused on WordPress products, starting with MkWebTech CTA Studio.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/products/wordpress">View WordPress plugin</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">
              <Bell className="h-4 w-4" />
              Contact us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
