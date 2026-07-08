import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import BlueprintGraphic from "@/components/common/BlueprintGraphic";

const InvestorsCover = () => {
  return (
    <div className="bg-brand-900">
      <SectionWrapper>
        <RevealOnScroll className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
          <div className="w-full md:w-1/2">
            <SectionHeading
              as="h1"
              title="Investor Relations"
              className="text-white"
            />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-300">
              Integer Finance is driven by a clear purpose: to build better
              futures for communities across the UK that need it the most.
              Our mission is centred around creating meaningful change and
              fostering growth in underserved regions.
            </p>
          </div>

          <BlueprintGraphic
            variant="grid"
            onDark
            svgClassName="h-[85%] w-[85%]"
            className="hidden shrink-0 md:flex md:h-64 md:w-1/2 lg:h-72"
          />
        </RevealOnScroll>
      </SectionWrapper>
    </div>
  );
};

export default InvestorsCover;
