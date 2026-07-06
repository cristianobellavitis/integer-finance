import React from "react";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function BrokersPartnership() {
  return (
    <MaxWidthWrapper>
      <div className="mt-20 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="relative col-span-6 flex flex-col gap-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/brokers/simplify.png"
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
                Simplifying Property Lending
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                We believe in the power of collaboration. Our local experts work
                seamlessly with professional advisers to form dedicated deal
                teams. By partnering with you and your client, our Relationship
                Managers and Credit Partners personally visit development sites,
                ensuring we fulfil our commitments and create a smooth and
                efficient lending experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="col-span-6">
          <div className="mb-3 flex items-start text-center sm:px-12 md:text-left">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-primary">
                Regional Expertise and Commitment
              </h2>
              <div className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                <p>
                  Our passion for the regions we serve is evident in our team.
                  Our Credit team, actively involved in local communities,
                  visits customers and their development sites alongside our
                  Relationship Managers. This local decision-making process
                  ensures quick turnaround times and reliable delivery on our
                  promises.
                </p>
                <p>
                  We customize finance solutions to meet your clients&apos;
                  specific needs. With a team of RICS-qualified experts, we have
                  the knowledge and experience to make accessing the right
                  finance straightforward and beneficial.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/brokers/expertise.png"
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

      <div className="mt-20 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
        <div className="relative col-span-6 flex flex-col gap-6">
          <div className="mx-auto w-full max-w-lg">
            <Image
              src="/images/brokers/rewarding.png"
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
                Rewarding Collaboration
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed tracking-tight text-gray-400">
                At Integer Investments, we value our partnerships with brokers
                and third-party introducers. We offer generous commissions to
                reward your efforts and commitment. By working closely together,
                we ensure the best lending solutions for clients and build
                strong, lasting relationships. Our dedicated team supports you
                every step of the way, fostering success for all involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
