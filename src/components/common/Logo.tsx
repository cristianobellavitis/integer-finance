import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  // "inverted" swaps the wordmark to light tones for use on dark
  // backgrounds. The bar-mark colors stay the same in both cases.
  variant?: "default" | "inverted";
  // Uniformly scales the bar-mark and wordmark (viewBox stays fixed, so this
  // just changes the rendered pixel size, keeping both crisp).
  scale?: number;
}

// Measured rendered width (px) of "INTEGER" at 13px/500/3px letter-spacing in
// the site's inherited font. Both words are pinned to this exact width via
// textLength + lengthAdjust="spacing" so INTEGER and FINANCE start and end at
// the same x-position, regardless of natural glyph-width differences.
const WORDMARK_WIDTH = 76.44;
const WORDMARK_HEIGHT = 24;
const ICON_WIDTH = 20;
const ICON_HEIGHT = 24;

const Logo = ({ className, variant = "default", scale = 1 }: LogoProps) => {
  const isInverted = variant === "inverted";
  const wordmarkFill = isInverted ? "#FFFFFF" : "#7B7D80";
  const taglineFill = isInverted ? "rgba(255,255,255,0.7)" : "#BEC0C2";

  return (
    <Link
      href="/"
      aria-label="Integer Finance"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <svg
        width={ICON_WIDTH * scale}
        height={ICON_HEIGHT * scale}
        viewBox="0 0 170 190"
        aria-hidden="true"
        className="shrink-0"
      >
        <g transform="translate(22,0) skewX(-6)">
          <rect x="0" y="42" width="20" height="32" fill="#A9BEDA" />
          <rect x="0" y="74" width="20" height="96" fill="#567FAD" />
          <rect x="32" y="0" width="22" height="80" fill="#B8CBE0" />
          <rect x="32" y="80" width="22" height="110" fill="#7B9CC6" />
          <rect x="66" y="16" width="22" height="70" fill="#AFC4DE" />
          <rect x="66" y="86" width="22" height="28" fill="#6E93BD" />
          <rect x="66" y="128" width="22" height="36" fill="#4C77A8" />
          <rect x="100" y="34" width="20" height="42" fill="#C4D3E6" />
          <rect x="100" y="76" width="20" height="100" fill="#6E93BD" />
        </g>
      </svg>
      <svg
        width={WORDMARK_WIDTH * scale}
        height={WORDMARK_HEIGHT * scale}
        viewBox={`0 0 ${WORDMARK_WIDTH} ${WORDMARK_HEIGHT}`}
        aria-hidden="true"
        className="shrink-0"
      >
        <text
          x="0"
          y="12"
          fontSize="13"
          fontWeight="500"
          letterSpacing="3"
          textLength={WORDMARK_WIDTH}
          lengthAdjust="spacing"
          fill={wordmarkFill}
        >
          INTEGER
        </text>
        <text
          x="0"
          y="22"
          fontSize="9"
          letterSpacing="4"
          textLength={WORDMARK_WIDTH}
          lengthAdjust="spacing"
          fill={taglineFill}
        >
          FINANCE
        </text>
      </svg>
    </Link>
  );
};

export default Logo;
