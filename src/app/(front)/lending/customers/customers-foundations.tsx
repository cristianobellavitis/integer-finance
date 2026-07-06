import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function CustomersFoundations() {
  return (
    <MaxWidthWrapper>
      <div className="mt-20 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="relative col-span-6 flex flex-col gap-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/lending-customers/foundation.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
              alt="foundation"
            />
          </div>
        </div>

        <div className="col-span-6">
          <div className="mb-3 flex items-start text-center sm:px-12 md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary">
                Built on Strong Foundations
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                Your specialist Relationship Manager understands the challenges
                and opportunities of your market and the need for rapid
                decision-making. As a relationship-focused financial
                institution, we pride ourselves on offering fully flexible,
                innovative finance solutions for every stage of the development
                lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
