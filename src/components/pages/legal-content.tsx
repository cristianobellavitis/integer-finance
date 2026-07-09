import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

interface LegalContentProps {
  title: string;
  markdown: string;
}

export default function LegalContent({ title, markdown }: LegalContentProps) {
  return (
    <SectionWrapper>
      <RevealOnScroll className="mx-auto max-w-3xl">
        <SectionHeading as="h1" title={title} />

        <div
          className="
            prose prose-slate mt-8 max-w-none
            prose-headings:font-heading prose-headings:font-semibold prose-headings:text-brand-900
            prose-h2:mb-4 prose-h2:mt-10 prose-h2:text-2xl
            prose-p:leading-relaxed prose-p:text-muted-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:font-semibold prose-strong:text-brand-900
            prose-blockquote:rounded-md prose-blockquote:border-l-4 prose-blockquote:border-primary
            prose-blockquote:bg-surface-100 prose-blockquote:px-4 prose-blockquote:py-3
            prose-blockquote:not-italic prose-blockquote:text-muted-foreground
            prose-li:text-muted-foreground prose-li:marker:text-primary
            prose-table:overflow-hidden prose-table:rounded-lg prose-table:border prose-table:border-border
            prose-thead:bg-surface-100
            prose-th:border prose-th:border-border prose-th:p-3 prose-th:text-left prose-th:font-heading prose-th:text-brand-900
            prose-td:border prose-td:border-border prose-td:p-3 prose-td:align-top prose-td:text-muted-foreground
          "
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
