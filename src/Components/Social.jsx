import React from "react";
import JoinUs from "./JoinUs";

export default function Social() {
  return (
    <div className="pt-36 mb-12 w-5/6 mx-auto">
      <div>
        <h1 className="text-center py-10 text-4xl font-semibold uppercase underline text-[#ec008c]">
          Social Development
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 gap-y-12 mt-8 mb-28">
        <div>
          {" "}
          <div className="w-80 h-48 border bg-gray-100 border-pink-500 rounded-md overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-pink-600 text-white text-center font-semibold py-2 text-lg">
              Eliminating extreme poverty
            </div>
            {/* Body */}
            <div className=" p-4 text-sm">
              <ul className="list-disc list-inside text-gray-600 text-lg font-semibold">
                <li>Ultra-poor graduation</li>
                <li>Integrated development</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="w-80 h-48 border bg-gray-100 border-pink-500 rounded-md overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-pink-600 text-white text-center font-semibold py-2 text-lg">
              Expanding financial choices
            </div>
            {/* Body */}
            <div className=" p-4 text-sm">
              <ul className="list-disc list-inside text-gray-600 text-lg font-semibold">
                <li>Microfinance</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="w-80 h-48 border bg-gray-100 border-pink-500 rounded-md overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-pink-600 text-white text-center font-semibold py-2 text-lg">
              Humanitarian crisis management
            </div>
            {/* Body */}
            <div className=" p-4 text-sm">
              <ul className="list-disc list-inside text-gray-600 text-lg font-semibold">
                <li>Rohingya response</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="w-80 h-48 border bg-gray-100 border-pink-500 rounded-md overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-pink-600 text-white text-center font-semibold py-2 text-lg">
              Climate change and emergencies
            </div>
            {/* Body */}
            <div className=" p-4 text-sm">
              <ul className="list-disc list-inside text-gray-600 text-lg font-semibold">
                <li>Climate change</li>
                <li>Disaster risk management</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="w-80 h-48 border bg-gray-100 border-pink-500 rounded-md overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-pink-600 text-white text-center font-semibold py-2 text-lg">
              Universal access to healthcare
            </div>
            {/* Body */}
            <div className=" p-4 text-sm">
              <ul className="list-disc list-inside text-gray-600 text-lg font-semibold">
                <li>Health</li>
                <li>Water, sanitation and hygiene</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="w-80 h-48 border bg-gray-100 border-pink-500 rounded-md overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-pink-600 text-white text-center font-semibold py-2 text-lg">
              Gender equality
            </div>
            {/* Body */}
            <div className=" p-4 text-sm">
              <ul className="list-disc list-inside text-gray-600 text-lg font-semibold">
                <li>Gender justice and diversity</li>
                <li>Social empowerment and legal protection</li>
                
              </ul>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="w-80 h-48 border bg-gray-100 border-pink-500 rounded-md overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-pink-600 text-white text-center font-semibold py-2 text-lg">
              Pro-poor urban development
            </div>
            {/* Body */}
            <div className=" p-4 text-sm">
              <ul className="list-disc list-inside text-gray-600 text-lg font-semibold">
                <li>Urban development</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="w-80 h-48 border bg-gray-100 border-pink-500 rounded-md overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-pink-600 text-white text-center font-semibold py-2 text-lg">
              Investing in the next generation
            </div>
            {/* Body */}
            <div className=" p-4 text-sm">
              <ul className="list-disc list-inside text-gray-600 text-lg font-semibold">
                <li>Education</li>
                <li>Skills development</li>
                <li>Migration</li>
                <li>Youth platform</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="w-80 h-48 border bg-gray-100 border-pink-500 rounded-md overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-pink-600 text-white text-center font-semibold py-2 text-lg">
              Brack Social Work Zone
            </div>
            {/* Body */}
            <div className=" p-4 text-sm">
              <ul className="list-disc list-inside text-gray-600 text-lg font-semibold">
                <li>Strengthening Bangladesh's RMG sector</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <JoinUs></JoinUs>
    </div>
  );
}
