import React from "react";
import Social from "../Components/Social";
import { Helmet } from "react-helmet";

export default function WhatWeDo() {
  return (
    <div>
      <div>
        <Helmet>
          <title>BRAC - Social Development</title>
        </Helmet>
      </div>
      <Social></Social>
    </div>
  );
}
