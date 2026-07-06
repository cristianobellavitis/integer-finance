import { z } from "zod";

export const financeCalculatorFormSchema = z.object({
  purchasePrice: z
    .number()
    .min(1, { message: "Purchase price must be greater than 1" }),
  renovationsCost: z
    .number()
    .min(1, { message: "Rennovations cost must be greater than 1" }),
  borrowAmount: z
    .number()
    .min(1, { message: "Borrow amount must be greater than 1" }),
  loanToValue: z
    .number()
    .min(0, {
      message:
        "Loan to value must be greater than 0%. Adjust your purchase price, renovations cost and borrow amount.",
    })
    .optional(),
  months: z
    .number()
    .min(1, { message: "Months must be greater than 1" })
    .max(12, { message: "Months must be less than 12" }),
  interestRateDurationSame: z.boolean().default(true),
  monthsDiscountedRate: z
    .number()
    .min(0, { message: "Months must be greater than 0" })
    .default(0),
  monthlyDiscountedRate: z
    .number()
    .min(0, { message: "Discounted monthly rate must be greater than 0" })
    .default(0),
  regularMonthlyRate: z
    .number()
    .min(0, { message: "Regular monthly rate must be greater than 0" }),
  applicationFee: z
    .number()
    .min(0, { message: "Application fee must be greater than 0" }),
  exitFee: z.number().min(0, { message: "Exit fee must be greater than 0" }),
  otherFee: z.number().min(0, { message: "Other fee must be greater than 0" }),
  interestRolledUp: z.boolean().default(true),
  paidInAdvance: z.boolean().default(true),
  avgCreditScoreAll: z
    .number()
    .min(100, { message: "Credit score must be greater than 100" })
    .max(999, { message: "Credit score must be less than 999" }),
  previousInteger: z.boolean().default(true),
  expRealEstate: z.boolean().default(true),
});

export interface FinanceCalculatorResult {
  totalFees: number;
  totalInterests: number;
  netAdvance: number;
  costComparison: number;
}
