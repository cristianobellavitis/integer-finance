import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ImageOpacity from "@/components/common/ImageOpacity";

interface FinanceHeroProps {
  coverImage: string;
  title: string;
  description: string;
}

export default function FinanceHero({
  coverImage,
  title,
  description,
}: FinanceHeroProps) {
  return (
    <MaxWidthWrapper
      className="md:py-18 relative max-w-full overflow-hidden bg-cover bg-center py-12 lg:py-24"
      style={{ backgroundImage: `url("${coverImage}")` }}
    >
      <ImageOpacity opacity={50} />
      <div className="container relative mt-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
              {title}
            </h1>
            <p className="max-w-xl text-lg font-medium tracking-tight text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
