import * as React from "react";
import Image from "next/image";

import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { missionCarouselData } from "./mission-data";

export default function MissionCarousel() {
  return (
    <SectionWrapper className="py-8 md:py-10">
      <RevealOnScroll>
        <Carousel>
          <CarouselContent>
            {missionCarouselData.map((item, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="overflow-hidden rounded-xl border border-border">
                  <Image
                    src={item.image}
                    alt=""
                    width={500}
                    height={300}
                    className="aspect-[5/3] object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden border-brand-600 bg-white text-brand-900 hover:border-brand-900 hover:bg-brand-900 hover:text-white md:flex" />
          <CarouselNext className="hidden border-brand-600 bg-white text-brand-900 hover:border-brand-900 hover:bg-brand-900 hover:text-white md:flex" />
        </Carousel>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
