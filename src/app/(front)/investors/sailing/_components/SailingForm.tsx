import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

const SailingForm = () => {
  return (
    <div
      className="relative max-w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url("/images/sailing/bottom.jpg")` }}
    >
      <div className="absolute inset-0 bg-brand-900/70" />
      <SectionWrapper className="relative">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <SectionHeading
            align="center"
            title="How to Join"
            className="text-white"
          />
          <p className="mt-6 text-lg leading-relaxed text-brand-300">
            Spaces are limited, and invitations will be extended personally
            to our most trusted investors and clients. If you would like to
            express your interest, please fill in the form below directly.
          </p>
        </RevealOnScroll>

        <div className="mt-10">
          <iframe
            id="sailing-form"
            src="https://forms.monday.com/forms/embed/4a7ca67bfca965e9c951fb3d6e46599d?r=use1"
            className="w-full rounded-xl"
            style={{
              minHeight: "500px",
              border: 0,
            }}
            allowFullScreen
          />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SailingForm;
