import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function SailingWhere() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll>
        <SectionHeading title="Where We'll Sail" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From <span className="font-semibold text-brand-900">mid-May to
          the end of August</span>, we&rsquo;ll be cruising some of the most
          stunning coastlines in Europe on a new modern Bali Catsmart
          catamaran.
        </p>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
