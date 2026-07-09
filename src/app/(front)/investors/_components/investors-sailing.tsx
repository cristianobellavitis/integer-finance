import React from "react";
import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function InvestorsSailing() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <Image
            src="/images/sailing/sailing.jpg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "80%" }}
            className="rounded-xl border border-border"
            alt="Luxury catamaran sailing in the Mediterranean"
          />
        </div>

        <div className="md:col-span-7">
          <SectionHeading title="Sailing with Integer Finance" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            At Integer Finance, we value the trust and partnership of our
            investors and clients. To celebrate this journey together, we
            are delighted to invite our most dedicated partners aboard our
            newly acquired luxury catamaran for an unforgettable sailing
            experience in the Mediterranean.
          </p>
          <Link
            href="/investors/sailing"
            className={cn(buttonVariants({ size: "lg" }), "mt-6")}
          >
            Find out more
          </Link>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
