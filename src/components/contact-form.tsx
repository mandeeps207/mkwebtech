"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  store: z.string().max(253),
  subject: z.enum(["Fixify support", "Product support", "Implementation help", "Partnership", "Other"]),
  message: z.string().min(10).max(5000),
  website: z.string().optional()
});

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const isFixify = searchParams.get("product")?.toLowerCase() === "fixify";
  const isCustomProject = searchParams.get("subject")?.toLowerCase() === "custom-development";
  const defaultSubject = isFixify ? "Fixify support" : isCustomProject ? "Implementation help" : "Product support";
  const product = searchParams.get("product")?.trim().slice(0, 100) ?? "";
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const turnstileContainer = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({ type: "idle", message: "" });
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", store: "", subject: defaultSubject, message: "", website: "" }
  });

  const resetTurnstile = useCallback(() => {
    setTurnstileToken("");
    if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
  }, []);

  useEffect(() => {
    if (!scriptReady || !siteKey || !turnstileContainer.current || !window.turnstile || widgetId.current) return;
    widgetId.current = window.turnstile.render(turnstileContainer.current, {
      sitekey: siteKey,
      callback: (token: string) => setTurnstileToken(token),
      "expired-callback": () => setTurnstileToken(""),
      "error-callback": () => {
        setTurnstileToken("");
        setStatus({ type: "error", message: "The security check could not load. Please try again." });
      },
      theme: "auto"
    });

    return () => {
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [scriptReady, siteKey]);

  const submit = async (values: z.infer<typeof contactSchema>) => {
    setStatus({ type: "idle", message: "" });
    if (!turnstileToken) {
      setStatus({ type: "error", message: "Please complete the security check." });
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, product, turnstileToken })
      });
      const result = await response.json().catch(() => ({})) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Unable to send your message right now. Please try again.");

      form.reset({ name: "", email: "", store: "", subject: defaultSubject, message: "", website: "" });
      setStatus({ type: "success", message: result.message || "Thanks! Your message has been sent. We'll get back to you soon." });
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Unable to send your message right now. Please try again." });
    } finally {
      resetTurnstile();
    }
  };

  return (
    <form onSubmit={form.handleSubmit(submit)} className="space-y-5 rounded-lg border border-border bg-card p-6 shadow-sm">
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={() => setScriptReady(true)} />
      <div className="space-y-2">
        <label htmlFor="contact-name" className="text-sm font-medium">Name</label>
        <Input id="contact-name" autoComplete="name" placeholder="Your name" {...form.register("name")} />
        {form.formState.errors.name ? <p className="text-sm text-destructive">Enter your name.</p> : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-email" className="text-sm font-medium">Email</label>
        <Input id="contact-email" autoComplete="email" placeholder="you@example.com" type="email" {...form.register("email")} />
        {form.formState.errors.email ? <p className="text-sm text-destructive">Enter a valid email address.</p> : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-store" className="text-sm font-medium">Store or domain <span className="font-normal text-muted-foreground">(optional)</span></label>
        <Input id="contact-store" autoComplete="url" placeholder="your-store.myshopify.com" {...form.register("store")} />
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-subject" className="text-sm font-medium">Subject</label>
        <select
          id="contact-subject"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          {...form.register("subject")}
        >
          <option>Fixify support</option>
          <option>Product support</option>
          <option>Implementation help</option>
          <option>Partnership</option>
          <option>Other</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
        <Textarea id="contact-message" placeholder="Tell us about your store and how we can help" {...form.register("message")} />
        {form.formState.errors.message ? <p className="text-sm text-destructive">Enter at least 10 characters.</p> : null}
      </div>
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" tabIndex={-1} autoComplete="off" {...form.register("website")} />
      </div>
      <p className="text-sm leading-6 text-muted-foreground">For Fixify support, describe the issue and include your Shopify store domain. Do not include customer passwords, payment details, API keys, access tokens, or other sensitive customer/order information.</p>
      {siteKey ? <div ref={turnstileContainer} aria-label="Security check" /> : <p className="text-sm text-destructive">The contact form is temporarily unavailable.</p>}
      <div aria-live="polite" role="status">
        {status.message ? <p className={`text-sm ${status.type === "success" ? "text-teal-700 dark:text-teal-300" : "text-destructive"}`}>{status.message}</p> : null}
      </div>
      <Button type="submit" disabled={form.formState.isSubmitting || !siteKey}>
        <Send className="h-4 w-4" /> {form.formState.isSubmitting ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
