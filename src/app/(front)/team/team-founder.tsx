import React from "react";
import Image from "next/image";

import { founderData } from "./founder-data";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function TeamFounder() {
  return (
    <MaxWidthWrapper>
      <div className="mb-2 mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="relative col-span-6 flex flex-col gap-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/team/founder.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
              alt="founder"
            />
          </div>
        </div>

        <div className="col-span-6 m-6">
          <h3 className="mb-2 text-4xl font-semibold leading-normal text-primary">
            Our Founder
          </h3>
          <h3 className="mb-4 text-xl font-bold leading-normal text-gray-500">
            Cristiano Bellavitis
          </h3>

          {founderData.cristiano.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="mb-3 flex items-start">
                <div className="me-3 mt-1.5 flex-shrink-0">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                </div>
                <div className="max-w-xl text-base font-bold text-gray-400">
                  {item}
                </div>
              </div>
              {index < founderData.cristiano.length - 1 && (
                <hr className="my-6" />
              )}
            </div>
          ))}
        </div>

        <div className="col-span-6 m-6">
          <h3 className="mb-2 text-4xl font-semibold leading-normal text-primary">
            Head of Business Development
          </h3>
          <h3 className="mb-4 text-xl font-bold leading-normal text-gray-500">
            Luke Higgins
          </h3>

          {founderData.luke.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="mb-3 flex items-start">
                <div className="me-3 mt-1.5 flex-shrink-0">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                </div>
                <div className="max-w-xl text-base font-bold text-gray-400">
                  {item}
                </div>
              </div>
              {index < founderData.luke.length - 1 && <hr className="my-6" />}
            </div>
          ))}
        </div>

        <div className="relative col-span-6 flex flex-col gap-6">
          <div className="mx-auto flex w-full max-w-lg justify-center">
            <Image
              src="/images/team/luke.jpg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "60%", height: "auto" }}
              className="rounded-lg"
              alt="head of business development"
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
