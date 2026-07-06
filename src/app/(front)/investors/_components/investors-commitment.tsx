import React from "react";
import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function InvestorsCommitment() {
  return (
    <MaxWidthWrapper>
      <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mb-3 flex items-start text-center sm:px-12 md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary">
                Regional Expertise and Commitment{" "}
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                We take pride in our deep roots in the United Kingdom and
                leverage our regional knowledge and passion to support,
                regenerate, and build the future of our local communities.
                Integer Investments prioritizes the renewal and growth of
                communities in need through its lending policy. We offer
                accessible, tailored property development loan products with
                incentives for sustainable, zero-carbon developments and
                projects with high positive social impact across the UK.
              </p>
              <Link
                href="/our-mission"
                className={buttonVariants({ className: "mt-4" })}
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/investors/regional.png"
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
