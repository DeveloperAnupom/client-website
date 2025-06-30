import React from "react";
import WhoWeAreImg from "../Images/here-at-brac.png";
import thumbnail from "../Images/thumbnail3.png";
import { Helmet } from "react-helmet";

export const Who_We_Are = () => {
  return (
    <div className="relative">
      {/* Fixed background container */}
      <div>
        <Helmet>
          <title>who we are</title>
        </Helmet>
      </div>
      <div
        className="sticky top-0 h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-opacity-50 h-full w-full absolute"></div>
        <div className="hero-content text-neutral-content text-center relative z-10 h-full flex items-center justify-center">
          <div className="max-w-md"></div>
        </div>
      </div>

      {/* Scroll content over fixed background */}
      <div className="relative z-40">
        <h1 className="text-5xl text-[#ec008c] underline text-center font-semibold -translate-y-64">
          WHO WE ARE
        </h1>
        <p className="text-slate-300 -translate-y-52 w-5/6 mx-auto font-semibold text-lg">
          BRAC is an international development organisation founded in
          Bangladesh in 1972 that partners with over 100 million people living
          with inequality and poverty to create opportunities to realise human
          potential. <br /> We are known for our community-led, holistic
          approach and delivering long-term impact at scale. We work with
          communities in marginalised situations, hard-to-reach areas and
          post-disaster settings across Asia and Africa, with a particular focus
          on women and children. <br /> We operate as a solutions ecosystem,
          including social development programmes, social enterprises,
          humanitarian response, a bank and a university. <br /> We are born and
          proven in the south, have become a world leader in developing and
          implementing cost-effective, evidence-based programmes, and have been
          recognised as the number one development organisation in the world for
          multiple consecutive years by Geneva-based independent media
          organisation, NGO Advisor.
        </p>
        <img src={WhoWeAreImg} alt="" className="w-5/6 mx-auto" />
      </div>
    </div>
  );
};
