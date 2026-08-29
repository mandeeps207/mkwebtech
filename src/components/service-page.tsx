import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo";

type ServiceSection = { title: string; description: string; items: string[] };
type RelatedLink = { title: string; description: string; href: string; anchor: string };

export function ServicePage({
  title,
  description,
  path,
  serviceType,
  intro,
  sections,
  related
}: {
  title: string;
  description: string;
  path: string;
  serviceType: string;
  intro: string;
  sections: ServiceSection[];
  related: RelatedLink[];
}) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: title, path }
  ];

  return (
    <article>
      <JsonLd nodes={[
        webPageSchema({ path, name: title, description, breadcrumbs }),
        breadcrumbSchema(breadcrumbs),
        serviceSchema({ name: title, description, path, serviceType })
      ]} />
      <section className="border-b border-border bg-muted/20">
        <div className="container py-12">
          <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: title }]} />
          <div className="mt-10 max-w-4xl">
            <Badge variant="accent">Development service</Badge>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{intro}</p>
            <Button className="mt-7" size="lg" asChild>
              <Link href="/contact?subject=custom-development">Discuss your requirements <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{section.description}</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/25 py-16">
        <div className="container">
          <h2 className="text-3xl font-semibold tracking-tight">Relevant products and services</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <div key={item.href} className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
                <Link href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4">{item.anchor} <ArrowRight className="h-4 w-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Start with the workflow, constraints, and systems involved</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">A useful first message explains what happens today, what needs to change, which platform owns the data, and any compatibility or rollout constraints.</p>
        <Button className="mt-7" variant="outline" asChild><Link href="/contact?subject=custom-development">Send a project enquiry</Link></Button>
      </section>
    </article>
  );
}
