import React from "react";
import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function InvestorsCommitment() {
  return (
    <SectionWrapper className="py-10 md:py-14">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <SectionHeading title="Regional Expertise and Commitment" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We take pride in our deep roots in the United Kingdom and
            leverage our regional knowledge and passion to support,
            regenerate, and build the future of our local communities.
            Integer Finance prioritizes the renewal and growth of
            communities in need through its lending policy. We offer
            accessible, tailored property development loan products with
            incentives for sustainable, zero-carbon developments and
            projects with high positive social impact across the UK.
          </p>
          <Link
            href="/our-mission"
            className={cn(buttonVariants({ size: "lg" }), "mt-6")}
          >
            Find out more
          </Link>
        </div>

        <div className="md:col-span-5">
          <Image
            src="/images/investors/regional.png"
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
