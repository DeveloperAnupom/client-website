import React from "react";
import { Who_We_Are } from "../Components/Who_We_Are";
import JoinUs from "../Components/JoinUs";
import { Helmet } from "react-helmet";

export const WhoWeAre = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>BRAC - Who We Are</title>
        </Helmet>
      </div>
      <Who_We_Are></Who_We_Are>
      <JoinUs></JoinUs>
    </div>
  );
};
