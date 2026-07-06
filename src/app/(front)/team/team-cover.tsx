import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ImageOpacity from "@/components/common/ImageOpacity";

const TeamCover = () => {
  return (
    <MaxWidthWrapper
      className="relative max-w-full overflow-hidden bg-cover bg-center md:py-32"
      style={{ backgroundImage: `url("/images/team/cover.png")` }}
    >
      <ImageOpacity opacity={40} />
      <div className="container relative mt-4">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="mb-5 text-4xl font-semibold leading-normal tracking-wide text-white lg:text-5xl lg:leading-normal">
              Our Team
            </h1>
            <p className="max-w-xl text-lg font-medium tracking-tight text-white">
              Meet the team of dedicated professionals behind Integer
              Investments. Our experts bring a wealth of experience and regional
              knowledge, ensuring exceptional service and support for our
              clients. Key members include our Chief Commercial Officer, Senior
              Credit Partners, and Relationship Managers.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default TeamCover;
