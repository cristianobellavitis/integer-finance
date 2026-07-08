import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

const solutionsData = [
  {
    title: "Innovative Transaction Management Software",
    desc: "Our internally developed transaction management software ensures a streamlined process for all our clients. This cutting-edge tool enhances efficiency and transparency, making every step of the lending journey seamless and hassle-free. Trust our technology-driven approach to simplify your transactions.",
  },
  {
    title: "Embracing a Paperless Future",
    desc: "We utilize digital signatures and documents, fully compliant with PG82 HMLR guidelines. Our innovative, paperless approach streamlines the process, enhances security, and boosts efficiency, ensuring seamless and quick real estate transactions.",
  },
];

export default function SolicitorsSolutions() {
  return (
    <SectionWrapper className="py-10 md:py-14">
      <RevealOnScroll>
        <SectionHeading align="center" title="Technology Solutions" />
      </RevealOnScroll>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {solutionsData.map((item, index) => (
          <RevealOnScroll key={index} delayMs={index * 100}>
            <div className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-md">
              <h6 className="font-heading text-lg font-semibold text-brand-900">
                {item.title}
              </h6>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionWrapper>
  );
}
