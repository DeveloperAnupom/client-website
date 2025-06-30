import React from "react";
import { Helmet } from "react-helmet";
import vacancy from "../Images/vacancy.png";

export default function JobWeOffer() {
  return (
    <div>
      <div>
        <Helmet>
          <title>BRAC - Job We Offer</title>
        </Helmet>
      </div>
      <div className="pt-44">
        <img src={vacancy} className="w-64 h-64 mx-auto" alt="" />
        <h1 className="pb-40 text-center text-2xl lg:text-5xl text-[#ec008c] font-semibold">
          Sorry ! No Vacancy At This Time ...
        </h1>
      </div>
    </div>
  );
}
