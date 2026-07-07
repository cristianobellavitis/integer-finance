"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import BlueprintGraphic, {
  type BlueprintVariant,
} from "@/components/common/BlueprintGraphic";
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
    customPaging: () => <div className="h-3 w-3 rounded-full bg-white" />,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
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
      <div className="relative mt-24">
        <Slider {...settings}>
          {focusCarouselData.map((item, index) => {
            const variant = VARIANTS[index % VARIANTS.length];
            return (
              <div key={index} className="relative">
                <div className="relative overflow-hidden rounded-lg bg-brand-900 [clip-path:polygon(0_0,100%_0,100%_100%,0_95%)]">
                  <div className="h-0 pb-[62%] md:pb-[46%]" />

                  <div className="absolute inset-0 flex items-center gap-6 p-8 lg:gap-10 lg:p-12">
                    <div className="w-full text-left md:w-1/2">
                      <h3 className="font-heading text-2xl font-semibold text-white sm:text-4xl lg:text-5xl">
                        {item.title}
                      </h3>
                      <div className="mt-5 h-[3px] w-14 bg-primary" />
                    </div>

                    <BlueprintGraphic
                      variant={variant}
                      onDark
                      svgClassName="h-[85%] w-[85%]"
                      className="hidden h-full w-1/2 shrink-0 md:flex"
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
