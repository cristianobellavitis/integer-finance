import React from "react";

import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";
import RevealOnScroll from "@/components/common/RevealOnScroll";
import ItineraryPlayer from "./ItineraryPlayer";
import { PHOTO_CREDITS } from "./photoCredits";

const STATS = [
  { value: "96", label: "nights aboard" },
  { value: "17", label: "legs" },
  { value: "60", label: "islands & harbours" },
  { value: "3", label: "countries" },
];

export default function SailingWhere() {
  return (
    <SectionWrapper className="pt-0">
      <RevealOnScroll>
        <SectionHeading title="Where We'll Sail" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From <span className="font-semibold text-brand-900">16 May to
          20 August</span>, our new modern Bali Catsmart catamaran will sail
          one continuous voyage from Sicily across to the Ionian Islands,
          around the Peloponnese, through the Cyclades, the eastern Aegean and the Dodecanese,
          and on to Marmaris on the Turkish coast.
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          The week-long legs have a couple of spare days built in for
          weather or simply lingering somewhere lovely. Ten shorter{" "}
          <span className="font-semibold text-brand-900">
            4&ndash;5 day getaways
          </span>{" "}
          are designed for guests who can&rsquo;t join us for longer. Each
          starts and ends on an island reached by ferry or flight from Athens
          (the Ionian one by coach and ferry via Kyllini, Symi by a short
          ferry from Rhodes), with short, easy hops in between and a spare
          night for weather.
        </p>

        <dl className="mt-8 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-heading text-3xl font-semibold text-brand-900">
                  {stat.value}
                </span>
                <span className="text-sm uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <ItineraryPlayer />
        </div>

        <details className="mt-4 text-sm text-muted-foreground">
          <summary className="cursor-pointer font-medium hover:text-brand-900">
            Photo credits
          </summary>
          <p className="mt-3">
            Photos via Wikimedia Commons and Flickr under Creative Commons
            licences or in the public domain; cropped and colour-graded.
          </p>
          <ul className="mt-3 grid gap-x-6 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {PHOTO_CREDITS.map((credit) => (
              <li key={credit.place}>
                {credit.place}:{" "}
                <a
                  href={credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-900"
                >
                  {credit.artist}
                </a>{" "}
                &middot; {credit.license}
              </li>
            ))}
          </ul>
        </details>
      </RevealOnScroll>
    </SectionWrapper>
  );
}
