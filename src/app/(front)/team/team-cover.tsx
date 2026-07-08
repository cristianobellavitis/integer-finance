import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import BlueprintGraphic from "@/components/common/BlueprintGraphic";

const TeamCover = () => {
  return (
    <div className="bg-brand-900">
      <SectionWrapper>
        <RevealOnScroll className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
          <div className="w-full md:w-1/2">
            <SectionHeading as="h1" title="Our Team" className="text-white" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-300">
              Meet the team of dedicated professionals behind Integer
              Finance. Our experts bring a wealth of experience and regional
              knowledge, ensuring exceptional service and support for our
              clients. Key members include our Chief Commercial Officer,
              Senior Credit Partners, and Relationship Managers.
            </p>
          </div>

          <BlueprintGraphic
            variant="compass"
            onDark
            svgClassName="h-[85%] w-[85%]"
            className="hidden shrink-0 md:flex md:h-64 md:w-1/2 lg:h-72"
          />
        </RevealOnScroll>
      </SectionWrapper>
    </div>
  );
};

export default TeamCover;
