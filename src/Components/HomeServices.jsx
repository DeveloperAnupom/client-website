import React from "react";
import investment from "../Images/investments.jpg";
import development from "../Images/social-development.jpg";
import arong from "../Images/aarong.jpg";
import bu from "../Images/brac-uni.jpg";

export default function HomeServices() {
  return (
    <div className="my-12 mb-40 lg:w-5/6 mx-auto">
      <div>
        <h1 className="text-6xl font-bold text-center text-[#ec008c] my-20 underline">
          Services
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-7/8 gap-14 mx-auto">
        <div className="w-full object-fill relative overflow-hidden rounded shadow-lg shadow-[#c95b9d] group transform transition-transform duration-300 hover:scale-105">
          <img
            src={investment}
            alt="Social development"
            className="w-full h-72 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-4 py-2">
            <h2 className="text-white text-xl text-center font-medium">
              Investment
            </h2>
          </div>
        </div>
        <div className="w-full object-fill relative overflow-hidden rounded shadow-lg shadow-[#c95b9d] group transform transition-transform duration-300 hover:scale-105">
          <img
            src={development}
            alt="Social development"
            className="w-full h-72 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-4 py-2">
            <h2 className="text-white text-xl text-center font-medium">
              Social Development
            </h2>
          </div>
        </div>
        <div className="w-full object-fill relative overflow-hidden rounded shadow-lg shadow-[#c95b9d] group transform transition-transform duration-300 hover:scale-105">
          <img
            src={arong}
            alt="Social development"
            className="w-full h-72 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-4 py-2">
            <h2 className="text-white text-xl text-center font-medium">
              Social Enterprices
            </h2>
          </div>
        </div>
        <div className="w-full object-fill relative overflow-hidden rounded shadow-lg shadow-[#c95b9d] group transform transition-transform duration-300 hover:scale-105">
          <img
            src={bu}
            alt="Social development"
            className="w-full h-72 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-4 py-2">
            <h2 className="text-white text-center text-xl font-medium">
              Univercity
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
