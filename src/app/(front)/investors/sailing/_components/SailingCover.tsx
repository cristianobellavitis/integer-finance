import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

const SailingCover = () => {
  return (
    <div
      className="relative max-w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url("/images/sailing/cover.jpg")` }}
    >
      <div className="absolute inset-0 bg-brand-900/70" />
      <SectionWrapper className="relative">
        <RevealOnScroll className="max-w-2xl">
          <SectionHeading
            as="h1"
            title="Exclusive Sailing Experience with Integer Finance"
            className="text-white"
          />
          <p className="mt-6 text-lg leading-relaxed text-brand-300">
            At Integer Finance, we value the trust and partnership of our
            investors and clients. To celebrate this journey together, we are
            delighted to invite our most dedicated partners aboard our newly
            acquired luxury catamaran for an unforgettable sailing experience
            in the Mediterranean.
          </p>
        </RevealOnScroll>
      </SectionWrapper>
    </div>
  );
};

export default SailingCover;
