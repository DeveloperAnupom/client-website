import React from "react";
import { FaBriefcase, FaProjectDiagram, FaVest } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function JoinUs() {
  return (
    <div className="my-12 mb-28">
      <div>
        <h1 className="text-4xl text-[#ec008c] font-semibold uppercase text-center">
          Join the world's biggest family
        </h1>
      </div>
      <div className="w-5/6 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 my-16">
        {/* ___________________ */}
        <div className="flex justify-center items-center gap-5">
          <div>
            <FaProjectDiagram className="text-[#ec008c] text-5xl"></FaProjectDiagram>
          </div>
          <div>
            <p className="uppercase text-xl font-semibold text-slate-600">
              Partner With Us
            </p>
          </div>
        </div>
        {/* ________________________ */}
        <div className="flex justify-center items-center gap-5">
          <div>
            <FaBriefcase className="text-[#ec008c] text-5xl"></FaBriefcase>
          </div>
          <div>
            <p className="uppercase text-xl font-semibold text-slate-600">
              carrier
            </p>
          </div>
        </div>
        {/* ______________________________ */}
        <div className="flex justify-center items-center gap-5">
          <div>
            <FaVest className="text-[#ec008c] text-5xl"></FaVest>
          </div>
          <div>
            <p className="uppercase text-xl font-semibold text-slate-600">
              internship
            </p>
          </div>
        </div>
        {/* _____________________ */}
        <div className="flex justify-center items-center gap-5">
          <div>
            <FaLocationDot className="text-[#ec008c] text-5xl"></FaLocationDot>
          </div>
          <div>
            <p className="uppercase text-xl font-semibold text-slate-600">
              visit Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
