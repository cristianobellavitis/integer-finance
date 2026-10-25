"use client";

import React, { useState } from "react";

import { KEY_TERMS, PRODUCT_MATRIX } from "@/constants/products";
import RangeCellLabel from "@/components/common/RangeCellLabel";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import { cn } from "@/lib/utils";

const COLUMN_HEAD =
  "inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white";

type View = "both" | "core" | "plus";

const VIEWS: { value: View; label: string }[] = [
  { value: "both", label: "Compare both" },
  { value: "core", label: "Core" },
  { value: "plus", label: "Plus" },
];

const GROUP_HEAD =
  "border-b-2 border-brand-200 pb-2 pt-6 text-left text-xs font-semibold uppercase tracking-wider text-primary";

export default function GuideMatrix() {
  const [view, setView] = useState<View>("both");
  const showCore = view !== "plus";
  const showPlus = view !== "core";
  const columns = 1 + Number(showCore) + Number(showPlus);

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <SectionHeading
            eyebrow="At a glance"
            title="What we lend on"
            size="lg"
          />
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            First-charge bridging finance for property investors and developers.
            Here is what we fund today, and what the Plus range will add.
          </p>
        </div>

        <div
          role="radiogroup"
          aria-label="Show range"
          className="inline-flex flex-shrink-0 self-start rounded-full bg-surface-100 p-1 md:self-end"
        >
          {VIEWS.map((option) => (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={view === option.value}
              onClick={() => setView(option.value)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                view === option.value
                  ? "bg-white text-brand-900 shadow-sm"
                  : "text-muted-foreground hover:text-brand-900",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table
          className={cn(
            "w-full border-collapse text-left",
            view === "both" && "min-w-[640px]",
          )}
        >
          <thead>
            <tr className="align-top">
              <th className="pb-3 pr-4 pt-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Product
              </th>
              {showCore && (
                <th className="w-[30%] px-3 pb-3 pt-3">
                  <span className={`${COLUMN_HEAD} bg-primary`}>
                    Core · available now
                  </span>
                  <p className="mt-2 text-sm font-normal text-muted-foreground">
                    Loans up to £350k
                  </p>
                </th>
              )}
              {showPlus && (
                <th className="w-[30%] bg-surface-100 px-3 pb-3 pt-3">
                  <span className={`${COLUMN_HEAD} bg-brand-900`}>
                    Plus · coming soon
                  </span>
                  <p className="mt-2 text-sm font-normal text-muted-foreground">
                    Mainly loans £350k to £3m
                  </p>
                </th>
              )}
            </tr>
          </thead>
          {PRODUCT_MATRIX.map((group) => (
            <tbody key={group.group}>
              <tr>
                <th colSpan={columns} className={GROUP_HEAD}>
                  {group.group}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr
                  key={row.product}
                  className="border-b border-border transition-colors duration-150 hover:bg-brand-50/40"
                >
                  <td className="py-3 pr-4 align-top">
                    <p className="font-medium text-brand-900">{row.product}</p>
                    <p className="text-sm text-muted-foreground">
                      {row.detail}
                    </p>
                  </td>
                  {showCore && (
                    <td className="px-3 py-3 align-top">
                      <RangeCellLabel cell={row.core} />
                    </td>
                  )}
                  {showPlus && (
                    <td className="bg-surface-100 px-3 py-3 align-top">
                      <RangeCellLabel cell={row.plus} />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          ))}
          <tbody>
            <tr>
              <th colSpan={columns} className={GROUP_HEAD}>
                Key terms
              </th>
            </tr>
            {KEY_TERMS.map((term) => (
              <tr key={term.label} className="border-b border-border">
                <td className="py-3 pr-4 font-medium text-brand-900">
                  {term.label}
                </td>
                {showCore && (
                  <td className="px-3 py-3 font-semibold text-brand-900">
                    {term.core}
                  </td>
                )}
                {showPlus && (
                  <td className="bg-surface-100 px-3 py-3 font-semibold text-brand-900">
                    {term.plus}
                    {term.label === "Loan size" && (
                      <p className="text-sm font-normal text-muted-foreground">
                        Smaller loans for deals outside Core
                      </p>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}
