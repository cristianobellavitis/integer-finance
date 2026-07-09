import React from "react";
import type { Metadata } from "next";

import LegalContent from "@/components/pages/legal-content";
import { getLegalMarkdown } from "@/lib/legal-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How Integer Finance uses cookies and similar technologies on this website.",
  path: "/cookies",
});

export default function Page() {
  const markdown = getLegalMarkdown("cookie-policy.md");
  return <LegalContent title="Cookie Policy" markdown={markdown} />;
}
