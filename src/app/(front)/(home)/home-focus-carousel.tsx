"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import BlueprintGraphic, {
  type BlueprintVariant,
} from "@/components/common/BlueprintGraphic";
import { cn } from "@/lib/utils";
import { focusCarouselData } from "./home-data";

// Cycled across the 5 slides so each one reads as visually distinct rather
// than repeating the same drawing. Deliberately excludes "floor-plan" (used
// by the Mission section) and "grid" (used by Overview) so no section on the
// page shows the exact same drawing as this carousel.
const VARIANTS: BlueprintVariant[] = [
  "elevation",
  "compass",
  "site-plan",
  "skyline",
];

export default function HomeFocusCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  // react-slick's slide transition is a JS-driven inline transform, not a
  // CSS class, so Tailwind's motion-safe:/motion-reduce: variants can't
  // reach it - this reads the media query directly and drops the
  // transition duration to 0 (an instant switch, not a slide) for
  // prefers-reduced-motion.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const handleChange = (event: MediaQueryListEvent) =>
      setReducedMotion(event.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    fade: false,
    speed: reducedMotion ? 0 : 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    beforeChange: (_current: number, next: number) => setActiveIndex(next),
    customPaging: (i: number) => (
      <div
        className={cn(
          "h-3 w-3 rounded-full transition-colors",
          i === activeIndex ? "bg-white" : "bg-white/40",
        )}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "18px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="max-w-full overflow-hidden bg-cover bg-center">
      <div className="relative mt-6">
        <Slider {...settings}>
          {focusCarouselData.map((item, index) => {
            const variant = VARIANTS[index % VARIANTS.length];
            const isActive = index === activeIndex;
            return (
              <div key={index} className="relative">
                <div className="relative overflow-hidden rounded-lg bg-brand-900 [clip-path:polygon(0_0,100%_0,100%_100%,0_95%)]">
                  <div className="flex flex-col gap-8 px-8 pb-16 pt-12 md:flex-row md:items-center md:gap-10 md:px-12 md:py-16 lg:gap-12 lg:px-16">
                    <div className="w-full text-left md:w-1/2">
                      <h3 className="font-heading text-2xl font-semibold text-white sm:text-4xl lg:text-5xl">
                        {item.title}
                      </h3>
                      <div className="mt-5 h-[3px] w-14 bg-primary" />
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-300 sm:text-base">
                        {item.caption}
                      </p>
                    </div>

                    <BlueprintGraphic
                      key={isActive ? `${index}-active` : index}
                      variant={variant}
                      onDark
                      svgClassName="h-[85%] w-[85%]"
                      className={cn(
                        "hidden shrink-0 md:flex md:h-64 md:w-1/2 lg:h-72",
                        isActive && "motion-safe:animate-fade-up",
                      )}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
