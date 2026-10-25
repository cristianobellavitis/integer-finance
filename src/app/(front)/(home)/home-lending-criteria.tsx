import React from "react";
import Link from "next/link";
import { CircleX } from "lucide-react";

import {
  CORE_KEY_TERMS,
  NOT_FUNDED,
  PRODUCT_MATRIX,
} from "@/constants/products";
import RangeCellLabel from "@/components/common/RangeCellLabel";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import { buttonVariants } from "@/components/ui/button";

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
            {CORE_KEY_TERMS.map((term) => (
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
            {NOT_FUNDED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-base text-muted-foreground"
              >
                <CircleX className="mt-1 h-4 w-4 flex-shrink-0 text-brand-300" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/product-guide"
            className={buttonVariants({ size: "lg", className: "mt-8" })}
          >
            See the full product guide
          </Link>
        </div>

        <div className="md:col-span-7">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                <th className="pb-3 font-medium">Product</th>
                <th className="pb-3 font-medium">Maximum</th>
              </tr>
            </thead>
            {PRODUCT_MATRIX.map((group) => (
              <tbody key={group.group}>
                <tr>
                  <th
                    colSpan={2}
                    className="border-b-2 border-brand-200 pb-2 pt-6 text-xs font-semibold uppercase tracking-wider text-primary"
                  >
                    {group.group}
                  </th>
                </tr>
                {group.rows.map((row) => (
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
                      <RangeCellLabel cell={row.core} />
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </SectionWrapper>
  );
}
