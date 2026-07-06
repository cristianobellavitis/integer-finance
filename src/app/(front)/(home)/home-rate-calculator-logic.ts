// Internal pricing logic for the homepage rate calculator. Nothing here is
// rendered as a table or list — only the single computed quote for the
// visitor's own inputs is ever displayed.

export const LOAN_MIN = 50_000;
export const LOAN_MAX = 250_000;
export const LOAN_STEP = 5_000;

export const VALUE_MIN = 80_000;
export const VALUE_MAX = 600_000;
export const VALUE_STEP = 10_000;

export const RENOVATION_MIN = 0;
export const RENOVATION_MAX = 150_000;
export const RENOVATION_STEP = 5_000;

// 90% is intentionally not offered on this public calculator.
export const LTV_BANDS = [65, 70, 75, 80, 85] as const;
export type LtvBand = (typeof LTV_BANDS)[number];
const MAX_LTV_PERCENT = 85;
const REPEAT_BORROWER_ONLY_LTV_PERCENT = 80; // above this, 85% band requires the toggle

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

// All rate figures are stored as integer thousandths-of-a-percent (e.g. 900
// means 0.900%) so every intermediate sum is exact integer arithmetic. Several
// realistic base+adjustment combinations land exactly on a X.XX5 boundary
// (e.g. 0.900 + 0.125 = 1.025), where naive float math + toFixed can misround
// due to binary floating-point representation — integer math avoids that
// entirely.
const BASE_RATE_THOUSANDTHS: Record<LtvBand, number> = {
  65: 780,
  70: 820,
  75: 900,
  80: 925,
  85: 1000,
};

// Stored as integer hundredths-of-a-percent (e.g. 225 means 2.25%).
const ARRANGEMENT_FEE_HUNDREDTHS: Record<LtvBand, number> = {
  65: 225,
  70: 225,
  75: 235,
  80: 235,
  85: 250,
};

const EXIT_FEE_HUNDREDTHS = 95;

// Fixed fees. Legals are explicitly NOT part of the day-one deduction — the
// borrower pays them separately — so it's kept out of the deducted total and
// surfaced only as its own note.
export const LEGALS_FEE = 500;
export const LOAN_MANAGEMENT_FEE = 695;
export const LOAN_DISBURSEMENT_FEE = 295;

const ADJUSTMENT_THOUSANDTHS = {
  creditAbove950: -25,
  creditBelow850: 25,
  structuralLegal: 125,
  secondCharge: 100,
};

// Rounds the integer division numerator/denominator half-up, using only
// integer arithmetic (floor + exact-integer remainder comparison) so there's
// no binary floating-point representation error anywhere in the rounding
// decision — unlike `Math.round(a / b)` or `(a / b).toFixed(n)`, which can
// misround values that aren't exactly representable in base 2 (e.g. 1.025).
function divideRoundHalfUp(numerator: number, denominator: number): number {
  const quotient = Math.floor(numerator / denominator);
  const remainder = numerator - quotient * denominator;
  return remainder * 2 >= denominator ? quotient + 1 : quotient;
}

// Formats an integer "hundredths of a percent" value (e.g. 103 -> "1.03")
// via integer truncation/modulo only — never a float division formatted with
// toFixed — so there's no way for a binary floating-point representation
// error to shift the displayed digit.
function formatHundredthsAsPercent(hundredths: number): string {
  const negative = hundredths < 0;
  const abs = Math.abs(hundredths);
  const whole = Math.trunc(abs / 100);
  const frac = abs % 100;
  return `${negative ? "-" : ""}${whole}.${String(frac).padStart(2, "0")}`;
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
  const band = (LTV_BANDS.find(
    (b) => ltvPercent <= b && b <= REPEAT_BORROWER_ONLY_LTV_PERCENT,
  ) ?? REPEAT_BORROWER_ONLY_LTV_PERCENT) as LtvBand;

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
