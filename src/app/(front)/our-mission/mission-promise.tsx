import React from "react";

import { missionPromiseData } from "./mission-data";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function MissionPromise() {
  return (
    <SectionWrapper className="pb-16 pt-0 md:pb-20">
      <RevealOnScroll>
        <SectionHeading eyebrow="Our Values" title="This is our promise to you" />
      </RevealOnScroll>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {missionPromiseData.map((item, index) => (
          <RevealOnScroll key={index} delayMs={index * 100}>
            <div className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-md">
              <item.icon className="h-6 w-6 text-primary" />

              <div className="mt-4 flex-grow">
                <h6 className="font-heading text-lg font-semibold text-brand-900">
                  {item.title}
                </h6>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
