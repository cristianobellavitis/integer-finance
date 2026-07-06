import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const solutionsData = [
  {
    title: "Innovative Transaction Management Software",
    desc: "Our internally developed transaction management software ensures a streamlined process for all our clients. This cutting-edge tool enhances efficiency and transparency, making every step of the lending journey seamless and hassle-free. Trust our technology-driven approach to simplify your transactions.",
  },
  {
    title: "Embracing a Paperless Future",
    desc: "We utilize digital signatures and documents, fully compliant with PG82 HMLR guidelines. Our innovative, paperless approach streamlines the process, enhances security, and boosts efficiency, ensuring seamless and quick real estate transactions.",
  },
];

export default function SolicitorsSolutions() {
  return (
    <MaxWidthWrapper className="my-12">
      <div className="grid grid-cols-1 pb-6 text-center">
        <div className="text-center">
          <h3
            className="mb-4 text-5xl font-semibold leading-normal text-primary"
            id="brokers-finance-solutions"
          >
            Technology Solutions
          </h3>
        </div>
      </div>

      <div className="mx-2 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:mx-40">
        {solutionsData.map((item, index) => (
          <div
            key={index}
            className="relative flex h-full flex-col overflow-hidden rounded-md bg-white p-6 shadow dark:bg-gray-900 dark:shadow-gray-700"
          >
            <div className="content z-1 relative mt-2 flex flex-grow flex-col">
              <h6 className="title text-2xl font-semibold text-primary">
                {item.title}
              </h6>
              <div className="mt-2 flex flex-grow items-center">
                <p className="text-lg font-semibold tracking-tight text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
