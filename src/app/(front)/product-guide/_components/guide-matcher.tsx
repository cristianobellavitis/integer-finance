"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import {
  CORE_MAX_LOAN,
  LOAN_STOPS,
  PROJECTS,
  PROPERTY_TYPES,
  type LoanMatch,
  type Project,
  type PropertyType,
  formatLoan,
  matchLoan,
} from "./match-loan";

const CORE_SHARE =
  (LOAN_STOPS.indexOf(CORE_MAX_LOAN) / (LOAN_STOPS.length - 1)) * 100;

const OUTCOME_BADGE: Record<
  LoanMatch["outcome"],
  { label: string; className: string }
> = {
  core: {
    label: "Core range · available now",
    className: "bg-primary text-white",
  },
  plus: {
    label: "Plus range · coming soon",
    className: "bg-brand-400 text-brand-900",
  },
  review: {
    label: "Considered on review",
    className: "bg-white/15 text-white",
  },
  talk: { label: "Let's talk", className: "bg-white/15 text-white" },
};

function ChoiceGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-brand-900">{label}</p>
      <div
        role="radiogroup"
        aria-label={label}
        className="flex flex-wrap gap-2"
      >
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(option.value)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                selected
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-border bg-white text-brand-900 hover:-translate-y-0.5 hover:border-primary",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function GuideMatcher() {
  const [propertyType, setPropertyType] = useState<PropertyType>("residential");
  const [project, setProject] = useState<Project>("purchase");
  const [stopIndex, setStopIndex] = useState(LOAN_STOPS.indexOf(200_000));
  const [longTerm, setLongTerm] = useState(false);

  const loanAmount = LOAN_STOPS[stopIndex] ?? CORE_MAX_LOAN;
  const match = useMemo(
    () => matchLoan(propertyType, project, loanAmount, longTerm),
    [propertyType, project, loanAmount, longTerm],
  );
  const badge = OUTCOME_BADGE[match.outcome];
  const isQuoted = match.outcome === "core" || match.outcome === "plus";

  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <SectionHeading
            eyebrow="Find your loan"
            title="Which range fits your deal?"
            size="lg"
          />
          <p className="mb-8 mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Tell us about the deal and see the range, the maximum leverage and
            the key terms. Nothing here is shared or saved.
          </p>

          <div className="space-y-7">
            <ChoiceGroup
              label="Property type"
              options={PROPERTY_TYPES}
              value={propertyType}
              onChange={setPropertyType}
            />
            <ChoiceGroup
              label="Project"
              options={PROJECTS}
              value={project}
              onChange={setProject}
            />

            <div>
              <div className="mb-3 flex items-baseline justify-between">
                <Label className="text-sm font-medium text-brand-900">
                  Loan size
                </Label>
                <span className="font-heading text-2xl font-semibold text-brand-900">
                  {formatLoan(loanAmount)}
                </span>
              </div>
              <Slider
                min={0}
                max={LOAN_STOPS.length - 1}
                step={1}
                value={[stopIndex]}
                onValueChange={(values) => setStopIndex(values[0] ?? stopIndex)}
                aria-label="Loan size"
              />
              <div className="mt-3 flex h-1.5 overflow-hidden rounded-full">
                <div
                  className="bg-primary"
                  style={{ width: `${CORE_SHARE}%` }}
                />
                <div className="flex-1 bg-brand-900" />
              </div>
              <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                <span>Core up to {formatLoan(CORE_MAX_LOAN)}</span>
                <span>Plus {formatLoan(CORE_MAX_LOAN)} to £3m</span>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-[10px] border border-border p-4">
              <Label
                htmlFor="long-term"
                className="pr-4 text-sm font-medium text-brand-900"
              >
                Need a term longer than 18 months?
              </Label>
              <Switch
                id="long-term"
                checked={longTerm}
                onCheckedChange={setLongTerm}
              />
            </div>
          </div>
        </div>

        <div className="md:sticky md:top-20 md:self-start">
          <div
            key={`${match.outcome}-${match.product}-${match.limit}`}
            className="rounded-[10px] bg-brand-900 p-8 text-white motion-safe:animate-fade-up md:p-10"
            aria-live="polite"
          >
            <span
              className={cn(
                "inline-block rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
                badge.className,
              )}
            >
              {badge.label}
            </span>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-brand-200">
              {match.product}
            </p>
            <p className="mt-2 font-heading text-4xl font-semibold md:text-5xl">
              {isQuoted
                ? match.limit
                : match.outcome === "review"
                  ? "Case by case"
                  : "Let's talk"}
            </p>
            {match.note && (
              <p className="mt-2 text-base text-brand-200">{match.note}</p>
            )}
            <p className="mt-5 text-base leading-relaxed text-brand-100">
              {match.reason}
            </p>

            {isQuoted && (
              <dl className="mt-6 space-y-2 border-t border-white/15 pt-5 text-sm">
                {[
                  ["Loan", formatLoan(loanAmount)],
                  [
                    "Term",
                    match.outcome === "core"
                      ? "Up to 18 months"
                      : "1 to 24 months",
                  ],
                  ["Interest", "Serviced or retained"],
                  [
                    "Valuation",
                    match.outcome === "core" && propertyType === "residential"
                      ? "Desktop valuation where possible"
                      : "Independent RICS valuation",
                  ],
                ].map(([term, value]) => (
                  <div key={term} className="flex justify-between gap-4">
                    <dt className="text-brand-200">{term}</dt>
                    <dd className="text-right font-medium text-white">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            <Link
              href={
                match.outcome === "core"
                  ? "/lending/customers/loan-application"
                  : "/contact"
              }
              className={cn(
                buttonVariants({ size: "lg" }),
                "group mt-8 w-full bg-white text-brand-900 hover:bg-white/90",
              )}
            >
              {match.outcome === "core" ? "Apply for a loan" : "Talk to us"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-3 text-xs text-brand-300">
              Indicative only, subject to underwriting.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
