import React from "react";
import bracImg from "../assets/nav-logo.png";

export default function HomeAbout() {
  return (
    <div className="my-16 mb-32">
      <div className="w-auto flex justify-center pb-10">
        <img src={bracImg} alt="" />
      </div>
      <div className="lg:w-4/6 w-5/6 m-auto">
        <p className="text-slate-700 text-xl font-medium text-center">
          BRAC is a global development organization founded in Bangladesh in
          1972. <br />bd268 It's known for its work in poverty alleviation and empowerment,
          particularly focusing on women and children in marginalized
          communities. BRAC operates as a solutions ecosystem, encompassing
          social development programs, social enterprises, humanitarian
          response, a bank, and a university. It is recognized as the world's
          largest development organization
        </p>
      </div>
    </div>
  );
}
