import React from "react";

import { cn } from "@/lib/utils";

export type BlueprintVariant =
  | "floor-plan"
  | "elevation"
  | "compass"
  | "site-plan"
  | "skyline"
  | "grid";

interface BlueprintGraphicProps {
  variant?: BlueprintVariant;
  className?: string;
  // Overrides the SVG's own size relative to its container (default fills
  // 60% with generous padding, sized for the pale-panel look used on white
  // sections).
  svgClassName?: string;
  // Drops the pale-panel background/padding and lightens the stroke for use
  // directly on a dark (brand-900) backdrop instead.
  onDark?: boolean;
}

// Shared stroke styling: thin brand-blue lines, no fills, on a pale-blue
// backdrop — decorative architectural line-art, not a literal blueprint.

function FloorPlan() {
  return (
    <>
      <rect x="60" y="70" width="280" height="260" />
      <line x1="60" y1="180" x2="220" y2="180" />
      <line x1="220" y1="70" x2="220" y2="330" />
      <line x1="220" y1="250" x2="340" y2="250" />
      {/* door swings */}
      <path d="M220,180 A40,40 0 0,1 260,220" />
      <line x1="220" y1="180" x2="220" y2="220" strokeDasharray="3 4" />
      <path d="M60,250 A30,30 0 0,0 90,280" />
      <line x1="60" y1="250" x2="90" y2="250" strokeDasharray="3 4" />
      {/* dimension line */}
      <line x1="60" y1="350" x2="340" y2="350" />
      <line x1="60" y1="344" x2="60" y2="356" />
      <line x1="150" y1="344" x2="150" y2="356" />
      <line x1="220" y1="344" x2="220" y2="356" />
      <line x1="340" y1="344" x2="340" y2="356" />
    </>
  );
}

function Elevation() {
  return (
    <>
      <line x1="40" y1="330" x2="360" y2="330" />
      <path d="M80,330 L80,160 L200,90 L320,160 L320,330" />
      <rect x="100" y="200" width="30" height="40" />
      <rect x="150" y="200" width="30" height="40" />
      <rect x="100" y="260" width="30" height="40" />
      <rect x="150" y="260" width="30" height="40" />
      <rect x="230" y="200" width="30" height="40" />
      <rect x="280" y="200" width="30" height="40" />
      <rect x="230" y="260" width="30" height="40" />
      <rect x="280" y="260" width="30" height="40" />
      <rect x="185" y="270" width="30" height="60" />
      {/* dimension line */}
      <line x1="40" y1="350" x2="40" y2="90" strokeDasharray="3 4" />
    </>
  );
}

function Compass() {
  return (
    <>
      <circle cx="200" cy="200" r="120" />
      <circle cx="200" cy="200" r="88" />
      <line x1="200" y1="60" x2="200" y2="340" />
      <line x1="60" y1="200" x2="340" y2="200" />
      <path d="M185,112 L200,62 L215,112" />
      <circle cx="200" cy="200" r="4" />
    </>
  );
}

function SitePlan() {
  return (
    <>
      <rect x="60" y="80" width="90" height="70" />
      <rect x="180" y="60" width="70" height="110" />
      <rect x="270" y="100" width="80" height="60" />
      <rect x="90" y="220" width="120" height="80" />
      <line x1="40" y1="200" x2="360" y2="200" />
      <line x1="200" y1="170" x2="200" y2="320" />
      <circle cx="330" cy="250" r="12" />
      <circle cx="300" cy="272" r="9" />
      <circle cx="70" cy="320" r="10" />
    </>
  );
}

function Skyline() {
  return (
    <>
      <line x1="40" y1="340" x2="360" y2="340" />
      <rect x="60" y="200" width="40" height="140" />
      <rect x="115" y="140" width="40" height="200" />
      <rect x="170" y="180" width="40" height="160" />
      <rect x="225" y="100" width="40" height="240" />
      <rect x="280" y="220" width="40" height="120" />
      <line x1="235" y1="130" x2="245" y2="130" />
      <line x1="235" y1="160" x2="245" y2="160" />
      <line x1="235" y1="190" x2="245" y2="190" />
    </>
  );
}

function Grid() {
  return (
    <>
      <rect x="60" y="60" width="280" height="280" />
      <line x1="60" y1="150" x2="340" y2="150" />
      <line x1="60" y1="240" x2="340" y2="240" />
      <line x1="150" y1="60" x2="150" y2="340" />
      <line x1="250" y1="60" x2="250" y2="340" />
      {/* diagonal bracing */}
      <line x1="150" y1="150" x2="250" y2="240" />
      <line x1="250" y1="150" x2="150" y2="240" />
      <circle cx="150" cy="150" r="4" />
      <circle cx="250" cy="150" r="4" />
      <circle cx="150" cy="240" r="4" />
      <circle cx="250" cy="240" r="4" />
    </>
  );
}

const VARIANTS: Record<BlueprintVariant, () => JSX.Element> = {
  "floor-plan": FloorPlan,
  elevation: Elevation,
  compass: Compass,
  "site-plan": SitePlan,
  skyline: Skyline,
  grid: Grid,
};

export default function BlueprintGraphic({
  variant = "floor-plan",
  className,
  svgClassName = "h-3/5 w-3/5",
  onDark = false,
}: BlueprintGraphicProps) {
  const Drawing = VARIANTS[variant];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-[10px]",
        onDark ? "bg-transparent" : "bg-surface-200 p-10",
        className,
      )}
    >
      <svg
        viewBox="0 0 400 400"
        className={cn(svgClassName, onDark ? "stroke-brand-400" : "stroke-brand-600")}
        fill="none"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Drawing />
      </svg>
    </div>
  );
}
