import React from "react";
import type { LucideIcon } from "lucide-react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export interface FinanceSolutionItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface FinanceSolutionsGridProps {
  heading: string;
  items: FinanceSolutionItem[];
  columns: 2 | 3;
}

export default function FinanceSolutionsGrid({
  heading,
  items,
  columns,
}: FinanceSolutionsGridProps) {
  return (
    <MaxWidthWrapper className="my-12">
      <div className="grid grid-cols-1 pb-6 text-center">
        <div className="text-center">
          <h3 className="mb-4 text-5xl font-semibold leading-normal text-primary">
            {heading}
          </h3>
        </div>
      </div>

      <div
        className={
          columns === 3
            ? "mx-2 mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 xl:mx-40"
            : "mx-2 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:mx-40"
        }
      >
        {items.map((item, index) => (
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
