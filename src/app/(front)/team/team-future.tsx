import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import BlueprintGraphic from "@/components/common/BlueprintGraphic";

function TeamFuture() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <SectionHeading title="Change for a Better Future" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Our founders recognized a critical gap in financing for regional
            developers, SMEs, and construction companies, along with a
            longstanding undersupply of housing, particularly in northern
            regions. From the beginning, our ambition has been to be the
            leading financial institution for property and regional
            regeneration. We are passionate about delivering bespoke lending
            products to drive economic growth and support communities that
            need it most. Although we don&apos;t hold a banking license, our
            dedicated focus and innovative financial solutions enable us to
            push forward with our ambitious plans and make a meaningful
            impact.
          </p>
        </div>

        <div className="md:col-span-5">
          <BlueprintGraphic variant="elevation" className="aspect-square w-full" />
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}

export default TeamFuture;
