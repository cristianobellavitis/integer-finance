"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  LOAN_MAX,
  LOAN_MIN,
  LOAN_STEP,
  RENOVATION_MAX,
  RENOVATION_MIN,
  RENOVATION_STEP,
  VALUE_MAX,
  VALUE_MIN,
  VALUE_STEP,
  computeRateQuote,
  type CreditBand,
} from "./home-rate-calculator-logic";

const currency = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

export default function HomeRateCalculator() {
  const [loanAmount, setLoanAmount] = useState(150_000);
  const [propertyValue, setPropertyValue] = useState(200_000);
  const [fundRenovation, setFundRenovation] = useState(false);
  const [renovationAmount, setRenovationAmount] = useState(50_000);
  const [retainedInterest, setRetainedInterest] = useState(false);
  const [repeatBorrower, setRepeatBorrower] = useState(false);
  const [creditBand, setCreditBand] = useState<CreditBand>("850to950");
  const [structuralLegal, setStructuralLegal] = useState(false);

  const quote = useMemo(
    () =>
      computeRateQuote({
        loanAmount,
        propertyValue,
        fundRenovation,
        renovationAmount,
        retainedInterest,
        repeatBorrower,
        creditBand,
        structuralLegal,
      }),
    [
      loanAmount,
      propertyValue,
      fundRenovation,
      renovationAmount,
      retainedInterest,
      repeatBorrower,
      creditBand,
      structuralLegal,
    ],
  );

  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <SectionHeading title="Size your deal" />
          <p className="mb-8 mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Move the sliders to match your deal and see your own indicative
            rate — nothing here is shared or saved.
          </p>

          <div className="space-y-7">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <Label className="text-sm font-medium text-brand-900">
                  Purchase loan amount
                </Label>
                <span className="font-heading text-lg font-semibold text-brand-900">
                  {currency.format(loanAmount)}
                </span>
              </div>
              <Slider
                min={LOAN_MIN}
                max={LOAN_MAX}
                step={LOAN_STEP}
                value={[loanAmount]}
                onValueChange={(values) =>
                  setLoanAmount(values[0] ?? loanAmount)
                }
                aria-label="Purchase loan amount"
              />
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <Label className="text-sm font-medium text-brand-900">
                  Purchase price
                </Label>
                <span className="font-heading text-lg font-semibold text-brand-900">
                  {currency.format(propertyValue)}
                </span>
              </div>
              <Slider
                min={VALUE_MIN}
                max={VALUE_MAX}
                step={VALUE_STEP}
                value={[propertyValue]}
                onValueChange={(values) =>
                  setPropertyValue(values[0] ?? propertyValue)
                }
                aria-label="Purchase price"
              />
            </div>

            <div className="rounded-[10px] border border-border p-4">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="fund-renovation"
                  className="pr-4 text-sm font-medium text-brand-900"
                >
                  Do you want renovations funded?
                </Label>
                <Switch
                  id="fund-renovation"
                  checked={fundRenovation}
                  onCheckedChange={setFundRenovation}
                />
              </div>

              {fundRenovation && (
                <div className="mt-5">
                  <div className="mb-3 flex items-center justify-between">
                    <Label className="text-sm font-medium text-brand-900">
                      Renovation amount
                    </Label>
                    <span className="font-heading text-lg font-semibold text-brand-900">
                      {currency.format(renovationAmount)}
                    </span>
                  </div>
                  <Slider
                    min={RENOVATION_MIN}
                    max={RENOVATION_MAX}
                    step={RENOVATION_STEP}
                    value={[renovationAmount]}
                    onValueChange={(values) =>
                      setRenovationAmount(values[0] ?? renovationAmount)
                    }
                    aria-label="Renovation amount"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between rounded-[10px] border border-border p-4">
              <Label
                htmlFor="retained-interest"
                className="pr-4 text-sm font-medium text-brand-900"
              >
                Retain interest for 12 months (deducted day one)?
              </Label>
              <Switch
                id="retained-interest"
                checked={retainedInterest}
                onCheckedChange={setRetainedInterest}
              />
            </div>

            <div className="flex items-center justify-between rounded-[10px] border border-border p-4">
              <Label
                htmlFor="repeat-borrower"
                className="pr-4 text-sm font-medium text-brand-900"
              >
                Repeat borrower with good history?
              </Label>
              <Switch
                id="repeat-borrower"
                checked={repeatBorrower}
                onCheckedChange={setRepeatBorrower}
              />
            </div>

            <div>
              <Label className="mb-2 block text-sm font-medium text-brand-900">
                Credit score band
              </Label>
              <Select
                value={creditBand}
                onValueChange={(value) => setCreditBand(value as CreditBand)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="above950">Above 950</SelectItem>
                  <SelectItem value="850to950">850–950</SelectItem>
                  <SelectItem value="below850">Below 850</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between rounded-[10px] border border-border p-4">
              <Label
                htmlFor="structural-legal"
                className="pr-4 text-sm font-medium text-brand-900"
              >
                Structural/legal development
              </Label>
              <Switch
                id="structural-legal"
                checked={structuralLegal}
                onCheckedChange={setStructuralLegal}
              />
            </div>
          </div>
        </div>

        <div className="rounded-[10px] bg-brand-900 p-8 text-white md:p-10">
          {quote.status === "over-max" ? (
            <>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400">
                Your indicative quote
              </p>
              <p className="mt-3 text-2xl font-medium text-white">
                {quote.ltvPercent}%
                <span className="ml-2 text-[11px] font-medium uppercase tracking-wider text-brand-400">
                  Loan to value
                </span>
              </p>
              <div className="mt-4 rounded-[10px] border border-white/20 bg-white/10 p-5">
                <p className="text-sm leading-relaxed text-white">
                  The loan-to-value on this deal is above our maximum. Please
                  reduce the loan amount or speak to us about restructuring.
                </p>
              </div>
            </>
          ) : quote.status === "needs-repeat-borrower" ? (
            <>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400">
                Your indicative quote
              </p>
              <p className="mt-3 text-2xl font-medium text-white">
                {quote.ltvPercent}%
                <span className="ml-2 text-[11px] font-medium uppercase tracking-wider text-brand-400">
                  Loan to value
                </span>
              </p>
              <div className="mt-4 rounded-[10px] border border-white/20 bg-white/10 p-5">
                <p className="text-sm leading-relaxed text-white">
                  80% is our maximum LTV for new borrowers. 85% is available
                  to repeat borrowers with good history.
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-400">
                Your indicative quote
              </p>
              <p className="mt-3 font-heading text-4xl font-semibold md:text-5xl">
                {quote.monthlyRatePercent}%
                <span className="text-lg font-normal text-brand-100">
                  {" "}
                  per month
                </span>
              </p>

              <div className="mt-8 space-y-5 border-t border-white/15 pt-6">
                <div>
                  <p className="font-heading text-2xl font-semibold text-white">
                    {currency.format(quote.purchaseLoanReceivedDayOne)}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-brand-400">
                    Purchase loan received day one
                  </p>
                </div>

                {fundRenovation && (
                  <div>
                    <p className="font-heading text-2xl font-semibold text-white">
                      {currency.format(quote.renovationAmount)}
                    </p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-brand-400">
                      Renovation loan
                    </p>
                  </div>
                )}

                <div>
                  <p className="font-heading text-2xl font-semibold text-white">
                    {currency.format(quote.monthlyInterestPayment)}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-brand-400">
                    Monthly interest payment
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/15 pt-6">
                <div>
                  <p className="text-2xl font-medium text-white">
                    {quote.ltvPercent}%
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-brand-400">
                    Loan to value
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-medium text-white">
                    {quote.arrangementFeePercent}%
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-brand-400">
                    Arrangement fee
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-medium text-white">
                    {quote.exitFeePercent}%
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-brand-400">
                    Exit fee
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-1.5 border-t border-white/15 pt-6 text-sm text-brand-100">
                <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-brand-400">
                  Fees deducted from day one
                </p>
                <div className="flex justify-between">
                  <span>Arrangement fee ({quote.arrangementFeePercent}%)</span>
                  <span>{currency.format(quote.arrangementFeeAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Exit fee ({quote.exitFeePercent}%)</span>
                  <span>{currency.format(quote.exitFeeAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Loan management fee</span>
                  <span>{currency.format(quote.loanManagementFee)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Loan disbursement fee</span>
                  <span>{currency.format(quote.loanDisbursementFee)}</span>
                </div>
              </div>

              {quote.usedRepeatBorrowerBand && (
                <p className="mt-6 text-xs text-brand-300">
                  Available to repeat borrowers with good history
                </p>
              )}

              <p className="mt-4 text-xs text-brand-300">
                Legals: £{quote.legalsFee} — paid separately, not deducted
                above.
              </p>

              <p className="mt-2 text-xs text-brand-300">
                Indicative only — subject to underwriting.
              </p>
            </>
          )}

          <Link
            href="/lending/customers/loan-application"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 w-full bg-white text-brand-900 hover:bg-white/90",
            )}
          >
            Apply for a loan
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
