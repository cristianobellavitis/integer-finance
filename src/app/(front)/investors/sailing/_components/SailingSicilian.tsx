import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function SailingSicilian() {
  return (
    <MaxWidthWrapper>
      <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/sailing/sicilian.jpeg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>

        <div className="col-span-6">
          <div className="mb-3 flex items-start text-center sm:px-12 md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary">
                <span className="text-gray-500">August </span>
                Sicilian Islands
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                The summer crescendos in
                <span className="font-extrabold"> Sicily’s island jewels</span>,
                where history, geology, and culture blend in ways found nowhere
                else. The
                <span className="font-extrabold"> Aeolian Islands </span>
                rise dramatically from the sea:
                <span className="font-extrabold">
                  {" "}
                  Stromboli’s active volcano{" "}
                </span>
                sends glowing eruptions skyward, while
                <span className="font-extrabold"> Panarea </span>
                offers chic, whitewashed charm. Guests can swim in natural
                thermal pools on{" "}
                <span className="font-extrabold"> Vulcano </span>, or sip
                Malvasia wine among the vineyards of{" "}
                <span className="font-extrabold"> Salina </span>. For those
                seeking something wilder, the
                <span className="font-extrabold"> Egadi Islands </span>
                near Trapani boast unspoiled bays and crystalline waters perfect
                for quiet anchorages. Sailing these islands is not just about
                beauty—it’s about experiencing the living energy of the
                Mediterranean, where each harbor has its own story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
