import React from "react";

import ImageOpacity from "@/components/common/ImageOpacity";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const InvestorsCover = () => {
  return (
    <MaxWidthWrapper
      className="md:py-18 relative max-w-full overflow-hidden bg-cover bg-center py-12 lg:py-24"
      style={{ backgroundImage: `url("/images/investors/cover.png")` }}
    >
      <ImageOpacity opacity={50} />
      <div className="container relative mt-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
              Investor Relations
            </h1>
            <p className="max-w-xl text-lg font-medium tracking-tight text-white">
              Integer Investments is driven by a clear purpose: to build better
              futures for communities across the UK that need it the most. Our
              mission is centred around creating meaningful change and fostering
              growth in underserved regions.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default InvestorsCover;
