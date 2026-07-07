import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "Changelog", description: "Release notes for MK WebTech products." };

const releases = [
  {
    version: "3.1.0",
    title: "CTA Studio analytics dashboard",
    notes: [
      "Added dashboard KPI cards for impressions, clicks, conversion rate, active CTAs, top CTA, and total CTAs.",
      "Added performance chart filters for daily, weekly, monthly, and date-range views.",
      "Added breakdown cards for device type, CTA type mix, and traffic sources."
    ]
  },
  {
    version: "3.0.0",
    title: "Floating Buttons CTA layout",
    notes: [
      "Added repeatable floating action buttons with URL, Dashicon picker, optional hover text, and add/remove controls.",
      "Added global and per-button styling controls for icon-focused quick actions.",
      "Added adaptive admin live preview and frontend rendering for floating action buttons."
    ]
  },
  {
    version: "2.2.1",
    title: "Evergreen timer and visibility improvements",
    notes: [
      "Fixed evergreen timers so they no longer require a normal end date.",
      "Improved shortcode-only CTA asset loading on singular content.",
      "Rebuilt countdown rendering with timestamp-based updates for smoother frontend behavior."
    ]
  }
];

export default function ChangelogPage() {
  return (
    <section className="container py-16">
      <SectionHeading eyebrow="Changelog" title="MkWebTech CTA Studio release notes" />
      <div className="mx-auto mt-12 max-w-3xl space-y-6">
        {releases.map((release) => (
          <div key={release.version} className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <Badge variant="secondary">{release.version}</Badge>
            <h2 className="mt-4 text-xl font-semibold">{release.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {release.notes.map((note) => (
                <li key={note}>- {note}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
