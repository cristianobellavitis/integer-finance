// Internal pricing logic for the homepage rate calculator. Nothing here is
// rendered as a table or list — only the single computed quote for the
// visitor's own inputs is ever displayed.
//
// Rate/fee figures come from src/constants/rates.ts, the single shared
// source of truth also used by /rates and /comparison — do not hardcode
// figures here again.

import {
  LTV_BANDS,
  type LtvBand,
  MAX_LTV_PERCENT,
  REPEAT_BORROWER_ONLY_LTV_PERCENT,
  BASE_RATE_THOUSANDTHS,
  ARRANGEMENT_FEE_HUNDREDTHS,
  EXIT_FEE_HUNDREDTHS,
  ADJUSTMENT_THOUSANDTHS,
  LEGALS_FEE,
  LOAN_MANAGEMENT_FEE,
  LOAN_DISBURSEMENT_FEE,
} from "@/constants/rates";
import { divideRoundHalfUp, formatHundredthsAsPercent } from "@/lib/rate-math";

export const LOAN_MIN = 50_000;
export const LOAN_MAX = 250_000;
export const LOAN_STEP = 5_000;

export const VALUE_MIN = 80_000;
export const VALUE_MAX = 600_000;
export const VALUE_STEP = 10_000;

export const RENOVATION_MIN = 0;
export const RENOVATION_MAX = 150_000;
export const RENOVATION_STEP = 5_000;

export type CreditBand = "above950" | "850to950" | "below850";

export interface RateCalculatorInputs {
  loanAmount: number;
  propertyValue: number;
  fundRenovation: boolean;
  renovationAmount: number;
  repeatBorrower: boolean;
  creditBand: CreditBand;
  structuralLegal: boolean;
  secondCharge: boolean;
  retainedInterest: boolean;
}

type LtvStatus =
  | { kind: "ok"; band: LtvBand; ltvPercent: number }
  | { kind: "over-max"; ltvPercent: number }
  | { kind: "needs-repeat-borrower"; ltvPercent: number };

// LTV is computed against the PURCHASE LOAN ONLY — renovation funding never
// enters this ratio (it still adds to the total facility and the interest
// calculation elsewhere, just not here). The returned ltvPercent is always
// the true ratio, rounded to a whole percent; it is never silently swapped
// for a lower/gated band, so the UI can always show the real LTV regardless
// of which pricing outcome it produces.
function computeLtvStatus(
  loanAmount: number,
  propertyValue: number,
  repeatBorrower: boolean,
): LtvStatus {
  const ltvPercent = divideRoundHalfUp(loanAmount * 100, propertyValue);

  if (ltvPercent > MAX_LTV_PERCENT) {
    return { kind: "over-max", ltvPercent };
  }

  if (ltvPercent > REPEAT_BORROWER_ONLY_LTV_PERCENT) {
    // Only the 85% band lives above 80%, and it's gated behind the toggle.
    if (!repeatBorrower) {
      return { kind: "needs-repeat-borrower", ltvPercent };
    }
    return { kind: "ok", band: 85, ltvPercent };
  }

  // ltvPercent <= 80: map up to the nearest of 65/70/75/80.
  const band =
    LTV_BANDS.find(
      (b) => ltvPercent <= b && b <= REPEAT_BORROWER_ONLY_LTV_PERCENT,
    ) ?? REPEAT_BORROWER_ONLY_LTV_PERCENT;

  return { kind: "ok", band, ltvPercent };
}

// Adjustments are NOT cumulative — only the single most favourable one
// (lowest resulting rate) applies, matching the business rule exactly.
function getSelectedAdjustmentThousandths(inputs: RateCalculatorInputs): number {
  const candidates: number[] = [];

  if (inputs.creditBand === "above950") {
    candidates.push(ADJUSTMENT_THOUSANDTHS.creditAbove950);
  }
  if (inputs.creditBand === "below850") {
    candidates.push(ADJUSTMENT_THOUSANDTHS.creditBelow850);
  }
  if (inputs.structuralLegal) {
    candidates.push(ADJUSTMENT_THOUSANDTHS.structuralLegal);
  }
  if (inputs.secondCharge) {
    candidates.push(ADJUSTMENT_THOUSANDTHS.secondCharge);
  }

  if (candidates.length === 0) return 0;
  return Math.min(...candidates);
}

export interface RateQuoteOk {
  status: "ok";
  ltvPercent: number;
  band: LtvBand;
  monthlyRatePercent: string;
  arrangementFeePercent: string;
  arrangementFeeAmount: number;
  exitFeePercent: string;
  exitFeeAmount: number;
  loanManagementFee: number;
  loanDisbursementFee: number;
  totalLoanAmount: number;
  renovationAmount: number;
  purchaseLoanReceivedDayOne: number;
  monthlyInterestPayment: number;
  legalsFee: number;
  usedRepeatBorrowerBand: boolean;
}

export interface RateQuoteOverMax {
  status: "over-max";
  ltvPercent: number;
}

export interface RateQuoteNeedsRepeatBorrower {
  status: "needs-repeat-borrower";
  ltvPercent: number;
}

export type RateQuote =
  | RateQuoteOk
  | RateQuoteOverMax
  | RateQuoteNeedsRepeatBorrower;

export function computeRateQuote(inputs: RateCalculatorInputs): RateQuote {
  // LTV uses the purchase loan only — renovation is excluded from this ratio.
  const ltvStatus = computeLtvStatus(
    inputs.loanAmount,
    inputs.propertyValue,
    inputs.repeatBorrower,
  );

  if (ltvStatus.kind === "over-max") {
    return { status: "over-max", ltvPercent: ltvStatus.ltvPercent };
  }
  if (ltvStatus.kind === "needs-repeat-borrower") {
    return {
      status: "needs-repeat-borrower",
      ltvPercent: ltvStatus.ltvPercent,
    };
  }

  const { band, ltvPercent } = ltvStatus;

  // Renovation still adds to the total facility and the interest/fee
  // calculations — it's just excluded from the LTV ratio above.
  const renovationAmount = inputs.fundRenovation ? inputs.renovationAmount : 0;
  const totalLoanAmount = inputs.loanAmount + renovationAmount;

  const baseThousandths = BASE_RATE_THOUSANDTHS[band];
  const adjustmentThousandths = getSelectedAdjustmentThousandths(inputs);
  const totalThousandths = baseThousandths + adjustmentThousandths;
  // Round from thousandths to hundredths-of-a-percent (i.e. to 2 display
  // decimals) using integer-safe half-up rounding. The £ figures below are
  // deliberately derived from this same rounded rate, so the displayed rate
  // and the displayed £ amounts are always mutually consistent.
  const totalHundredths = divideRoundHalfUp(totalThousandths, 10);

  const arrangementFeeHundredths = ARRANGEMENT_FEE_HUNDREDTHS[band];
  const arrangementFeeAmount = divideRoundHalfUp(
    totalLoanAmount * arrangementFeeHundredths,
    10_000,
  );
  const exitFeeAmount = divideRoundHalfUp(
    totalLoanAmount * EXIT_FEE_HUNDREDTHS,
    10_000,
  );

  const monthlyInterestOnTotalLoan = divideRoundHalfUp(
    totalLoanAmount * totalHundredths,
    10_000,
  );
  const retainedInterestTwelveMonths = divideRoundHalfUp(
    totalLoanAmount * totalHundredths * 12,
    10_000,
  );

  const dayOneDeductions =
    arrangementFeeAmount +
    exitFeeAmount +
    LOAN_MANAGEMENT_FEE +
    LOAN_DISBURSEMENT_FEE +
    (inputs.retainedInterest ? retainedInterestTwelveMonths : 0);

  const purchaseLoanReceivedDayOne = inputs.loanAmount - dayOneDeductions;
  const monthlyInterestPayment = inputs.retainedInterest
    ? 0
    : monthlyInterestOnTotalLoan;

  return {
    status: "ok",
    ltvPercent,
    band,
    monthlyRatePercent: formatHundredthsAsPercent(totalHundredths),
    arrangementFeePercent: formatHundredthsAsPercent(arrangementFeeHundredths),
    arrangementFeeAmount,
    exitFeePercent: formatHundredthsAsPercent(EXIT_FEE_HUNDREDTHS),
    exitFeeAmount,
    loanManagementFee: LOAN_MANAGEMENT_FEE,
    loanDisbursementFee: LOAN_DISBURSEMENT_FEE,
    totalLoanAmount,
    renovationAmount,
    purchaseLoanReceivedDayOne,
    monthlyInterestPayment,
    legalsFee: LEGALS_FEE,
    usedRepeatBorrowerBand: band === 85,
  };
}
