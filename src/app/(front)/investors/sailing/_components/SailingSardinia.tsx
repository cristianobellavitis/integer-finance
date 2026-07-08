import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function SailingSardinia() {
  return (
    <SectionWrapper className="py-10 md:py-14">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <SectionHeading
            title={
              <>
                <span className="text-muted-foreground">July </span>
                Sardinia
              </>
            }
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            By July, the catamaran will be gliding through the pristine
            waters of{" "}
            <span className="font-semibold text-brand-900">Sardinia</span>,
            an island where nature still feels untouched. The{" "}
            <span className="font-semibold text-brand-900">
              Costa Smeralda
            </span>{" "}
            is renowned for its dazzling beaches and sophisticated lifestyle,
            but beyond the polished marinas lie hidden anchorages with white
            sand and crystal waters that rival the Caribbean. Guests will
            discover uninhabited islets, snorkel in marine reserves, and
            enjoy sunsets over rugged granite cliffs. Sardinia also offers
            opportunities for those who wish to explore ashore, from the
            charming town of{" "}
            <span className="font-semibold text-brand-900">
              La Maddalena
            </span>{" "}
            to local vineyards serving distinctive Sardinian wines. Here,
            every sail is an immersion in both serenity and sophistication.
          </p>
        </div>

        <div className="md:col-span-5">
          <Image
            src="/images/sailing/sardinia.jpeg"
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
