import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function HomeNewsletter() {
  return (
    <div className="bg-brand-900 pb-5 pt-0 md:pb-7">
      <SectionWrapper className="py-0 md:py-0">
        <div className="text-center">
          <SectionHeading
            align="center"
            title="Subscribe to our Newsletter"
            className="text-white"
          />

          <div className="mx-auto mt-[70px] max-w-xl">
            <form className="flex space-x-2">
              <Input
                type="email"
                name="email"
                placeholder="yourname@domain.com"
                className="border-brand-600 bg-white/95 focus-visible:ring-brand-400"
              />
              <Button
                type="submit"
                className="bg-white text-brand-900 hover:bg-white/90"
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
