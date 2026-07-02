"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = z.object({ email: z.string().email("Enter a valid email") });

export function NewsletterForm() {
  const form = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema), defaultValues: { email: "" } });
  const onSubmit = form.handleSubmit(() => form.reset());

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-6 flex max-w-md gap-2">
      <Input placeholder="you@company.com" aria-label="Email" {...form.register("email")} />
      <Button type="submit"><Mail className="h-4 w-4" /> Subscribe</Button>
    </form>
  );
}
