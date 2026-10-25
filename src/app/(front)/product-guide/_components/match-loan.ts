// Picks the range (Core or Plus) for a deal in the "Find your loan" tool.
// Limits come from PRODUCT_MATRIX; this file only decides which row and
// which range apply. Indicative only - every loan is still underwritten.

import { PRODUCT_MATRIX, type ProductRow } from "@/constants/products";

export type PropertyType = "residential" | "semi-commercial" | "commercial";
export type Project = "purchase" | "light" | "heavy" | "new-build" | "land";

export const PROPERTY_TYPES: { value: PropertyType; label: string }[] = [
  { value: "residential", label: "Residential" },
  { value: "semi-commercial", label: "Semi-commercial" },
  { value: "commercial", label: "Commercial" },
];

export const PROJECTS: { value: Project; label: string }[] = [
  { value: "purchase", label: "Purchase or refinance" },
  { value: "light", label: "Light refurbishment" },
  { value: "heavy", label: "Heavy refurbishment or conversion" },
  { value: "new-build", label: "New build" },
  { value: "land", label: "Land with planning" },
];

// Loan-size slider stops, closer together at the small end.
export const LOAN_STOPS = [
  50_000, 75_000, 100_000, 150_000, 200_000, 250_000, 300_000, 350_000, 400_000,
  500_000, 750_000, 1_000_000, 1_500_000, 2_000_000, 2_500_000, 3_000_000,
];

export const CORE_MAX_LOAN = 350_000;
const CORE_MAX_TERM_MONTHS = 18;
const PLUS_MIN_COMMERCIAL_LOAN = 100_000;

const ROW_FOR: Record<Project, Record<PropertyType, string>> = {
  purchase: {
    residential: "Residential",
    "semi-commercial": "Semi-commercial",
    commercial: "Commercial",
  },
  light: {
    residential: "Light refurbishment",
    "semi-commercial": "Commercial refurbishment",
    commercial: "Commercial refurbishment",
  },
  heavy: {
    residential: "Heavy refurbishment",
    "semi-commercial": "Commercial refurbishment",
    commercial: "Commercial refurbishment",
  },
  "new-build": {
    residential: "Ground-up development",
    "semi-commercial": "Ground-up development",
    commercial: "Ground-up development",
  },
  land: {
    residential: "Land with planning permission",
    "semi-commercial": "Land with planning permission",
    commercial: "Land with planning permission",
  },
};

const findRow = (product: string): ProductRow => {
  for (const group of PRODUCT_MATRIX) {
    const row = group.rows.find((r) => r.product === product);
    if (row) return row;
  }
  throw new Error(`No product row named "${product}"`);
};

export interface LoanMatch {
  outcome: "core" | "plus" | "review" | "talk";
  product: string;
  limit?: string;
  note?: string;
  reason: string;
}

export const formatLoan = (amount: number) =>
  amount >= 1_000_000
    ? `£${amount / 1_000_000}m`
    : `£${Math.round(amount / 1000)}k`;

export function matchLoan(
  propertyType: PropertyType,
  project: Project,
  loanAmount: number,
  longTerm: boolean,
): LoanMatch {
  const row = findRow(ROW_FOR[project][propertyType]);
  const product = row.product;

  if (row.core.status === "review" || row.plus.status === "review") {
    return {
      outcome: "review",
      product,
      reason:
        "We consider these deals case by case. Send us the details and we'll tell you what we can do.",
    };
  }

  const coreFits =
    row.core.status === "offered" && loanAmount <= CORE_MAX_LOAN && !longTerm;
  if (coreFits) {
    return {
      outcome: "core",
      product,
      limit: row.core.limit,
      note: row.core.note,
      reason: `Within our Core range: loans up to ${formatLoan(CORE_MAX_LOAN)} and terms up to ${CORE_MAX_TERM_MONTHS} months.`,
    };
  }

  const plusFits =
    row.plus.status === "offered" &&
    !(propertyType === "commercial" && loanAmount < PLUS_MIN_COMMERCIAL_LOAN);
  if (plusFits) {
    return {
      outcome: "plus",
      product,
      limit: row.plus.limit,
      note: row.plus.note,
      reason:
        loanAmount > CORE_MAX_LOAN
          ? `Above the Core limit of ${formatLoan(CORE_MAX_LOAN)}, so this sits in the Plus range, coming soon.`
          : `A term over ${CORE_MAX_TERM_MONTHS} months is outside Core, so this sits in the Plus range, coming soon.`,
    };
  }

  return {
    outcome: "talk",
    product,
    reason:
      row.plus.status === "offered"
        ? `Plus commercial loans start at ${formatLoan(PLUS_MIN_COMMERCIAL_LOAN)}. Talk to us about the options.`
        : loanAmount > CORE_MAX_LOAN
          ? `${product} above ${formatLoan(CORE_MAX_LOAN)} isn't in either range yet. Talk to us about structuring the deal.`
          : `${product} on a term over ${CORE_MAX_TERM_MONTHS} months isn't in either range yet. Talk to us about the options.`,
  };
}
