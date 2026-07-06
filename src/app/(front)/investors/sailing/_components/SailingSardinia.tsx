import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function SailingSardinia() {
  return (
    <MaxWidthWrapper>
      <div className="mt-12 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mb-3 flex items-start text-center sm:px-12 md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary">
                <span className="text-gray-500">July </span>
                Sardinia
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                By July, the catamaran will be gliding through the pristine
                waters of
                <span className="font-extrabold"> Sardinia</span>, an island
                where nature still feels untouched. The
                <span className="font-extrabold"> Costa Smeralda </span>
                is renowned for its dazzling beaches and sophisticated
                lifestyle, but beyond the polished marinas lie hidden anchorages
                with white sand and crystal waters that rival the Caribbean.
                Guests will discover uninhabited islets, snorkel in marine
                reserves, and enjoy sunsets over rugged granite cliffs. Sardinia
                also offers opportunities for those who wish to explore ashore,
                from the charming town of
                <span className="font-extrabold"> La Maddalena </span>
                to local vineyards serving distinctive Sardinian wines. Here,
                every sail is an immersion in both serenity and sophistication.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/sailing/sardinia.jpeg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
