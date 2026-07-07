import {
  LTV_BANDS,
  type LtvBand,
  BASE_RATE_THOUSANDTHS,
  ARRANGEMENT_FEE_HUNDREDTHS,
  EXIT_FEE_HUNDREDTHS,
  ADJUSTMENT_THOUSANDTHS,
} from "@/constants/rates";

// Kept as its own name for this page's existing call sites - same set of
// values as LtvBand in the shared rate config.
export type LtvOption = LtvBand;

export interface RateTableRow {
  ltv: LtvOption;
  baseRate: number;
  arrangementFee: number;
  exitFee: number;
  brokerFee: number;
}

// Derived from the shared thousandths/hundredths figures into the plain
// decimal-percent shape this page's calculator already expects (e.g. 0.78
// meaning 0.78%).
export const baseRates: Record<LtvOption, number> = Object.fromEntries(
  LTV_BANDS.map((ltv) => [ltv, BASE_RATE_THOUSANDTHS[ltv] / 1000]),
) as Record<LtvOption, number>;

export const arrangementFees: Record<LtvOption, number> = Object.fromEntries(
  LTV_BANDS.map((ltv) => [ltv, ARRANGEMENT_FEE_HUNDREDTHS[ltv] / 100]),
) as Record<LtvOption, number>;

export const exitFees: Record<LtvOption, number> = Object.fromEntries(
  LTV_BANDS.map((ltv) => [ltv, EXIT_FEE_HUNDREDTHS / 100]),
) as Record<LtvOption, number>;

// Not part of the shared rate card (broker fees are this page's own
// concern), so kept as this file's own figures.
export const brokerFees: Record<LtvOption, number> = {
  65: 1.0,
  70: 1.0,
  75: 1.0,
  80: 1.0,
  85: 1.25,
};

export const rateTableData: RateTableRow[] = LTV_BANDS.map((ltv) => ({
  ltv,
  baseRate: baseRates[ltv],
  arrangementFee: arrangementFees[ltv],
  exitFee: exitFees[ltv],
  brokerFee: brokerFees[ltv],
}));

// `highScore`/`lowScore`/`structuralLegal`/`secondCharge` are the shared,
// non-cumulative rate-card adjustments (see src/constants/rates.ts) - only
// the single most favourable applicable one should be used, not all of
// them summed. `inexperienced`/`repeatBorrower` are this page's own
// eligibility-driven adjustments, not part of the shared rate card, and
// continue to apply on top as before.
export const adjustments = {
  inexperienced: 0.025,
  repeatBorrower: -0.025,
  highScore: ADJUSTMENT_THOUSANDTHS.creditAbove950 / 1000,
  lowScore: ADJUSTMENT_THOUSANDTHS.creditBelow850 / 1000,
  structuralLegal: ADJUSTMENT_THOUSANDTHS.structuralLegal / 1000,
  secondCharge: ADJUSTMENT_THOUSANDTHS.secondCharge / 1000,
};
