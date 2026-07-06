import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function MissionCommitment() {
  return (
    <MaxWidthWrapper>
      <div className="my-24 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mb-3 flex items-start text-center sm:px-12 md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary">
                Our Commitment
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                We are committed to supporting regional growth by offering
                financial solutions that benefit both developers and the
                communities they serve. We value innovation, growth, and the
                creation of lasting value for our clients.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/mission/commitment.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
