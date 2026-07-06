import React from "react";
import Link from "next/link";

import ImageOpacity from "@/components/common/ImageOpacity";
import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const BetterFutures = () => {
  return (
    <MaxWidthWrapper
      className="relative max-w-full overflow-hidden bg-cover bg-center py-8 md:py-12"
      style={{ backgroundImage: `url("/images/brokers/futures.png")` }}
    >
      <ImageOpacity opacity={40} />
      <div className="container relative text-center">
        <h3 className="text-5xl font-semibold leading-normal text-white">
          Building Better Futures
        </h3>
        <p className="mt-4 px-0 text-center text-lg font-semibold text-white xl:px-36">
          Integer Investments is dedicated to creating better futures for
          communities across the UK, particularly those in greatest need,
          supporting real estate developers with the power to dream.
        </p>
        <Link
          href="/our-mission"
          className={buttonVariants({
            className: "lg:max-w-42 mt-6 max-w-full lg:mt-12",
          })}
        >
          Find out more
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default BetterFutures;
