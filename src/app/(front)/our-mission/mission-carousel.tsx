import * as React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
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
    <MaxWidthWrapper className="my-12">
      <Carousel>
        <CarouselContent>
          {missionCarouselData.map((item, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <Image
                src={item.image}
                alt="Image 2"
                width={500}
                height={300}
                className="object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </MaxWidthWrapper>
  );
}
