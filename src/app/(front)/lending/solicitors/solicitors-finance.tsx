import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function SolicitorsFinance() {
  return (
    <MaxWidthWrapper>
      <div className="mt-20 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="relative col-span-6 flex flex-col gap-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/solicitors/finance.png"
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
              <h2 className="text-4xl font-bold text-primary">
                Bridging Finance Made Simple
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                As a rapidly growing bridging lender, we leverage cutting-edge
                technology to deliver a fully digital and efficient conveyancing
                process. Our commitment to innovation ensures quick, seamless
                transactions, helping you stay ahead in the competitive property
                market. Partner with us for a streamlined, hassle-free
                experience from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
