import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function HomeNewsletter() {
  return (
    <div
      className="relative items-center overflow-hidden bg-cover bg-center pb-20 pt-10 md:pb-28 md:pt-14"
      style={{ backgroundImage: 'url("/images/home/newsletter.png")' }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <div className="container relative">
        <div className="grid grid-cols-1 text-center">
          <h4 className="mb-5 font-heading text-4xl font-bold capitalize leading-normal tracking-wide text-primary lg:text-5xl lg:leading-normal">
            SUBSCRIBE TO OUR NEWSLETTER
          </h4>

          <div className="subscribe-form mb-3 mt-6 items-center">
            <form className="mx-auto max-w-xl">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="yourname@domain.com"
                />
                <Button type="submit">Subscribe Now</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
