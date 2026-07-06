import React from "react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ImageOpacity from "@/components/common/ImageOpacity";

const SolicitorsCover = () => {
  return (
    <MaxWidthWrapper
      className="md:py-18 relative max-w-full overflow-hidden bg-cover bg-center py-12 lg:py-24"
      style={{ backgroundImage: `url("/images/solicitors/cover.png")` }}
    >
      <ImageOpacity opacity={50} />
      <div className="container relative mt-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
              Join Our Network of Approved Solicitors
            </h1>
            <p className="max-w-xl text-lg font-medium tracking-tight text-white">
              Join our panel of approved solicitors and collaborate with us to
              deliver top-notch property finance solutions. Enhance your
              practice by partnering with Integer Investments, where your
              expertise will help our clients achieve their real estate goals
              efficiently and effectively.
            </p>
          </div>
        </div>
        <div className="mb-4 mt-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <Link
            href="#solicitors-form"
            className={buttonVariants({ className: "text-lg" })}
          >
            Join our panel
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default SolicitorsCover;
