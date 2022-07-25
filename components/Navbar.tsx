import React from "react";

import { images } from "../constants";
const Navbar = () => {
  return (
    <div className="flex justify-between">
      <img src={images.logo.src} alt="" />
      <div className="font-opensans font-semibold flex items-center justify-center space-x-10 text-white">
        <a href="">Product</a>
        <a href="">Services</a>
        <a href="">About</a>
        <button className="rounded-3xl font-bold bg-white px-8 py-2 text-darkBlue">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
