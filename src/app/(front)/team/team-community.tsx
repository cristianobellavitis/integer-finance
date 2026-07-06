import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function TeamCommunity() {
  return (
    <MaxWidthWrapper>
      <div className="my-20 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/team/community.png"
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
              <h2 className="text-4xl font-bold tracking-tight text-primary">
                Share Your Passion
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                Join our community of investors dedicated to driving regional
                growth. Access exclusive resources, reports, and updates to make
                informed investment decisions. Meet our board, including our
                Chair, Investor Director, and Executive Directors, who are
                committed to building better futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
