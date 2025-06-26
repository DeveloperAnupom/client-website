import React from "react";
import thumnail from "../Images/thumnail.jpg";

export const Thumnail = () => {
  return (
    <div>
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url(${thumnail})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md"></div>
        </div>
      </div>
    </div>
  );
};
