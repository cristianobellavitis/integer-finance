// Single source of truth for bridging-loan rate/fee figures, for loans
// under £250,000. All three consumers (homepage calculator, /rates,
// /comparison) must read from here rather than hold their own copy — this
// module exists because those three had silently diverged.
//
// Figures below integer thousandths/hundredths-of-a-percent (e.g. 780 means
// 0.780%) rather than plain floats, so downstream arithmetic stays exact —
// see src/lib/rate-math.ts for why (binary floating point can misround
// values like 0.925 at display time).

export const LTV_BANDS = [65, 70, 75, 80, 85] as const;
export type LtvBand = (typeof LTV_BANDS)[number];

export const MAX_LTV_PERCENT = 85;
// Above this, the 85% band requires the repeat-borrower-with-good-history gate.
export const REPEAT_BORROWER_ONLY_LTV_PERCENT = 80;

export const BASE_RATE_THOUSANDTHS: Record<LtvBand, number> = {
  65: 780,
  70: 820,
  75: 900,
  80: 925,
  85: 1000,
};

// Integer hundredths-of-a-percent (e.g. 225 means 2.25%).
export const ARRANGEMENT_FEE_HUNDREDTHS: Record<LtvBand, number> = {
  65: 225,
  70: 225,
  75: 235,
  80: 235,
  85: 250,
};

// Flat across every band.
export const EXIT_FEE_HUNDREDTHS = 95;

// Special case: 70% LTV where the entire facility funds renovation (not
// purchase) prices differently from the standard 70% band above.
// NOT currently wired into any consumer's calculation — none of the three
// have an unambiguous way to detect "is this loan 100% renovation-funded at
// 70% LTV" from their existing inputs, so this is recorded as data pending
// a decision on which page(s) should apply it and how the trigger is
// detected, rather than guessing at the wiring.
export const SEVENTY_PERCENT_FULL_RENOVATION = {
  band: 70 as const,
  monthlyRateThousandths: 900,
  arrangementFeeHundredths: 235,
};

// Non-cumulative: only the single most favourable of these applies.
export const ADJUSTMENT_THOUSANDTHS = {
  creditAbove950: -25,
  creditBelow850: 25,
  structuralLegal: 125,
  secondCharge: 100,
};

export const LEGALS_FEE = 500;
export const LOAN_MANAGEMENT_FEE = 695;
export const LOAN_DISBURSEMENT_FEE = 295;
