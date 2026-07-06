import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const MissionCover = () => {
  return (
    <MaxWidthWrapper className="my-12">
      <div className="text-center">
        <h3 className="text-5xl font-semibold leading-normal text-primary">
          Building Better Futures
        </h3>
        {/* <h3 className="mb-2 text-2xl font-semibold leading-normal text-gray-400">
        Building Better Futures
      </h3> */}
        <p className="mt-4 px-0 text-center text-lg font-semibold text-gray-400 xl:px-36">
          Integer Investments is dedicated to creating better futures for
          communities across the UK, particularly those in greatest need,
          supporting real estate developers with the power to dream.
        </p>
      </div>
    </MaxWidthWrapper>
  );
};

export default MissionCover;
