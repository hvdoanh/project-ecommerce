import React from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import { Outlet } from "react-router-dom";

function LayoutDisplay() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default LayoutDisplay;
