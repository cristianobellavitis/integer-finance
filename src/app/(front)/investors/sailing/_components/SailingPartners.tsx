import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

const PERKS = [
  "Luxurious surroundings aboard our modern catamaran.",
  "Unique itineraries tailored to the spirit of adventure.",
  "The opportunity to relax, network, and share in the growth of Integer Finance in a one-of-a-kind setting.",
];

export default function SailingPartners() {
  return (
    <SectionWrapper className="py-10 md:py-14">
      <RevealOnScroll>
        <SectionHeading title="A Thank You to Our Partners" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          This is not a charter service &mdash; it is our way of saying
          thank you. Our valued capital providers and long-term partners
          will have the chance to join us on board for selected sails,
          enjoying:
        </p>
        <ul className="mt-6 max-w-2xl space-y-3">
          {PERKS.map((perk, index) => (
            <li key={index} className="flex items-start">
              <div className="me-3 mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
              <span className="text-lg leading-relaxed text-muted-foreground">
                {perk}
              </span>
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
