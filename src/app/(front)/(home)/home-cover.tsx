import React from "react";
import Link from "next/link";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HomeCoverBars from "./home-cover-bars";
import HomeCoverRotatingWord from "./home-cover-rotating-word";
import HomeCoverStatCounter from "./home-cover-stat-counter";

interface HeroStat {
  target: number;
  prefix?: string;
  suffix?: string;
  smallSuffix?: string;
  decimals?: number;
  label: string;
}

// Note: the finance pages and the rate calculator both state rates starting
// around 0.89-0.9% per month, not 0.75%. Using 0.75% as instructed, but
// flagging the mismatch.
const STATS: HeroStat[] = [
  {
    target: 0.75,
    suffix: "%",
    smallSuffix: "/mo",
    decimals: 2,
    label: "INTEREST RATES FROM",
  },
  { target: 250, prefix: "£", suffix: "k", label: "MAX LOAN SIZE" },
  { target: 85, suffix: "%", label: "MAX LTV" },
];

const HomeCover = () => {
  return (
    <div className="relative overflow-hidden bg-brand-900 [clip-path:polygon(0_0,100%_0,100%_88%,0_100%)]">
      <HomeCoverBars />

      <MaxWidthWrapper className="relative pb-8 pt-12 md:pb-10 md:pt-14">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-400 motion-safe:animate-fade-up motion-safe:[animation-delay:100ms]">
            Property development finance
          </p>

          <h1 className="mb-4 font-heading text-3xl font-medium leading-tight text-white motion-safe:animate-fade-up motion-safe:[animation-delay:250ms] md:text-4xl lg:text-5xl">
            A financial institution{" "}
            <HomeCoverRotatingWord />
          </h1>

          <p className="mb-6 max-w-lg text-base leading-relaxed text-brand-100 motion-safe:animate-fade-up motion-safe:[animation-delay:400ms]">
            Tailored short-term development loans, driven by regional
            knowledge of the ground you build on.
          </p>

          <div className="flex flex-col gap-3 motion-safe:animate-fade-up motion-safe:[animation-delay:550ms] sm:flex-row">
            <Link
              href="/lending/customers/loan-application"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-brand-900 hover:bg-white/90",
              )}
            >
              Apply for a loan
            </Link>
            <Link
              href="/lending/customers"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-brand-600 bg-transparent text-white hover:bg-white/10 hover:text-white",
              )}
            >
              Explore lending
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 motion-safe:animate-fade-up motion-safe:[animation-delay:700ms]">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-medium text-white">
                  <HomeCoverStatCounter
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                  {stat.smallSuffix && (
                    <span className="text-sm font-normal text-brand-100">
                      {stat.smallSuffix}
                    </span>
                  )}
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-brand-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomeCover;
