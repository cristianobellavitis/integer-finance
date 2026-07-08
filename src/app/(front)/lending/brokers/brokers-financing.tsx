import React from "react";

import LendingForm from "@/components/forms/LendingForm";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

const BrokersFinancing = () => {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll className="mx-auto max-w-2xl text-center">
        <SectionHeading
          align="center"
          title="Interested in Financing Your Client's Project?"
        />
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          If you&apos;re interested in joining our panel or seeking finance
          for a client&apos;s project, get in touch with us today. We offer
          bespoke, flexible lending solutions tailored to your needs,
          ensuring quick and efficient access to funds.
        </p>
      </RevealOnScroll>
      <LendingForm />
    </SectionWrapper>
  );
};

export default BrokersFinancing;
