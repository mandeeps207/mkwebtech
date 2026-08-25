import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Shopify Apps",
  description: "Explore Fixify, the Shopify customer order-editing app from MK WebTech."
};

export default function ShopifyProductsPage() {
  return (
    <section className="container py-16">
      <SectionHeading
        eyebrow="Shopify"
        title="Fixify for Shopify"
        description="Give eligible customers a controlled way to correct supported order details before fulfillment."
      />
      <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-card p-8 text-center shadow-soft">
        <Badge variant="secondary">
          <ShoppingBag className="mr-1 h-3 w-3" />
          Shopify order editing
        </Badge>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight">Fixify</h2>
        <p className="mt-3 text-muted-foreground">
          Customers can make eligible shipping address, same-product variant, and financially neutral quantity changes through Shopify Customer Accounts, subject to merchant settings.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/fixify">View Fixify <ArrowRight className="h-4 w-4" /></Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">
              Contact us about Fixify
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
