import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

const TeamCover = () => {
  return (
    <div className="bg-brand-900">
      <SectionWrapper>
        <RevealOnScroll>
          <SectionHeading as="h1" title="Our Team" className="text-white" />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-300">
            Meet the team of dedicated professionals behind Integer Finance.
            Our experts bring a wealth of experience and regional knowledge,
            ensuring exceptional service and support for our clients. Key
            members include our Chief Commercial Officer, Senior Credit
            Partners, and Relationship Managers.
          </p>
        </RevealOnScroll>
      </SectionWrapper>
    </div>
  );
};

export default TeamCover;
