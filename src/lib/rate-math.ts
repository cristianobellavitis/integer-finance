// Rounds the integer division numerator/denominator half-up, using only
// integer arithmetic (floor + exact-integer remainder comparison) so there's
// no binary floating-point representation error anywhere in the rounding
// decision — unlike `Math.round(a / b)` or `(a / b).toFixed(n)`, which can
// misround values that aren't exactly representable in base 2 (e.g. 1.025).
export function divideRoundHalfUp(numerator: number, denominator: number): number {
  const quotient = Math.floor(numerator / denominator);
  const remainder = numerator - quotient * denominator;
  return remainder * 2 >= denominator ? quotient + 1 : quotient;
}

// Formats an integer "hundredths of a percent" value (e.g. 103 -> "1.03")
// via integer truncation/modulo only — never a float division formatted with
// toFixed — so there's no way for a binary floating-point representation
// error to shift the displayed digit.
export function formatHundredthsAsPercent(hundredths: number): string {
  const negative = hundredths < 0;
  const abs = Math.abs(hundredths);
  const whole = Math.trunc(abs / 100);
  const frac = abs % 100;
  return `${negative ? "-" : ""}${whole}.${String(frac).padStart(2, "0")}`;
}
