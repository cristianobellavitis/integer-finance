import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

interface FinanceHeroProps {
  title: string;
  description: string;
}

export default function FinanceHero({ title, description }: FinanceHeroProps) {
  return (
    <div className="bg-brand-900">
      <SectionWrapper>
        <RevealOnScroll className="max-w-2xl">
          <SectionHeading as="h1" title={title} className="text-white" />
          <p className="mt-6 text-lg leading-relaxed text-brand-300">
            {description}
          </p>
        </RevealOnScroll>
      </SectionWrapper>
    </div>
  );
}
