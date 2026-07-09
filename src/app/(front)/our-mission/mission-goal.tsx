import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function MissionGoal() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5 md:order-1">
          <Image
            src="/images/mission/goal.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl border border-border"
            alt="Architect reviewing a property development plan"
          />
        </div>

        <div className="md:order-2 md:col-span-7">
          <SectionHeading title="Our Goal" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Since our inception, our goal has been to become the preferred
            lender for property and regional regeneration. We want to be the
            financial partner for those developers who are able to dream of a
            better future. We are dedicated to offering tailored lending
            solutions that stimulate economic growth and support communities
            in greatest need.
          </p>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
