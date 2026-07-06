import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function InvestorsSailing() {
  return (
    <MaxWidthWrapper>
      <div className="my-12 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/sailing/sailing.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "80%" }}
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div className="col-span-6">
          <div className="mb-3 flex items-start text-center sm:px-12 md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary">
                Sailing with Integer Investments
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                At Integer Investments, we value the trust and partnership of
                our investors and clients. To celebrate this journey together,
                we are delighted to invite our most dedicated partners aboard
                our newly acquired luxury catamaran for an unforgettable sailing
                experience in the Mediterranean.
              </p>
              <Link
                href="/investors/sailing"
                className={buttonVariants({
                  className:
                    "lg:max-w-42 mt-6 max-w-full items-center lg:mt-12",
                })}
              >
                Find out more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
