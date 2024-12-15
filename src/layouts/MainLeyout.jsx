import React from "react";
import Nav from "../components/common/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";

function MainLeyout() {
  return (
    <div className="">
      <Nav />
      <div className="min-h-[422px] max-w-7xl mx-auto px-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLeyout;
