import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function InvestorsExecellence() {
  return (
    <MaxWidthWrapper>
      <div className="my-12 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mb-3 flex items-start text-center sm:px-12 md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary">
                Supported by Excellence{" "}
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                We take pride in building a purpose-driven financial institution
                dedicated to driving change within the property development
                ecosystem. We have secured essential capital through investments
                from high-net-worth individuals, small businesses, and banks.
                With their support, Integer Investments is well on its way to
                achieving our ambition of creating better futures and driving
                meaningful change in the communities we serve.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/investors/excellence.png"
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
