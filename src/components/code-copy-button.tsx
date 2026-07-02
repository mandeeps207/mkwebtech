"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CodeCopyButton() {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="absolute right-2 top-2 h-8 w-8 bg-slate-900/70 text-slate-100 hover:bg-slate-800 hover:text-white"
      aria-label="Copy code"
      onClick={async (event) => {
        const pre = event.currentTarget.parentElement?.querySelector("pre");
        await navigator.clipboard.writeText(pre?.innerText || "");
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1200);
      }}
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </Button>
  );
}
