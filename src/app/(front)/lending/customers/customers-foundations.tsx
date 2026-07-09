import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function CustomersFoundations() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Image
            src="/images/lending-customers/foundation.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl border border-border"
            alt="Foundation"
          />
        </div>

        <div className="md:col-span-7">
          <SectionHeading title="Built on Strong Foundations" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Your specialist Relationship Manager understands the challenges
            and opportunities of your market and the need for rapid
            decision-making. As a relationship-focused financial institution,
            we pride ourselves on offering fully flexible, innovative
            finance solutions for every stage of the development lifecycle.
          </p>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
