import type {
  FinanceCalculatorResult,
  financeCalculatorFormSchema,
} from "@/lib/form-schemas/finance-calculator";
import type { z } from "zod";
import {
  LTV_BANDS,
  type LtvBand,
  BASE_RATE_THOUSANDTHS,
  ARRANGEMENT_FEE_HUNDREDTHS,
  EXIT_FEE_HUNDREDTHS,
  ADJUSTMENT_THOUSANDTHS,
} from "@/constants/rates";

// Finds the smallest available LTV band that is >= the given percentage
// (i.e. rounds up to the nearest priced band, so 65 < ltvPercent <= 70 maps
// distinctly to the 70% band rather than being grouped with 65%), or null
// if it exceeds the maximum band offered.
function findLtvBand(ltvPercent: number): LtvBand | null {
  return LTV_BANDS.find((band) => ltvPercent <= band) ?? null;
}

// Shared rate-card adjustment, cumulative with anything else that applies
// (this page only collects an average credit score, no structural/legal
// field, so that's the only adjustment wired in here).
function getAdjustmentThousandths(avgCreditScoreAll: number): number {
  let total = 0;
  if (avgCreditScoreAll > 950) total += ADJUSTMENT_THOUSANDTHS.creditAbove950;
  if (avgCreditScoreAll < 850) total += ADJUSTMENT_THOUSANDTHS.creditBelow850;
  return total;
}

export function financeCalculationOthers(
  values: z.infer<typeof financeCalculatorFormSchema>,
): FinanceCalculatorResult {
  const applicationFee = values.applicationFee / 100;
  const exitFee = values.exitFee / 100;
  const otherFee = values.otherFee / 100;
  const monthlyDiscountedRate = values.monthlyDiscountedRate / 100;
  const regularMonthlyRate = values.regularMonthlyRate / 100;
  const monthsDiscountedRate = values.monthsDiscountedRate;

  // calcs
  const totalFees = values.borrowAmount * (applicationFee + exitFee + otherFee);

  const totalInterests =
    values.borrowAmount * monthlyDiscountedRate * monthsDiscountedRate +
    values.borrowAmount *
      regularMonthlyRate *
      (values.months - monthsDiscountedRate);

  const netAdvance = (() => {
    const { borrowAmount, interestRolledUp, paidInAdvance } = values;

    if (interestRolledUp && paidInAdvance) {
      return borrowAmount - totalInterests - totalFees;
    } else if (interestRolledUp && !paidInAdvance) {
      return borrowAmount - totalInterests;
    } else if (!interestRolledUp && paidInAdvance) {
      return borrowAmount - totalFees;
    } else {
      return borrowAmount;
    }
  })();

  const costComparison = (totalFees + totalInterests) / netAdvance;

  return {
    totalFees,
    totalInterests,
    netAdvance,
    costComparison,
  };
}

export function financeCalculationInteger(
  ltv: number,
  values: z.infer<typeof financeCalculatorFormSchema>,
): FinanceCalculatorResult {
  const band = findLtvBand(ltv);
  const monthlyDiscountedRate = 0;
  const monthsDiscountedRate = 0;
  // Thousandths-of-a-percent / 100_000 = a plain fraction (e.g. 780 -> 0.0078).
  const baseAndAdjustmentThousandths = band
    ? BASE_RATE_THOUSANDTHS[band] +
      getAdjustmentThousandths(values.avgCreditScoreAll)
    : 0;
  const regularMonthlyRate = baseAndAdjustmentThousandths / 100_000;
  // Hundredths-of-a-percent / 10_000 = a plain fraction (e.g. 225 -> 0.0225).
  const applicationFee = band ? ARRANGEMENT_FEE_HUNDREDTHS[band] / 10_000 : 0;
  const exitFee = band ? EXIT_FEE_HUNDREDTHS / 10_000 : 0;
  const otherFee = 0;

  // calcs
  const totalFees = values.borrowAmount * (applicationFee + exitFee + otherFee);

  const totalInterests =
    values.borrowAmount * monthlyDiscountedRate * monthsDiscountedRate +
    values.borrowAmount *
      regularMonthlyRate *
      (values.months - monthsDiscountedRate);

  const netAdvance = values.borrowAmount;

  const costComparison = (totalFees + totalInterests) / netAdvance;

  return {
    totalFees,
    totalInterests,
    netAdvance,
    costComparison,
  };
}
