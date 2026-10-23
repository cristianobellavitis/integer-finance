import React from "react";

const TICKER_TEXT =
  "CHANGE OF USE · HMO CONVERSIONS · REFURBISHMENT · SEMI-COMMERCIAL · AUCTION PURCHASE · ENGLAND & WALES · £50K–£350K · ";

export default function HomeTicker() {
  return (
    <div className="overflow-hidden border-b border-border bg-muted/40 py-3.5">
      <div className="flex w-max whitespace-nowrap motion-safe:animate-marquee motion-reduce:animate-none">
        <span className="text-xs font-medium tracking-[0.2em] text-brand-900">
          {TICKER_TEXT}
        </span>
        <span
          aria-hidden="true"
          className="text-xs font-medium tracking-[0.2em] text-brand-900"
        >
          {TICKER_TEXT}
        </span>
      </div>
    </div>
  );
}
