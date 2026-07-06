import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function SailingPartners() {
  return (
    <MaxWidthWrapper>
      <div className="my-16 sm:my-8">
        <div className="my-3 text-center sm:px-12 md:text-left">
          <h2 className="text-4xl font-bold text-primary">
            A Thank You to Our Partners
          </h2>
          <div className="my-6 text-xl font-semibold text-gray-400">
            This is not a charter service — it is our way of saying thank you.
            Our valued capital providers and long-term partners will have the
            chance to join us on board for selected sails, enjoying:
            <ul className="mt-4 list-inside list-disc space-y-4">
              <li>Luxurious surroundings aboard our modern catamaran.</li>
              <li>Unique itineraries tailored to the spirit of adventure.</li>
              <li>
                The opportunity to relax, network, and share in the growth of
                Integer Investments in a one-of-a-kind setting.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
