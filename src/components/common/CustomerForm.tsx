import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

interface Props {
  title: string;
  formUrl: string;
}

const CustomerForm = ({ title, formUrl }: Props) => {
  return (
    <SectionWrapper>
      <RevealOnScroll className="mx-auto max-w-2xl text-center">
        <SectionHeading as="h1" align="center" title={title} />
      </RevealOnScroll>

      <div
        className="mx-auto mt-10 max-w-2xl"
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingBottom: "100.25%",
          overflow: "hidden",
        }}
      >
        <iframe
          src={formUrl}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          allowFullScreen
        />
      </div>
    </SectionWrapper>
  );
};

export default CustomerForm;
