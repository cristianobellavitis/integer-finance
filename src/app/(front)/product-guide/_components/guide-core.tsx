import React from "react";
import { Building2, Hammer, Home, Store } from "lucide-react";

import { CORE_CRITERIA, CORE_PRODUCTS } from "@/constants/products";
import {
  ARRANGEMENT_FEE_HUNDREDTHS,
  BASE_RATE_THOUSANDTHS,
  EXIT_FEE_HUNDREDTHS,
  LEGALS_FEE,
  LOAN_DISBURSEMENT_FEE,
  LOAN_MANAGEMENT_FEE,
  LTV_BANDS,
} from "@/constants/rates";
import {
  formatHundredthsAsPercent,
  formatThousandthsAsPercent,
} from "@/lib/rate-math";
import AnimatedMeter from "@/components/common/AnimatedMeter";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";

// Icons in CORE_PRODUCTS order.
const PRODUCT_ICONS = [Home, Hammer, Store, Building2];

const OTHER_FEES = [
  {
    value: `${formatHundredthsAsPercent(EXIT_FEE_HUNDREDTHS)}%`,
    label: "Exit fee",
  },
  { value: `£${LEGALS_FEE}`, label: "Legal fee, dual representation" },
  { value: `£${LOAN_MANAGEMENT_FEE}`, label: "Loan management fee" },
  { value: `£${LOAN_DISBURSEMENT_FEE}`, label: "Disbursement fee" },
];

export default function GuideCore() {
  return (
    <SectionWrapper>
      <SectionHeading
        eyebrow="Available now"
        title="The Core range"
        size="lg"
      />
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        Four products covering the most common investor and developer needs, on
        loans from £50,000 to £350,000.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {CORE_PRODUCTS.map((product, index) => {
          const Icon = PRODUCT_ICONS[index] ?? Home;
          return (
            <RevealOnScroll key={product.title} delayMs={index * 100}>
              <div className="group flex h-full flex-col rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-brand-900">
                    {product.title}
                  </h3>
                </div>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {product.desc}
                </p>
                {product.meters.map((meter) => (
                  <AnimatedMeter
                    key={meter.label}
                    label={meter.label}
                    value={meter.value}
                    className="mt-4"
                  />
                ))}
                <ul className="mt-5 space-y-1.5 border-t border-border pt-4">
                  {product.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-base text-muted-foreground"
                    >
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h3 className="font-heading text-2xl font-semibold text-brand-900">
            Key criteria
          </h3>
          <dl className="mt-4">
            {CORE_CRITERIA.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[8.5rem_1fr] gap-4 border-b border-border py-3"
              >
                <dt className="font-semibold text-brand-900">{item.label}</dt>
                <dd className="text-muted-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <h3 className="font-heading text-2xl font-semibold text-brand-900">
            Residential pricing
          </h3>
          <div className="mt-4 space-y-2.5">
            {LTV_BANDS.map((band, index) => (
              <div
                key={band}
                className={
                  index === 0
                    ? "grid grid-cols-[4.5rem_1fr_auto] items-center gap-3 rounded-xl bg-brand-900 p-4 text-white transition-transform duration-200 hover:translate-x-1"
                    : "grid grid-cols-[4.5rem_1fr_auto] items-center gap-3 rounded-xl bg-surface-100 p-4 transition-transform duration-200 hover:translate-x-1"
                }
              >
                <p className="font-heading text-xl font-semibold">
                  {band}%
                  <span className="block text-[11px] font-medium uppercase tracking-wider opacity-70">
                    LTV
                  </span>
                </p>
                <p
                  className={
                    index === 0
                      ? "font-heading text-2xl font-semibold text-brand-300"
                      : "font-heading text-2xl font-semibold text-primary"
                  }
                >
                  {formatThousandthsAsPercent(BASE_RATE_THOUSANDTHS[band])}%
                  <span className="ml-1 text-sm font-normal opacity-70">
                    pm
                  </span>
                </p>
                <p className="text-right text-sm">
                  <span className="block font-semibold">
                    {formatHundredthsAsPercent(
                      ARRANGEMENT_FEE_HUNDREDTHS[band],
                    )}
                    %
                  </span>
                  <span className="opacity-70">arrangement</span>
                </p>
              </div>
            ))}
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-2.5">
            {OTHER_FEES.map((fee) => (
              <div
                key={fee.label}
                className="flex flex-col-reverse justify-end rounded-xl border border-border p-4"
              >
                <dt className="text-sm text-muted-foreground">{fee.label}</dt>
                <dd className="font-heading text-xl font-semibold text-brand-900">
                  {fee.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Indicative rates for residential loans. Final pricing reflects the
            borrower&apos;s credit profile and the complexity of the project.
            Semi-commercial and commercial loans are priced on application.
            Valuation and the borrower&apos;s own legal costs are paid at cost.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
