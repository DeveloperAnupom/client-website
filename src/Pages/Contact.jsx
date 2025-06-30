import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="pt-32 w-5/6 mx-auto">
      <div>
        <Helmet>
          <title>BRAC - Contact</title>
        </Helmet>
      </div>
      <h1 className="pt-5 pb-6 border-b-4 border-[#ec008c] text-4xl text-[#ec008c] font-semibold">
        Contact Us
      </h1>
      <div className="pb-32">
        <h1 className="text-2xl text-slate-700 font-semibold pt-3">
          Headquarters
        </h1>
        <p className="font-medium text-slate-600">Mohammadpur </p>
        <p className="font-medium text-slate-600">Road No.12, House No - 6</p>
        <p className="font-medium text-slate-600">Dhaka - 1206</p>
        <h1 className="text-xl text-slate-700 font-semibold pt-3">Communications</h1>
        <p className="font-medium text-slate-600">Tel : 09638543210</p>
        <p className="font-medium text-slate-600">Mob : 01603596474</p>
        <p className="font-medium text-slate-600">E-mail : net@brac.com</p>
      </div>
    </div>
  );
};

export default Contact;
