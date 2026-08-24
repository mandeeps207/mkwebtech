"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.enum(["Fixify support", "Product support", "Implementation help", "Partnership", "Other"]),
  message: z.string().min(10)
});

export function ContactForm() {
  const searchParams = useSearchParams();
  const isFixify = searchParams.get("product")?.toLowerCase() === "fixify";
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: isFixify ? "Fixify support" : "Product support", message: "" }
  });

  const submit = (values: z.infer<typeof contactSchema>) => {
    const subject = encodeURIComponent(`${values.subject} - ${values.name}`);
    const body = encodeURIComponent(`Name: ${values.name}\nReply email: ${values.email}\n\n${values.message}`);
    window.location.href = `mailto:mkwebtecindia@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={form.handleSubmit(submit)} className="space-y-5 rounded-lg border border-border bg-card p-6 shadow-sm">
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
      <p className="text-sm leading-6 text-muted-foreground">Please do not include passwords, API keys, access tokens, or payment information.</p>
      <Button type="submit"><Send className="h-4 w-4" /> Open email draft</Button>
    </form>
  );
}
