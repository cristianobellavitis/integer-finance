import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

const MissionCover = () => {
  return (
    <SectionWrapper className="pb-0 pt-10 md:pt-12">
      <RevealOnScroll>
        <SectionHeading as="h1" title="Building Better Futures" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Integer Finance is dedicated to creating better futures for
          communities across the UK, particularly those in greatest need,
          supporting real estate developers with the power to dream.
        </p>
      </RevealOnScroll>
    </SectionWrapper>
  );
};

export default MissionCover;
