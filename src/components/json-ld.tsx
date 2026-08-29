import { serializeJsonLd, type SchemaNode } from "@/lib/seo";

export function JsonLd({ nodes }: { nodes: SchemaNode[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd({ "@context": "https://schema.org", "@graph": nodes }) }}
    />
  );
}
