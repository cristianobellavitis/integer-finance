import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import BlueprintGraphic from "@/components/common/BlueprintGraphic";

const CustomersCover = () => {
  return (
    <div className="bg-brand-900">
      <SectionWrapper>
        <RevealOnScroll className="flex flex-col items-center gap-10 md:flex-row md:gap-12">
          <div className="w-full md:w-1/2">
            <SectionHeading
              as="h1"
              title="Property Lending That Works"
              className="text-white"
            />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-300">
              Providing accessible, customized property finance solutions.
              Our locally-made lending decisions empower developers to focus
              on what they do best!
            </p>
            <Link
              href="#finance-solutions"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 bg-white text-brand-900 hover:bg-white/90",
              )}
            >
              View our lending solutions
            </Link>
          </div>

          <BlueprintGraphic
            variant="skyline"
            onDark
            svgClassName="h-[85%] w-[85%]"
            className="hidden shrink-0 md:flex md:h-64 md:w-1/2 lg:h-72"
          />
        </RevealOnScroll>
      </SectionWrapper>
    </div>
  );
};

export default CustomersCover;
