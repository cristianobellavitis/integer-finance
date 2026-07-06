import React from "react";

import { whatWeDoData } from "./home-data";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function HomeWhatWeDo() {
  return (
    <div className="bg-[#F5F7FA]">
      <MaxWidthWrapper className="py-20 md:py-28">
        <div className="mb-16 grid grid-cols-1 text-center">
          <h3 className="font-heading text-4xl font-semibold leading-normal text-brand-900 md:text-5xl">
            WHAT WE DO
          </h3>
          <div className="mx-auto mt-5 h-[3px] w-14 bg-primary" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDoData.map((item, index) => (
            <div
              key={index}
              className="group flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-md"
            >
              <item.icon className="h-6 w-6 text-primary" />

              <div className="mt-4 flex-grow">
                <h6 className="title font-heading text-lg font-semibold text-brand-900">
                  {item.title}
                </h6>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
