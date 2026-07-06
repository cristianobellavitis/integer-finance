import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function SailingWhere() {
  return (
    <MaxWidthWrapper>
      <div className="my-16 sm:my-8">
        <div className="mt-3 text-center sm:px-12 md:text-left">
          <h2 className="text-4xl font-bold text-primary">Where We’ll Sail</h2>
          <p className="my-6 text-xl font-semibold text-gray-400">
            From{" "}
            <span className="font-extrabold">
              {" "}
              mid-May to the end of August
            </span>
            , we’ll be cruising some of the most stunning coastlines in Europe
            on a new modern Bali Catsmart catamaran.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
