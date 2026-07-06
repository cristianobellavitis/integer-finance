import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BlueprintGraphic from "@/components/common/BlueprintGraphic";
import { cn } from "@/lib/utils";

export default function HomeMission() {
  return (
    <MaxWidthWrapper className="py-20 md:py-28">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <h1 className="text-left font-heading text-4xl font-semibold leading-tight tracking-tight text-brand-900 md:text-5xl">
            Our regional expertise and dedication will drive significant
            economic growth.
          </h1>
          <div className="mt-5 h-[3px] w-14 bg-primary" />

          <p className="mb-6 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            At Integer Investments, we prioritize innovation, value creation,
            and growth in our interactions with customers and communities. We
            actively seek diverse perspectives, promoting a culture that
            encourages new ideas and solutions. Our aim is to create an
            environment where everyone feels valued and can contribute to our
            collective success. We support regional property developers, and
            construction companies in underserved areas across the UK. Our
            property development loans range from £50,000 to £250,000, providing
            the financial backing needed to regenerate and build communities.
          </p>

          <Link
            href="/our-mission"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            Our Mission
          </Link>
        </div>

        <div className="md:col-span-5">
          <BlueprintGraphic
            variant="floor-plan"
            className="aspect-square w-full"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
