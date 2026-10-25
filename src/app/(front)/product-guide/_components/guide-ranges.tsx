"use client";

import React from "react";
import { CalendarDays, Lock } from "lucide-react";

import { HOW_IT_WORKS } from "@/constants/products";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import { useInView } from "@/hooks/use-in-view";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import { cn } from "@/lib/utils";

const RANGES = [
  {
    badge: "Available now",
    name: "Core range",
    desc: "Up to £350k on residential, semi-commercial and commercial, including heavy refurbishment.",
    stats: [
      { value: "£350k", label: "Max loan" },
      { value: "80%", label: "Max LTV" },
      { value: "18", label: "Months max" },
    ],
    dark: false,
  },
  {
    badge: "Coming soon",
    name: "Plus range",
    desc: "£350k to £3m, plus smaller deals Core can't do, such as longer terms.",
    stats: [
      { value: "£350k–£3m", label: "Main loan size" },
      { value: "75%+", label: "Max LTV" },
      { value: "24", label: "Months max" },
    ],
    dark: true,
  },
];

// Loan-size axis on a log scale, so £50k–£350k and £350k–£3m both read.
const MIN_LOAN = 50_000;
const MAX_LOAN = 3_000_000;
const position = (value: number) =>
  ((Math.log(value) - Math.log(MIN_LOAN)) /
    (Math.log(MAX_LOAN) - Math.log(MIN_LOAN))) *
  100;
const SPLIT = position(350_000);
const TICKS = [
  { value: 50_000, label: "£50k" },
  { value: 100_000, label: "£100k" },
  { value: 350_000, label: "£350k" },
  { value: 1_000_000, label: "£1m" },
  { value: 3_000_000, label: "£3m" },
];

const INTEREST_OPTIONS = [
  {
    icon: Lock,
    title: "Retained",
    desc: "Held back from the loan at the start, so no monthly payments.",
  },
  {
    icon: CalendarDays,
    title: "Serviced",
    desc: "Paid monthly, so more of the loan goes to the deal.",
  },
];

// Grows from the left once the loan-size chart scrolls into view.
const BAR_GROW =
  "origin-left motion-safe:transition-transform motion-safe:duration-1000 motion-safe:ease-out";

export default function GuideRanges() {
  const { ref: barsRef, inView: barsInView } = useInView<HTMLDivElement>();
  const hidden = !barsInView && "motion-safe:scale-x-0";

  return (
    <div className="bg-surface-100">
      <SectionWrapper>
        <SectionHeading
          eyebrow="How we work"
          title="Two ranges, one lender"
          size="lg"
        />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Core covers loans up to £350k today. Plus, coming soon, covers £350k
          to £3m, and smaller loans for deals outside the Core range.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {RANGES.map((range) => (
            <div
              key={range.name}
              className={cn(
                "rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md",
                range.dark
                  ? "bg-brand-900 text-white"
                  : "border border-border bg-white",
              )}
            >
              <span
                className={cn(
                  "inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
                  range.dark
                    ? "bg-brand-400 text-brand-900"
                    : "bg-primary text-white",
                )}
              >
                {range.badge}
              </span>
              <h3
                className={cn(
                  "mt-4 font-heading text-2xl font-semibold",
                  range.dark ? "text-white" : "text-brand-900",
                )}
              >
                {range.name}
              </h3>
              <p
                className={cn(
                  "mt-2 text-base leading-relaxed",
                  range.dark ? "text-brand-200" : "text-muted-foreground",
                )}
              >
                {range.desc}
              </p>
              <dl
                className={cn(
                  "mt-5 grid grid-cols-[1.6fr_1fr_1fr] gap-3 border-t pt-4",
                  range.dark ? "border-white/15" : "border-border",
                )}
              >
                {range.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse justify-end"
                  >
                    <dt
                      className={cn(
                        "text-xs",
                        range.dark ? "text-brand-300" : "text-muted-foreground",
                      )}
                    >
                      {stat.label}
                    </dt>
                    <dd
                      className={cn(
                        "whitespace-nowrap font-heading text-xl font-semibold",
                        range.dark ? "text-white" : "text-brand-900",
                      )}
                    >
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-border bg-white p-6">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Loan size
          </p>
          <div
            ref={barsRef}
            className="mt-4 grid grid-cols-[3.5rem_1fr] items-center gap-x-3 gap-y-3"
          >
            <span className="text-sm font-semibold text-brand-900">Core</span>
            <div className="relative h-5">
              <div
                className={cn(
                  "absolute inset-y-0 left-0 rounded-full bg-primary",
                  BAR_GROW,
                  hidden,
                )}
                style={{ width: `${SPLIT}%` }}
              />
            </div>
            <span className="text-sm font-semibold text-brand-900">Plus</span>
            <div className="relative h-5">
              <div
                className={cn(
                  "absolute inset-y-0 left-0 rounded-full bg-brand-200",
                  BAR_GROW,
                  hidden,
                )}
                style={{ width: `calc(${SPLIT}% - 2px)` }}
              />
              <div
                className={cn(
                  "absolute inset-y-0 right-0 rounded-full bg-brand-900 motion-safe:delay-500",
                  BAR_GROW,
                  hidden,
                )}
                style={{ left: `${SPLIT}%` }}
              />
            </div>
            <span />
            <div className="relative h-5 text-xs text-muted-foreground">
              {TICKS.map((tick) => (
                <span
                  key={tick.label}
                  className="absolute -translate-x-1/2"
                  style={{ left: `${position(tick.value)}%` }}
                >
                  {tick.label}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Lighter band: smaller Plus loans, for deals outside the Core range.
          </p>
        </div>

        <h3 className="mt-12 font-heading text-2xl font-semibold text-brand-900">
          How it works
        </h3>
        <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((step, index) => (
            <li key={step.title}>
              <RevealOnScroll delayMs={index * 150} className="group">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-lg font-semibold text-white ring-4 ring-primary/15 transition-transform duration-300 group-hover:scale-110">
                  {index + 1}
                </span>
                <p className="mt-3 font-heading text-lg font-semibold text-brand-900">
                  {step.title}
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </RevealOnScroll>
            </li>
          ))}
        </ol>

        <h3 className="mt-12 font-heading text-2xl font-semibold text-brand-900">
          Interest options
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {INTEREST_OPTIONS.map((option) => (
            <div
              key={option.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-md"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-900">
                <option.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-heading text-lg font-semibold text-brand-900">
                  {option.title}
                </p>
                <p className="text-base text-muted-foreground">{option.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
