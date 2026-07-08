import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function SailingAmalfi() {
  return (
    <SectionWrapper className="py-10 md:py-14">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jxIy1g_f968?si=GoFPitHNJLyMqkiy"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="aspect-video w-full"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <SectionHeading
            title={
              <>
                <span className="text-muted-foreground">May &amp; June </span>
                Amalfi Coast
              </>
            }
          />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Sailing the Amalfi Coast is like gliding through a living
            postcard. Pastel-colored villages cling dramatically to cliff
            faces, cascading down into the sparkling Tyrrhenian Sea. From the
            deck of the catamaran, guests will see iconic towns such as{" "}
            <span className="font-semibold text-brand-900">Positano</span>{" "}
            and{" "}
            <span className="font-semibold text-brand-900">Amalfi</span>,
            where narrow cobbled streets lead to hidden piazzas and artisanal
            shops. Days can be spent dropping anchor in{" "}
            <span className="font-semibold text-brand-900">
              secret coves accessible only by boat
            </span>
            , swimming in turquoise waters, and indulging in{" "}
            <span className="font-semibold text-brand-900">
              world-class cuisine
            </span>{" "}
            at seaside trattorias. With its mix of glamour and tradition,
            this leg of the journey sets the tone for a season of luxury and
            discovery.
          </p>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
