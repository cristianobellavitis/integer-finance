import type {
  FinanceCalculatorResult,
  financeCalculatorFormSchema,
} from "@/lib/form-schemas/finance-calculator";
import type { z } from "zod";

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
  const ltvAdjusted = ltv / 100;
  const monthlyDiscountedRate = 0;
  const monthsDiscountedRate = 0;
  const regularMonthlyRate = (() => {
    if (ltvAdjusted <= 0.7) {
      return 0.0092;
    } else if (ltvAdjusted <= 0.75) {
      return 0.01;
    } else if (ltvAdjusted <= 0.8) {
      return 0.01025;
    } else if (ltvAdjusted <= 0.85) {
      return 0.01038;
    } else {
      return 0;
    }
  })();
  const applicationFee = (() => {
    if (ltvAdjusted <= 0.7) {
      return 0.0195;
    } else if (ltvAdjusted <= 0.75) {
      return 0.0195;
    } else if (ltvAdjusted <= 0.8) {
      return 0.0195;
    } else if (ltvAdjusted <= 0.85) {
      return 0.025;
    } else {
      return 0;
    }
  })();
  const exitFee = (() => {
    if (ltvAdjusted <= 0.7) {
      return 0.0095;
    } else if (ltvAdjusted <= 0.75) {
      return 0.0095;
    } else if (ltvAdjusted <= 0.8) {
      return 0.0095;
    } else if (ltvAdjusted <= 0.85) {
      return 0.0095;
    } else {
      return 0;
    }
  })();
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
