import React from "react";
import type { Metadata } from "next";

import LegalContent from "@/components/pages/legal-content";
import { getLegalMarkdown } from "@/lib/legal-content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Integer Finance collects, uses, and protects your personal data.",
  path: "/privacy",
});

export default function Page() {
  const markdown = getLegalMarkdown("privacy-policy.md");
  return <LegalContent title="Privacy Policy" markdown={markdown} />;
}
