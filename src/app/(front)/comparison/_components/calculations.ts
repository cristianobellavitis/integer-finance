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
} from "@/constants/rates";

// Finds the smallest available LTV band that is >= the given percentage
// (i.e. rounds up to the nearest priced band, so 65 < ltvPercent <= 70 maps
// distinctly to the 70% band rather than being grouped with 65%), or null
// if it exceeds the maximum band offered.
function findLtvBand(ltvPercent: number): LtvBand | null {
  return LTV_BANDS.find((band) => ltvPercent <= band) ?? null;
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
  const regularMonthlyRate = band ? BASE_RATE_THOUSANDTHS[band] / 100_000 : 0;
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
