import React from "react";
import Link from "next/link";

import { financeSolutionsData } from "./finance-solutions-data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function FinanceSolutions() {
  return (
    <SectionWrapper className="pt-0">
      <div id="brokers-finance-solutions">
        <RevealOnScroll>
          <SectionHeading align="center" title="Finance Solutions" />
        </RevealOnScroll>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {financeSolutionsData.map((item, index) => (
            <RevealOnScroll key={index} delayMs={index * 100}>
              <div className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-md">
                <h6 className="font-heading text-lg font-semibold text-brand-900">
                  {item.title}
                </h6>
                <div className="mt-2 flex-grow space-y-3">
                  {item.desc.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-base leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Link
                  href={item.href}
                  className={cn(buttonVariants(), "mt-6 self-start")}
                >
                  Learn More
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
