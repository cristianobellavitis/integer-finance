import React from "react";

const TICKER_TEXT =
  "CHANGE OF USE · HMO CONVERSIONS · REFURBISHMENT · SMALL DEVELOPMENT · AUCTION PURCHASE · REGIONAL LENDING · £50K–£250K · ";

export default function HomeTicker() {
  return (
    <div className="overflow-hidden border-b border-border bg-muted/40 py-3.5">
      <div className="flex w-max whitespace-nowrap motion-safe:animate-marquee motion-reduce:animate-none">
        <span className="text-xs font-medium tracking-[0.2em] text-brand-600">
          {TICKER_TEXT}
        </span>
        <span
          aria-hidden="true"
          className="text-xs font-medium tracking-[0.2em] text-brand-600"
        >
          {TICKER_TEXT}
        </span>
      </div>
    </div>
  );
}
