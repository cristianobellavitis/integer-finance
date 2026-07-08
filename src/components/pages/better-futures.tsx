import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

const BetterFutures = () => {
  return (
    <div className="bg-brand-900 pb-8 pt-10 md:pb-10 md:pt-14">
      <SectionWrapper className="py-0 md:py-0">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <SectionHeading
            align="center"
            title="Building Better Futures"
            className="text-white"
          />
          <p className="mt-6 text-lg leading-relaxed text-brand-300">
            Integer Finance is dedicated to creating better futures for
            communities across the UK, particularly those in greatest need,
            supporting real estate developers with the power to dream.
          </p>
          <Link
            href="/our-mission"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 bg-white text-brand-900 hover:bg-white/90",
            )}
          >
            Find out more
          </Link>
        </RevealOnScroll>
      </SectionWrapper>
    </div>
  );
};

export default BetterFutures;
