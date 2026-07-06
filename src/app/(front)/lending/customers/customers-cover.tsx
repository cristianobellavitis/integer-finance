import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ImageOpacity from "@/components/common/ImageOpacity";

const CustomersCover = () => {
  return (
    <MaxWidthWrapper
      className="md:py-18 relative max-w-full overflow-hidden bg-cover bg-center py-12 lg:py-24"
      style={{ backgroundImage: `url("/images/lending-customers/cover.png")` }}
    >
      <ImageOpacity opacity={50} />
      <div className="container relative mt-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
              Property lending that works
            </h1>
            <p className="max-w-xl text-lg font-medium tracking-tight text-white">
              Providing accessible, customized property finance solutions. Our
              locally-made lending decisions empower developers to focus on what
              they do best!
            </p>
            <div className="mb-4 mt-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <Link href="#finance-solutions" className={buttonVariants()}>
                View our lending solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CustomersCover;
