import React from "react";

import ImageOpacity from "@/components/common/ImageOpacity";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const SailingCover = () => {
  return (
    <MaxWidthWrapper
      className="md:py-18 relative max-w-full overflow-hidden bg-cover bg-center py-12 lg:py-24"
      style={{ backgroundImage: `url("/images/sailing/cover.jpg")` }}
    >
      <ImageOpacity opacity={50} />
      <div className="container relative mt-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
              Exclusive Sailing Experience with Integer Investments
            </h1>
            <p className="max-w-xl text-lg font-medium tracking-tight text-white">
              At Integer Investments, we value the trust and partnership of our
              investors and clients. To celebrate this journey together, we are
              delighted to invite our most dedicated partners aboard our newly
              acquired luxury catamaran for an unforgettable sailing experience
              in the Mediterranean.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default SailingCover;
