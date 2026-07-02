import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { CodeCopyButton } from "@/components/code-copy-button";

const components = {
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <div className="relative my-6">
      <CodeCopyButton />
      <pre {...props} />
    </div>
  )
};

export function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose-mk">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeSlug, [rehypePrettyCode, { theme: "github-dark" }]]
          }
        }}
      />
    </div>
  );
}
