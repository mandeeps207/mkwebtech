"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { cn } from "@/lib/utils";

const links = [
  ["Home", "/"],
  ["Products", "/products"],
  ["Documentation", "/docs"],
  ["Blog", "/blog"],
  ["Pricing", "/pricing"],
  ["About", "/about"],
  ["Contact", "/contact"]
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="relative block h-10 w-36">
            <Image src="/logo.jpg" alt="MK WebTech" fill className="object-contain object-left dark:hidden" priority sizes="144px" />
            <Image src="/logo-dark.jpg" alt="MK WebTech" fill className="hidden object-contain object-left dark:block" priority sizes="144px" />
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                pathname === href && "bg-accent text-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button className="hidden md:inline-flex" asChild>
            <Link href="/contact">Start a project</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container grid gap-1 py-3">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-md px-3 py-2 text-sm" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
