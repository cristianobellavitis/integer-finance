export type LtvOption = 65 | 70 | 75 | 80 | 85;

export interface RateTableRow {
  ltv: LtvOption;
  baseRate: number;
  arrangementFee: number;
  exitFee: number;
  brokerFee: number;
}

export const baseRates: Record<LtvOption, number> = {
  65: 0.75,
  70: 0.92,
  75: 1.0,
  80: 1.025,
  85: 1.038,
};

export const arrangementFees: Record<LtvOption, number> = {
  65: 1.95,
  70: 1.95,
  75: 1.95,
  80: 1.95,
  85: 2.5,
};

export const exitFees: Record<LtvOption, number> = {
  65: 0.95,
  70: 0.95,
  75: 0.95,
  80: 0.95,
  85: 0.95,
};

export const brokerFees: Record<LtvOption, number> = {
  65: 1.0,
  70: 1.0,
  75: 1.0,
  80: 1.0,
  85: 1.25,
};

export const rateTableData: RateTableRow[] = (
  Object.keys(baseRates) as unknown as LtvOption[]
).map((ltv) => ({
  ltv,
  baseRate: baseRates[ltv],
  arrangementFee: arrangementFees[ltv],
  exitFee: exitFees[ltv],
  brokerFee: brokerFees[ltv],
}));

export const adjustments = {
  inexperienced: 0.025,
  repeatBorrower: -0.025,
  highScore: -0.025,
  lowScore: 0.025,
  structuralLegal: 0.125,
};
