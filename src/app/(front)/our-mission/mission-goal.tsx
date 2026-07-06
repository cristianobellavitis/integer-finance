import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function MissionGoal() {
  return (
    <MaxWidthWrapper>
      <div className="my-24 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/mission/goal.png"
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
              <h2 className="text-4xl font-bold text-primary">Our Goal</h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                Since our inception, our goal has been to become the preferred
                lender for property and regional regeneration. We want to be the
                financial partner for those developers who are able to dream of
                a better future. We are dedicated to offering tailored lending
                solutions that stimulate economic growth and support communities
                in greatest need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
