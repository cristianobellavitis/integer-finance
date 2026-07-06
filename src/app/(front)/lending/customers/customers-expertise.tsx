import React from "react";

import { customersFinanceSolutionData } from "./customers-data";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function CustomersExpertise() {
  return (
    <MaxWidthWrapper className="my-12">
      <div className="grid grid-cols-1 pb-6 text-center">
        <div className="text-center">
          <h3
            className="mb-4 text-5xl font-semibold leading-normal text-primary"
            id="finance-solutions"
          >
            FINANCIAL EXPERTISE
          </h3>
        </div>
      </div>

      <div className="mx-2 mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 xl:mx-40">
        {customersFinanceSolutionData.map((item, index) => (
          <div
            key={index}
            className="relative flex h-full flex-col overflow-hidden rounded-md bg-white p-6 shadow dark:bg-gray-900 dark:shadow-gray-700"
          >
            <item.icon className="mb-1 text-primary" />

            <div className="content z-1 relative mt-2 flex-grow">
              <h6 className="title text-2xl font-semibold text-primary">
                {item.title}
              </h6>
              <p className="mt-3 text-lg font-semibold tracking-tight text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
