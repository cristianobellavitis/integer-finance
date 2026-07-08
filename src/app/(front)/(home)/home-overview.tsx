import React from "react";

import { overviewData } from "./home-data";
import BlueprintGraphic from "@/components/common/BlueprintGraphic";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function HomeOverview() {
  return (
    <SectionWrapper className="py-12 md:py-16">
      <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <BlueprintGraphic variant="grid" className="h-full w-full" />
        </div>

        <div className="md:col-span-7">
          <SectionHeading
            eyebrow="Industry Overview"
            title="Addressing a Critical Need"
            size="lg"
            ruleClassName="mb-8"
          />

          {overviewData.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="mb-3 flex items-start">
                <div className="me-3 mt-1.5 flex-shrink-0">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                </div>
                <div className="max-w-xl text-muted-foreground">
                  <p className="block text-base font-bold text-brand-900">
                    {item.title}
                  </p>
                  <span className="text-lg">{item.content}</span>
                </div>
              </div>
              {index < overviewData.length - 1 && <hr className="my-6" />}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
