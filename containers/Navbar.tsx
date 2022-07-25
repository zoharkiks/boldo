import React from "react";

import { images } from "../constants";
const Navbar = () => {
  return (
    <div className="flex justify-between">
      <img src={images.logo.src} alt="" />
      <div className="flex items-center justify-center space-x-10 font-opensans font-semibold text-white">
        <a href="">Product</a>
        <a href="">Services</a>
        <a href="">About</a>
        <button className="rounded-3xl bg-white px-8 py-2 font-bold text-darkBlue">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
