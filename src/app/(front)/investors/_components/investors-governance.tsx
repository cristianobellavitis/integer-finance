import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function InvestorsGovernance() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Image
            src="/images/investors/governance.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl border border-border"
            alt="Team reviewing development plans around a table"
          />
        </div>

        <div className="md:col-span-7">
          <SectionHeading title="Governance" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A strong risk management framework and robust governance
            structure are central to our strategy, essential for maintaining
            credibility and effectiveness as a financial institution. We
            have assembled a dynamic team that blends entrepreneurial spirit
            with industry expertise. Supported by a solid organizational
            structure, we ensure that all business activities are conducted
            with careful risk management. This approach guarantees that we
            handle risks appropriately and uphold the highest standards of
            governance.
          </p>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
