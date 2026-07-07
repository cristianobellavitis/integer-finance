import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function MissionCommitment() {
  return (
    <SectionWrapper>
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <SectionHeading title="Our Commitment" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We are committed to supporting regional growth by offering
            financial solutions that benefit both developers and the
            communities they serve. We value innovation, growth, and the
            creation of lasting value for our clients.
          </p>
        </div>

        <div className="md:col-span-5">
          <Image
            src="/images/mission/commitment.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl border border-border"
            alt=""
          />
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
