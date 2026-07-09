import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function TeamCommunity() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Image
            src="/images/team/community.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl border border-border"
            alt="Community members gardening together"
          />
        </div>

        <div className="md:col-span-7">
          <SectionHeading title="Share Your Passion" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Join our community of investors dedicated to driving regional
            growth. Access exclusive resources, reports, and updates to make
            informed investment decisions. Meet our board, including our
            Chair, Investor Director, and Executive Directors, who are
            committed to building better futures.
          </p>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
