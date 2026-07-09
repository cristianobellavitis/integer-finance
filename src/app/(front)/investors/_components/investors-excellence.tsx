import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function InvestorsExecellence() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <SectionHeading title="Supported by Excellence" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We take pride in building a purpose-driven financial institution
            dedicated to driving change within the property development
            ecosystem. We have secured essential capital through investments
            from high-net-worth individuals, small businesses, and banks.
            With their support, Integer Finance is well on its way to
            achieving our ambition of creating better futures and driving
            meaningful change in the communities we serve.
          </p>
        </div>

        <div className="md:col-span-5">
          <Image
            src="/images/investors/excellence.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl border border-border"
            alt="Business partners networking at an event"
          />
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
