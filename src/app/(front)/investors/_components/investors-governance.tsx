import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function InvestorsGovernance() {
  return (
    <MaxWidthWrapper>
      <div className="mt-12 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/investors/governance.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div className="col-span-6">
          <div className="mb-3 flex items-start text-center sm:px-12 md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary">Governance</h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                A strong risk management framework and robust governance
                structure are central to our strategy, essential for maintaining
                credibility and effectiveness as a financial institution. We
                have assembled a dynamic team that blends entrepreneurial spirit
                with industry expertise. Supported by a solid organizational
                structure, we ensure that all business activities are conducted
                with careful risk management. This approach guarantees that we
                handle risks appropriately and uphold the highest standards of
                governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
