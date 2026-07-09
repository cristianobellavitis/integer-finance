import React from "react";
import type { Metadata } from "next";

import LegalContent from "@/components/pages/legal-content";
import { getLegalMarkdown } from "@/lib/legal-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms of use for the Integer Finance website.",
  path: "/terms",
});

export default function Page() {
  const markdown = getLegalMarkdown("terms-of-use.md");
  return <LegalContent title="Terms of Use" markdown={markdown} />;
}
