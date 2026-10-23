import React from "react";
import {
  CircleCheck,
  CircleEllipsis,
  CircleMinus,
  CircleX,
} from "lucide-react";

import {
  type CriteriaStatus,
  lendingCriteriaData,
  lendingKeyTerms,
  notFundedData,
} from "./home-data";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import { cn } from "@/lib/utils";

const STATUS_ICON: Record<CriteriaStatus, typeof CircleCheck> = {
  offered: CircleCheck,
  review: CircleEllipsis,
  "not-offered": CircleMinus,
};

const STATUS_CLASSNAME: Record<CriteriaStatus, string> = {
  offered: "text-brand-900",
  review: "text-primary",
  "not-offered": "text-muted-foreground",
};

export default function HomeLendingCriteria() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <SectionHeading
            eyebrow="Lending criteria"
            title="What we lend on"
            size="lg"
          />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            First-charge bridging finance for property investors and developers.
            Every loan is assessed on its own merits.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-3">
            {lendingKeyTerms.map((term) => (
              <div
                key={term.label}
                className="rounded-[10px] border border-border p-4"
              >
                <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {term.label}
                </dt>
                <dd className="mt-1 font-heading text-base font-semibold text-brand-900">
                  {term.value}
                </dd>
              </div>
            ))}
          </dl>

          <h4 className="mt-10 font-heading text-lg font-semibold text-brand-900">
            What we don&apos;t fund
          </h4>
          <ul className="mt-4 space-y-2">
            {notFundedData.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-base text-muted-foreground"
              >
                <CircleX className="mt-1 h-4 w-4 flex-shrink-0 text-brand-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-7">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                <th className="pb-3 font-medium">Product</th>
                <th className="pb-3 font-medium">Maximum</th>
              </tr>
            </thead>
            {lendingCriteriaData.map((group) => (
              <tbody key={group.group}>
                <tr>
                  <th
                    colSpan={2}
                    className="border-b-2 border-brand-200 pb-2 pt-6 text-xs font-semibold uppercase tracking-wider text-primary"
                  >
                    {group.group}
                  </th>
                </tr>
                {group.rows.map((row) => {
                  const Icon = STATUS_ICON[row.status];
                  return (
                    <tr key={row.product} className="border-b border-border">
                      <td className="py-3 pr-4 align-top">
                        <p className="font-medium text-brand-900">
                          {row.product}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {row.detail}
                        </p>
                      </td>
                      <td className="py-3 align-top">
                        <span
                          className={cn(
                            "inline-flex items-start gap-2 font-semibold",
                            STATUS_CLASSNAME[row.status],
                          )}
                        >
                          <Icon className="mt-0.5 h-4 w-4 flex-shrink-0" />
                          {row.limit}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </SectionWrapper>
  );
}
