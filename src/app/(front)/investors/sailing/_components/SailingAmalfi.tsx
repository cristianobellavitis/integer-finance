import React from "react";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function SailingAmalfi() {
  return (
    <MaxWidthWrapper>
      <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jxIy1g_f968?si=GoFPitHNJLyMqkiy"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>

        <div className="col-span-6">
          <div className="mb-3 flex items-start text-center sm:px-12 md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary">
                <span className="text-gray-500">May & June </span>
                Amalfi Coast
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                Sailing the Amalfi Coast is like gliding through a living
                postcard. Pastel-colored villages cling dramatically to cliff
                faces, cascading down into the sparkling Tyrrhenian Sea. From
                the deck of the catamaran, guests will see iconic towns such as
                <span className="font-extrabold"> Positano </span> and
                <span className="font-extrabold"> Amalfi </span>, where narrow
                cobbled streets lead to hidden piazzas and artisanal shops. Days
                can be spent dropping anchor in
                <span className="font-extrabold">
                  {" "}
                  secret coves accessible only by boat
                </span>
                , swimming in turquoise waters, and indulging in
                <span className="font-extrabold"> world-class cuisine </span>
                at seaside trattorias. With its mix of glamour and tradition,
                this leg of the journey sets the tone for a season of luxury and
                discovery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
