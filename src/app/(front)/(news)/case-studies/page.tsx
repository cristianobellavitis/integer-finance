import React from "react";
import Link from "next/link";
import Image from "next/image";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const caseStudiesData = [
  {
    image: "/images/home/lending.png",
    title: "case study title 1",
    desc: "description 1",
    date: "date1",
  },
  {
    image: "/images/home/lending.png",
    title: "case study title 2",
    desc: "description 2",
    date: "date2",
  },
  {
    image: "/images/home/lending.png",
    title: "case study title 3",
    desc: "description 3",
    date: "date3",
  },
  {
    image: "/images/home/lending.png",
    title: "case study title 4",
    desc: "description 4",
    date: "date4",
  },
  {
    image: "/images/home/lending.png",
    title: "case study title 5",
    desc: "description 5",
    date: "date5",
  },
  {
    image: "/images/home/lending.png",
    title: "case study title 6",
    desc: "description 6",
    date: "date6",
  },
];

const Page = () => {
  return (
    <>
      <MaxWidthWrapper className="my-12">
        <div className="text-center">
          <h3 className="text-5xl font-semibold leading-normal text-primary">
            Case Studies
          </h3>
          <p className="mt-4 px-0 text-center text-lg font-semibold text-gray-400 xl:px-36">
            Stay informed with the latest updates from Integer Investments. Read
            about our latest initiatives, success stories, and insights into the
            property development and finance sectors. Our case studies highlight
            how we support regional growth and community regeneration.
          </p>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="my-12">
        <div className="grid grid-cols-1 place-items-center gap-x-3 gap-y-6 px-6 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-36">
          {caseStudiesData.map((item, index) => (
            <div
              className="w-full max-w-lg overflow-hidden rounded-lg shadow-md"
              key={index}
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-t-lg duration-500 group-hover:scale-110"
                  alt=""
                />
              </div>

              <div className="flex flex-col rounded-b-lg bg-gray-100 p-8">
                <Link href="" className="title text-sm text-gray-500">
                  {item.date}
                </Link>
                <Link
                  href=""
                  className="title text-xl font-semibold text-gray-500"
                >
                  {item.title}
                </Link>
                <Link
                  href=""
                  className="title text-lg font-semibold text-gray-500"
                >
                  {item.desc}
                </Link>

                <div className="mt-4">
                  <Link href="" className="text-lg text-primary underline">
                    Read more{" "}
                    <i className="mdi mdi-chevron-right align-middle"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
