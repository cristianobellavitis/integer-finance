import React from "react";
import type { LucideIcon } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export interface FinanceSolutionItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface FinanceSolutionsGridProps {
  heading: string;
  items: FinanceSolutionItem[];
  columns: 2 | 3;
}

export default function FinanceSolutionsGrid({
  heading,
  items,
  columns,
}: FinanceSolutionsGridProps) {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll>
        <SectionHeading title={heading} />
      </RevealOnScroll>

      <div
        className={
          columns === 3
            ? "mt-8 grid grid-cols-1 gap-6 md:grid-cols-3"
            : "mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
        }
      >
        {items.map((item, index) => (
          <RevealOnScroll key={index} delayMs={index * 100}>
            <div className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-md">
              <item.icon className="h-6 w-6 text-primary" />
              <h6 className="mt-3 font-heading text-lg font-semibold text-brand-900">
                {item.title}
              </h6>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
