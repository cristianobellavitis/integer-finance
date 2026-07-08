import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import BlueprintGraphic from "@/components/common/BlueprintGraphic";

const BrokersCover = () => {
  return (
    <div className="bg-brand-900">
      <SectionWrapper>
        <RevealOnScroll className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
          <div className="w-full md:w-1/2">
            <SectionHeading
              as="h1"
              title="Building Long-Term Partnerships"
              className="text-white"
            />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-300">
              Our lending decisions are made locally, allowing us to
              collaborate closely with brokers and local professionals. We
              work together to provide tailored lending solutions that meet
              the unique needs of your clients.
            </p>
            <Link
              href="#brokers-finance-solutions"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 bg-white text-brand-900 hover:bg-white/90",
              )}
            >
              View our lending solutions
            </Link>
          </div>

          <BlueprintGraphic
            variant="elevation"
            onDark
            svgClassName="h-[85%] w-[85%]"
            className="hidden shrink-0 md:flex md:h-64 md:w-1/2 lg:h-72"
          />
        </RevealOnScroll>
      </SectionWrapper>
    </div>
  );
};

export default BrokersCover;
