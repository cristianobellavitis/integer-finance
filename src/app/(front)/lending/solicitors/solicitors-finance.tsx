import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function SolicitorsFinance() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Image
            src="/images/solicitors/finance.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl border border-border"
            alt="Professional reviewing bridging finance paperwork"
          />
        </div>

        <div className="md:col-span-7">
          <SectionHeading title="Bridging Finance Made Simple" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            As a rapidly growing bridging lender, we leverage cutting-edge
            technology to deliver a fully digital and efficient conveyancing
            process. Our commitment to innovation ensures quick, seamless
            transactions, helping you stay ahead in the competitive property
            market. Partner with us for a streamlined, hassle-free experience
            from start to finish.
          </p>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
