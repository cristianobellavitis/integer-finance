"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const AMALFI_VIDEO_ID = "jxIy1g_f968";

const destinations = [
  {
    month: "May & June",
    name: "Amalfi Coast",
    image: `https://img.youtube.com/vi/${AMALFI_VIDEO_ID}/hqdefault.jpg`,
    videoId: AMALFI_VIDEO_ID,
    description: (
      <>
        Sailing the Amalfi Coast is like gliding through a living postcard.
        Pastel-colored villages cling dramatically to cliff faces,
        cascading down into the sparkling Tyrrhenian Sea. From the deck of
        the catamaran, guests will see iconic towns such as{" "}
        <span className="font-semibold text-brand-900">Positano</span> and{" "}
        <span className="font-semibold text-brand-900">Amalfi</span>, where
        narrow cobbled streets lead to hidden piazzas and artisanal shops.
        Days can be spent dropping anchor in{" "}
        <span className="font-semibold text-brand-900">
          secret coves accessible only by boat
        </span>
        , swimming in turquoise waters, and indulging in{" "}
        <span className="font-semibold text-brand-900">
          world-class cuisine
        </span>{" "}
        at seaside trattorias. With its mix of glamour and tradition, this
        leg of the journey sets the tone for a season of luxury and
        discovery.
      </>
    ),
  },
  {
    month: "July",
    name: "Sardinia",
    image: "/images/sailing/sardinia.jpeg",
    videoId: null,
    description: (
      <>
        By July, the catamaran will be gliding through the pristine waters
        of <span className="font-semibold text-brand-900">Sardinia</span>,
        an island where nature still feels untouched. The{" "}
        <span className="font-semibold text-brand-900">Costa Smeralda</span>{" "}
        is renowned for its dazzling beaches and sophisticated lifestyle,
        but beyond the polished marinas lie hidden anchorages with white
        sand and crystal waters that rival the Caribbean. Guests will
        discover uninhabited islets, snorkel in marine reserves, and enjoy
        sunsets over rugged granite cliffs. Sardinia also offers
        opportunities for those who wish to explore ashore, from the
        charming town of{" "}
        <span className="font-semibold text-brand-900">La Maddalena</span>{" "}
        to local vineyards serving distinctive Sardinian wines. Here, every
        sail is an immersion in both serenity and sophistication.
      </>
    ),
  },
  {
    month: "August",
    name: "Sicilian Islands",
    image: "/images/sailing/sicilian.jpeg",
    videoId: null,
    description: (
      <>
        The summer crescendos in{" "}
        <span className="font-semibold text-brand-900">
          Sicily&rsquo;s island jewels
        </span>
        , where history, geology, and culture blend in ways found nowhere
        else. The{" "}
        <span className="font-semibold text-brand-900">
          Aeolian Islands
        </span>{" "}
        rise dramatically from the sea:{" "}
        <span className="font-semibold text-brand-900">
          Stromboli&rsquo;s active volcano
        </span>{" "}
        sends glowing eruptions skyward, while{" "}
        <span className="font-semibold text-brand-900">Panarea</span>{" "}
        offers chic, whitewashed charm. Guests can swim in natural thermal
        pools on <span className="font-semibold text-brand-900">Vulcano</span>
        , or sip Malvasia wine among the vineyards of{" "}
        <span className="font-semibold text-brand-900">Salina</span>. For
        those seeking something wilder, the{" "}
        <span className="font-semibold text-brand-900">Egadi Islands</span>{" "}
        near Trapani boast unspoiled bays and crystalline waters perfect for
        quiet anchorages. Sailing these islands is not just about
        beauty&mdash;it&rsquo;s about experiencing the living energy of the
        Mediterranean, where each harbor has its own story.
      </>
    ),
  },
];

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous destination"
      className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-brand-900 shadow-sm transition-colors hover:border-primary hover:bg-brand-900 hover:text-white md:-translate-x-5"
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next destination"
      className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-border bg-white text-brand-900 shadow-sm transition-colors hover:border-primary hover:bg-brand-900 hover:text-white md:translate-x-5"
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  );
}

export default function SailingDestinations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [openVideoId, setOpenVideoId] = useState<string | null>(null);

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
    speed: reducedMotion ? 0 : 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "14%",
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_current: number, next: number) => setActiveIndex(next),
    customPaging: (i: number) => (
      <div
        className={cn(
          "h-2.5 w-2.5 rounded-full border-2 border-primary transition-colors",
          i === activeIndex ? "bg-primary" : "bg-transparent",
        )}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "8%",
        },
      },
    ],
  };

  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll>
        <div className="[&_.slick-slide]:px-3">
          <Slider {...settings}>
            {destinations.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={item.name}>
                  <div
                    className={cn(
                      "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-300",
                      isActive
                        ? "scale-100 opacity-100 shadow-lg"
                        : "scale-[0.94] opacity-60",
                    )}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized={item.videoId !== null}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/10 to-transparent" />

                      {item.videoId && (
                        <button
                          type="button"
                          onClick={() => setOpenVideoId(item.videoId)}
                          aria-label={`Watch the ${item.name} video`}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-brand-900 shadow-md transition-transform duration-300 group-hover:scale-110">
                            <Play className="ml-0.5 h-6 w-6 fill-current" />
                          </span>
                        </button>
                      )}

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                        <p className="text-sm font-medium uppercase tracking-wider text-brand-300">
                          {item.month}
                        </p>
                        <h3 className="font-heading text-2xl font-semibold text-white">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-grow flex-col p-6">
                      <p className="flex-grow text-base leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      {item.videoId && (
                        <button
                          type="button"
                          onClick={() => setOpenVideoId(item.videoId)}
                          className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary hover:underline"
                        >
                          <Play className="h-4 w-4 fill-current" />
                          Watch the video
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </RevealOnScroll>

      <Dialog
        open={openVideoId !== null}
        onOpenChange={(open) => !open && setOpenVideoId(null)}
      >
        <DialogContent className="max-w-3xl p-2">
          <DialogTitle className="sr-only">
            Sailing the Amalfi Coast &mdash; video
          </DialogTitle>
          {openVideoId && (
            <div className="aspect-video w-full overflow-hidden rounded-md">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${openVideoId}?si=GoFPitHNJLyMqkiy&autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}
