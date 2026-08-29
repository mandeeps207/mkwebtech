import { Badge } from "@/components/ui/badge";

export function SectionHeading({ eyebrow, title, description, level = "h2" }: { eyebrow?: string; title: string; description?: string; level?: "h1" | "h2" }) {
  const Heading = level;
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? <Badge variant="accent">{eyebrow}</Badge> : null}
      <Heading className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">{title}</Heading>
      {description ? <p className="mt-4 text-base leading-7 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
