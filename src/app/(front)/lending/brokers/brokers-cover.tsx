import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ImageOpacity from "@/components/common/ImageOpacity";

const BrokersCover = () => {
  return (
    <MaxWidthWrapper
      className="md:py-18 relative max-w-full overflow-hidden bg-cover bg-center py-12 lg:py-24"
      style={{ backgroundImage: `url("/images/brokers/cover.png")` }}
    >
      <ImageOpacity opacity={50} />
      <div className="container relative mt-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
              Building Long-Term Partnerships
            </h1>
            <p className="max-w-xl text-lg font-medium tracking-tight text-white">
              Our lending decisions are made locally, allowing us to collaborate
              closely with brokers and local professionals. We work together to
              provide tailored lending solutions that meet the unique needs of
              your clients.
            </p>
          </div>
        </div>
        <div className="mb-4 mt-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <Link
            href="#brokers-finance-solutions"
            className={buttonVariants({ className: "text-lg" })}
          >
            View our lending solutions
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default BrokersCover;
