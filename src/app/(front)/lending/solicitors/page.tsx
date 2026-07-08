import React from "react";

import SolicitorsCover from "./solicitors-cover";
import SolicitorsFinance from "./solicitors-finance";
import SolicitorsSolutions from "./solicitors-solutions";
import SolicitorsForm from "./solicitors-form";

const page = () => {
  return (
    <>
      <SolicitorsCover />

      <SolicitorsFinance />

      <SolicitorsSolutions />

      <div className="flex justify-center pb-5 md:pb-7">
        <iframe
          width={560 * 1.5}
          height={315 * 1.5}
          src="https://www.youtube.com/embed/zF9mRXLZhDY?si=LTPmKkAJmj9sO9uA"
          title="YouTube video player"
          className="rounded-xl border border-border"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <SolicitorsForm />
    </>
  );
};

export default page;
