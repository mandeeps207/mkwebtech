import Image from "next/image";
import Link from "next/link";

const columns = [
  { title: "Company", links: [["About", "/about"], ["Contact", "/contact"]] },
  { title: "Resources", links: [["Docs", "/docs"], ["Changelog", "/changelog"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"]] }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.5fr_2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="relative block h-10 w-36">
              <Image src="/logo.jpg" alt="MK WebTech" fill className="object-contain object-left dark:hidden" sizes="144px" />
              <Image src="/logo-dark.jpg" alt="MK WebTech" fill className="hidden object-contain object-left dark:block" sizes="144px" />
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Premium Shopify apps and WordPress plugins built for fast teams, better stores, and resilient commerce workflows.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {column.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-foreground">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container border-t border-border py-5 text-sm text-muted-foreground">
        © {new Date().getFullYear()} MK WebTech. All rights reserved.
      </div>
    </footer>
  );
}
