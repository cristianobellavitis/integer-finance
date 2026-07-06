import React from "react";

import { cn } from "@/lib/utils";

interface BarSegment {
  height: string;
  className?: string;
}

interface Bar {
  left: string;
  width: string;
  top: string;
  height: string;
  delay: string;
  segments: BarSegment[];
}

// Geometry lifted directly from the bar-mark <rect>s in Logo.tsx (viewBox
// "0 0 170 190", bars at x=0/32/66/100) so this reads as an enlarged version
// of the same mark rather than a different chart. left/width/top/height
// below are each bar's box as a % of this container; each segment's height
// is a % of that bar's own resolved height (matching the rect proportions
// exactly, including bar 3's mid-gap).
const BARS: Bar[] = [
  {
    left: "left-[0%]",
    width: "w-[16.67%]",
    top: "top-[22.11%]",
    height: "h-[67.37%]",
    delay: "motion-safe:[animation-delay:100ms]",
    segments: [
      { height: "h-[25%]", className: "bg-brand-350" },
      { height: "h-[75%]", className: "bg-brand-700" },
    ],
  },
  {
    left: "left-[26.67%]",
    width: "w-[18.33%]",
    top: "top-[0%]",
    height: "h-[100%]",
    delay: "motion-safe:[animation-delay:250ms]",
    segments: [
      { height: "h-[42.11%]", className: "bg-brand-200" },
      { height: "h-[57.89%]", className: "bg-brand-500" },
    ],
  },
  {
    left: "left-[55%]",
    width: "w-[18.33%]",
    top: "top-[8.42%]",
    height: "h-[77.89%]",
    delay: "motion-safe:[animation-delay:400ms]",
    segments: [
      { height: "h-[47.3%]", className: "bg-brand-300" },
      { height: "h-[18.92%]", className: "bg-brand-600" },
      { height: "h-[9.46%]" },
      { height: "h-[24.32%]", className: "bg-primary" },
    ],
  },
  {
    left: "left-[83.33%]",
    width: "w-[16.67%]",
    top: "top-[17.89%]",
    height: "h-[74.74%]",
    delay: "motion-safe:[animation-delay:550ms]",
    segments: [
      { height: "h-[29.58%]", className: "bg-brand-100" },
      { height: "h-[70.42%]", className: "bg-brand-600" },
    ],
  },
];

export default function HomeCoverBars() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-10 bottom-0 right-20 hidden w-[300px] lg:block"
    >
      {BARS.map((bar, index) => (
        <div
          key={index}
          className={cn(
            "absolute flex origin-bottom -skew-x-6 flex-col",
            bar.left,
            bar.width,
            bar.top,
            bar.height,
            "motion-safe:animate-bar-grow",
            bar.delay,
          )}
        >
          {bar.segments.map((segment, segmentIndex) => (
            <div
              key={segmentIndex}
              className={cn(segment.height, segment.className)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
