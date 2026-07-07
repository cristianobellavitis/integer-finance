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

// Cumulative: every adjustment below that applies is SUMMED onto the base
// rate — e.g. structural/legal (+0.125%) together with credit >950 (-0.025%)
// nets +0.100%. creditAbove950/creditBelow850 are mutually exclusive by
// construction (an average credit score falls in exactly one of the three
// brackets: >950, 850-950, or <850), so at most one of that pair is ever
// included — but anything else that also applies adds on top of it, it
// does not replace it.
export const ADJUSTMENT_THOUSANDTHS = {
  creditAbove950: -25,
  creditBelow850: 25,
  structuralLegal: 125,
  // Not part of the official adjustments list as of the latest rate review
  // (credit-score brackets + structural/legal only) — kept because the
  // homepage calculator's "Second charge" toggle is live and wired to this
  // value; removing it would silently break that control. Flag to product
  // whether second charge should be dropped entirely.
  secondCharge: 100,
};

export const LEGALS_FEE = 500;
export const LOAN_MANAGEMENT_FEE = 695;
export const LOAN_DISBURSEMENT_FEE = 295;
