import Image from "next/image";
import Link from "next/link";

const columns = [
  { title: "Company", links: [["About", "/about"], ["Contact", "/contact"]] },
  { title: "Products", links: [["WordPress Plugins", "/products/wordpress"], ["Shopify Apps", "/products/shopify"], ["Fixify", "/fixify"]] },
  { title: "Resources", links: [["Services", "/services"], ["Documentation", "/docs"], ["Changelog", "/changelog"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Fixify Privacy", "/fixify/privacy-policy"], ["Terms", "/terms"]] }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.2fr_2.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="relative block h-10 w-36">
              <Image src="/logo.jpg" alt="MK WebTech" fill className="object-contain object-left dark:hidden" sizes="144px" />
              <Image src="/logo-dark.jpg" alt="MK WebTech" fill className="hidden object-contain object-left dark:block" sizes="144px" />
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            Practical WordPress plugins, Shopify apps, and custom ecommerce development for clearly defined commerce workflows.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
