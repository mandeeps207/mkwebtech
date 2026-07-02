import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Changelog", description: "Release notes for MK WebTech products." };

const releases = [
  { version: "2026.06", title: "Smart Bundles market labels", notes: ["Market-aware pricing labels", "Improved preview rendering", "New docs examples"] },
  { version: "2026.05", title: "Review Pulse moderation", notes: ["AI-assisted moderation summaries", "Bulk import validation", "Widget accessibility improvements"] },
  { version: "2026.04", title: "WP Speed Suite reports", notes: ["WooCommerce fragment tuning", "Report export", "Multisite audit fixes"] }
];

export default function ChangelogPage() {
  return (
    <section className="container py-16">
      <SectionHeading eyebrow="Changelog" title="Release notes across the product suite" />
      <div className="mx-auto mt-12 max-w-3xl space-y-6">
        {releases.map((release) => (
          <div key={release.version} className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <Badge variant="secondary">{release.version}</Badge>
            <h2 className="mt-4 text-xl font-semibold">{release.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">{release.notes.map((note) => <li key={note}>• {note}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
