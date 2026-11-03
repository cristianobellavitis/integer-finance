"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";

const destinations = [
  {
    month: "16 May – 4 June",
    name: "Sicily & the Ionian",
    image: "/images/sailing/greece/ionian.jpg",
    credit: null,
    description: (
      <>
        We set sail from Sicily&rsquo;s north coast, slip through the
        Strait of Messina and cross the Ionian Sea to <span className="font-semibold text-brand-900">Lefkada</span>. Here the water turns a
        startling turquoise beneath white cliffs. Days are spent among the
        quiet, pine-fringed islands of <span className="font-semibold text-brand-900">Meganisi</span>, Kalamos and Ithaca, before
        Kefalonia, the famous{" "}
        <span className="font-semibold text-brand-900">shipwreck cove of Navagio</span> and the Blue Caves of Zakynthos.
      </>
    ),
  },
  {
    month: "4 – 23 June",
    name: "Peloponnese & Western Cyclades",
    image: "/images/sailing/greece/peloponnese.jpg",
    credit: null,
    description: (
      <>
        Rounding the Peloponnese, we anchor off the perfect crescent of{" "}
        <span className="font-semibold text-brand-900">Voidokilia</span>, beneath the Venetian fortress of Methoni and the tower houses
        of the Mani. The medieval rock town of <span className="font-semibold text-brand-900">Monemvasia</span> marks the jump into the
        Aegean, followed by the moonscape coves of <span className="font-semibold text-brand-900">Milos</span>, chalk-white Kimolos
        and the potters&rsquo; island of <span className="font-semibold text-brand-900">Sifnos</span>, then north to Serifos and
        Kythnos.
      </>
    ),
  },
  {
    month: "23 June – 19 July",
    name: "The Cyclades",
    image: "/images/sailing/greece/cyclades.jpg",
    credit: null,
    description: (
      <>
        The heart of the voyage: the seaside chapels of Tinos, the ancient
        sanctuary of Delos, the windmills of Mykonos and the fishing harbours of <span className="font-semibold text-brand-900">Paros</span> and Antiparos. We slow down
        in the <span className="font-semibold text-brand-900">Small Cyclades</span>, some of the bluest water in Greece, and watch the sun set
        over the caldera at <span className="font-semibold text-brand-900">Santorini</span>. Then we head for the dramatic cliffs of
        Amorgos and the remote outer islands.
      </>
    ),
  },
  {
    month: "19 July – 13 August",
    name: "The Eastern Aegean & Dodecanese",
    image: "/images/sailing/greece/dodecanese.jpg",
    credit: null,
    description: (
      <>
        From <span className="font-semibold text-brand-900">Patmos</span>, the island of St John, we loop north to Ikaria&rsquo;s
        wild beaches, the fishing village of Fourni and the deserted islet
        of <span className="font-semibold text-brand-900">Samiopoula</span> off Samos. Then south through the tiny harbours of
        Agathonisi, Arki and Lipsi, the elegant bays of Leros and the
        sponge divers&rsquo; island of Kalymnos. Guests can walk into the
        sleeping volcano on <span className="font-semibold text-brand-900">Nisyros</span> before the pastel houses of{" "}
        <span className="font-semibold text-brand-900">Symi</span>.
      </>
    ),
  },
  {
    month: "13 – 20 August",
    name: "Symi to Marmaris",
    image: "/images/sailing/greece/turkey.jpg",
    credit: "Photo: Arif Sipahi · CC BY-SA 4.0",
    description: (
      <>
        The final week crosses from Symi to Turkey and follows the coast in
        one sweep: the sheltered bay of <span className="font-semibold text-brand-900">Selimiye</span>, the boatyards of{" "}
        <span className="font-semibold text-brand-900">Bozburun</span>, where gulets are still built by hand, and the
        ancient fortress at Bozukkale, before journey&rsquo;s end in the
        harbour of <span className="font-semibold text-brand-900">Marmaris</span>.
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
      className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-brand-900 shadow-sm transition-colors hover:border-primary hover:bg-brand-900 hover:text-white md:flex md:-translate-x-5"
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
      className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-brand-900 shadow-sm transition-colors hover:border-primary hover:bg-brand-900 hover:text-white md:flex md:translate-x-5"
    >
      <ChevronRight className="h-5 w-5" />
    </button>
  );
}

export default function SailingDestinations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

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
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/10 to-transparent" />

                      {item.credit && (
                        <p className="absolute right-3 top-3 rounded bg-black/40 px-2 py-0.5 text-xs text-white/90">
                          {item.credit}
                        </p>
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
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
