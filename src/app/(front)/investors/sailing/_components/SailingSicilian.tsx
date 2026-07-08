import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function SailingSicilian() {
  return (
    <SectionWrapper className="py-10 md:py-14">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Image
            src="/images/sailing/sicilian.jpeg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="rounded-xl border border-border"
            alt=""
          />
        </div>

        <div className="md:col-span-7">
          <SectionHeading
            title={
              <>
                <span className="text-muted-foreground">August </span>
                Sicilian Islands
              </>
            }
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The summer crescendos in{" "}
            <span className="font-semibold text-brand-900">
              Sicily&rsquo;s island jewels
            </span>
            , where history, geology, and culture blend in ways found
            nowhere else. The{" "}
            <span className="font-semibold text-brand-900">
              Aeolian Islands
            </span>{" "}
            rise dramatically from the sea:{" "}
            <span className="font-semibold text-brand-900">
              Stromboli&rsquo;s active volcano
            </span>{" "}
            sends glowing eruptions skyward, while{" "}
            <span className="font-semibold text-brand-900">Panarea</span>{" "}
            offers chic, whitewashed charm. Guests can swim in natural
            thermal pools on{" "}
            <span className="font-semibold text-brand-900">Vulcano</span>,
            or sip Malvasia wine among the vineyards of{" "}
            <span className="font-semibold text-brand-900">Salina</span>.
            For those seeking something wilder, the{" "}
            <span className="font-semibold text-brand-900">
              Egadi Islands
            </span>{" "}
            near Trapani boast unspoiled bays and crystalline waters perfect
            for quiet anchorages. Sailing these islands is not just about
            beauty&mdash;it&rsquo;s about experiencing the living energy of
            the Mediterranean, where each harbor has its own story.
          </p>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
