import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer";

export const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
