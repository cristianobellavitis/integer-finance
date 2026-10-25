import React from "react";

import { PLUS_FEATURES, PLUS_PRODUCTS, PLUS_STATS } from "@/constants/products";
import CountUp from "@/components/common/CountUp";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function GuidePlus() {
  return (
    <div className="bg-brand-900">
      <SectionWrapper>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-400">
          Coming soon
        </p>
        <SectionHeading
          title="The Plus range"
          size="lg"
          className="text-white"
          ruleClassName="bg-brand-400"
        />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-200">
          For loans from £350k to £3m, and for smaller loans that fall outside
          the Core range: longer terms or higher leverage on review.
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PLUS_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse justify-end rounded-xl border-t-[3px] border-brand-400 bg-white/5 p-5 transition-colors duration-300 hover:bg-white/10"
            >
              <dt className="mt-2 text-sm text-brand-200">{stat.label}</dt>
              <dd className="font-heading text-3xl font-semibold text-white">
                <CountUp
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid grid-cols-1 items-center gap-4 rounded-xl bg-brand-400 p-6 sm:grid-cols-[auto_1fr] sm:gap-8">
          <p className="font-heading text-5xl font-bold text-brand-900">LTV+</p>
          <div>
            <p className="font-heading text-xl font-semibold text-brand-900">
              Higher LTVs possible upon review
            </p>
            <p className="mt-1 text-base text-brand-900/80">
              Have a strong case that needs more leverage than the standard
              limits? Talk to us. We can go further on the right deal.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {PLUS_PRODUCTS.map((product, index) => (
            <RevealOnScroll key={product.title} delayMs={index * 100}>
              <div className="h-full rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400 hover:bg-white/10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {product.title}
                  </h3>
                  <p className="text-right font-heading text-2xl font-semibold text-brand-300">
                    {product.limit}
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-brand-400">
                      {product.basis}
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-base leading-relaxed text-brand-200">
                  {product.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <h3 className="mt-10 font-heading text-xl font-semibold text-white">
          Also in the Plus range
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {PLUS_FEATURES.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-brand-100"
            >
              {feature}
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </div>
  );
}
