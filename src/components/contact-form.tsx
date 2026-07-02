"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

export function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  return (
    <form onSubmit={form.handleSubmit(() => form.reset())} className="space-y-4 rounded-lg border border-border bg-card p-6 shadow-sm">
      <Input placeholder="Your name" {...form.register("name")} />
      <Input placeholder="Email address" type="email" {...form.register("email")} />
      <Textarea placeholder="Tell us about your store, plugin idea, or support request" {...form.register("message")} />
      <Button type="submit"><Send className="h-4 w-4" /> Send message</Button>
    </form>
  );
}
