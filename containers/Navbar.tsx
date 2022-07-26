import React from "react";
import { Icon } from '@iconify/react';

import { images } from "../constants";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center  ">
      <img src={images.logo.src} alt="" />
      <div className="flex items-center justify-center space-x-10 font-opensans font-semibold text-white md:hidden">
        <a href="">Product</a>
        <a href="">Services</a>
        <a href="">About</a>
        <button className="rounded-3xl bg-white px-8 py-2 font-bold text-darkBlue">
          Log In
        </button>
      </div>
      <Icon className="hidden h-10 w-10 md:flex text-white" icon="mdi:microsoft-xbox-controller-menu" />

    </div>
  );
};

export default Navbar;
