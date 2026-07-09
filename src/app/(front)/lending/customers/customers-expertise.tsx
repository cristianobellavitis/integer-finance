import React from "react";

import { customersFinanceSolutionData } from "./customers-data";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function CustomersExpertise() {
  return (
    <SectionWrapper className="pt-0">
      <div id="finance-solutions">
        <RevealOnScroll>
          <SectionHeading align="center" title="Financial Expertise" />
        </RevealOnScroll>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {customersFinanceSolutionData.map((item, index) => (
            <RevealOnScroll key={index} delayMs={index * 100}>
              <div className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-md">
                <item.icon className="h-6 w-6 text-primary" />
                <h6 className="mt-3 font-heading text-lg font-semibold text-brand-900">
                  {item.title}
                </h6>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
