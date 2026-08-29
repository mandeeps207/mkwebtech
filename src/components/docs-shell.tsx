import Link from "next/link";
import { ChevronLeft, ChevronRight, FileText, Menu } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { MdxContent } from "@/components/mdx-content";
import { Button } from "@/components/ui/button";
import { getTableOfContents } from "@/lib/content";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";
import type { DocPage } from "@/types/content";

function DocsNav({ docs, activeSlug }: { docs: DocPage[]; activeSlug: string }) {
  const sections = [...new Set(docs.map((item) => item.section))];

  return (
    <nav className="space-y-6 text-sm" aria-label="Documentation">
      {sections.map((section) => (
        <div key={section}>
          <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{section}</div>
          <div className="space-y-1">
            {docs
              .filter((item) => item.section === section)
              .map((item) => (
                <Link
                  key={item.slug}
                  href={`/docs/${item.slug}`}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition hover:bg-accent hover:text-foreground",
                    item.slug === activeSlug && "bg-accent font-medium text-foreground"
                  )}
                >
                  <FileText className="h-3.5 w-3.5 shrink-0" />
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

export function DocsShell({ docs, doc }: { docs: DocPage[]; doc: DocPage }) {
  const index = docs.findIndex((item) => item.slug === doc.slug);
  const previous = docs[index - 1];
  const next = docs[index + 1];
  const toc = getTableOfContents(doc.content);
  const path = `/docs/${doc.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Documentation", path: "/docs" },
    { name: doc.title, path }
  ];

  return (
    <div className="border-t border-border">
      <JsonLd nodes={[
        webPageSchema({ path, name: doc.title, description: doc.description, breadcrumbs }),
        breadcrumbSchema(breadcrumbs)
      ]} />
      <div className="container lg:hidden">
        <details className="border-b border-border py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between rounded-md border border-border bg-card px-4 py-3 text-sm font-medium">
            <span className="flex items-center gap-2">
              <Menu className="h-4 w-4" />
              Documentation menu
            </span>
            <ChevronRight className="h-4 w-4" />
          </summary>
          <div className="mt-4 space-y-5 rounded-lg border border-border bg-card p-4">
            <DocsNav docs={docs} activeSlug={doc.slug} />
          </div>
        </details>
      </div>

      <div className="container grid gap-10 py-10 lg:grid-cols-[280px_minmax(0,1fr)_220px]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-3">
            <DocsNav docs={docs} activeSlug={doc.slug} />
          </div>
        </aside>

        <article className="min-w-0">
          <Breadcrumb items={[{ label: "Documentation", href: "/docs" }, { label: doc.title }]} />
          <header className="mb-8 border-b border-border pb-8">
            <div className="text-sm font-medium text-teal-600 dark:text-teal-300">{doc.section}</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance md:text-5xl">{doc.title}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">{doc.description}</p>
          </header>

          <MdxContent source={doc.content} />

          <nav className="mt-12 grid gap-3 border-t border-border pt-6 sm:grid-cols-2" aria-label="Previous and next pages">
            {previous ? (
              <Button variant="outline" className="h-auto justify-start p-4" asChild>
                <Link href={`/docs/${previous.slug}`}>
                  <ChevronLeft className="h-4 w-4" />
                  <span className="text-left">
                    <span className="block text-xs text-muted-foreground">Previous</span>
                    <span>{previous.title}</span>
                  </span>
                </Link>
              </Button>
            ) : (
              <span />
            )}
            {next ? (
              <Button variant="outline" className="h-auto justify-end p-4" asChild>
                <Link href={`/docs/${next.slug}`}>
                  <span className="text-right">
                    <span className="block text-xs text-muted-foreground">Next</span>
                    <span>{next.title}</span>
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </nav>
        </article>

        <aside className="hidden text-sm text-muted-foreground xl:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
            <div className="font-semibold text-foreground">On this page</div>
            {toc.length > 0 ? (
              <nav className="mt-3 space-y-2" aria-label="Table of contents">
                {toc.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    className={cn("block border-l border-border py-1 pl-3 hover:border-foreground hover:text-foreground", item.depth === 3 && "ml-3 text-xs")}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            ) : (
              <p className="mt-3 text-xs">No headings found.</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
