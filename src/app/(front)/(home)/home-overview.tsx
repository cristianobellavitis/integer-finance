import React from "react";

import { overviewData } from "./home-data";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BlueprintGraphic from "@/components/common/BlueprintGraphic";

export default function HomeOverview() {
  return (
    <MaxWidthWrapper className="py-20 md:py-28">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <BlueprintGraphic
            variant="grid"
            className="aspect-square w-full"
          />
        </div>

        <div className="md:col-span-7">
          <h6 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Industry Overview
          </h6>
          <h3 className="font-heading text-3xl font-semibold leading-normal text-brand-900 md:text-4xl">
            Addressing a Critical Need
          </h3>
          <div className="mb-8 mt-5 h-[3px] w-14 bg-primary" />

          {overviewData.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="mb-3 flex items-start">
                <div className="me-3 mt-1.5 flex-shrink-0">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                </div>
                <div className="max-w-xl text-muted-foreground">
                  <p className="block text-base font-bold text-brand-900">
                    {item.title}
                  </p>
                  <span className="text-lg">{item.content}</span>
                </div>
              </div>
              {index < overviewData.length - 1 && <hr className="my-6" />}
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
