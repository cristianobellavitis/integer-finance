import React from "react";
import { Posts } from "../posts";
import { ReFetch } from "@/components/re-fetch";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Page = async () => {
  return (
    <>
      <ReFetch ms={900000} />

      <MaxWidthWrapper className="my-12">
        <div className="text-center">
          <h3 className="text-5xl font-semibold leading-normal text-primary">
            News
          </h3>
          <p className="mt-4 px-0 text-center text-lg font-semibold text-gray-400 xl:px-36">
            Stay informed with the latest updates from Integer Investments. Read
            about our latest initiatives, success stories, and insights into the
            property development and finance sectors. Our case studies highlight
            how we support regional growth and community regeneration.
          </p>
        </div>
      </MaxWidthWrapper>

      <Posts />
    </>
  );
};

export default Page;
