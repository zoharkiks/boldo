import React from "react";
import { images } from "../constants";

const Hero = () => {
  return (
    <div className="mt-[64px] md:mt-[140px] ">
      <div className=" flex justify-between text-white sm:justify-center  ">
        <div className="flex w-1/2 flex-col justify-center sm:items-center   ">
          <h1 className="mb-4 font-manrope text-[48px] leading-[72px] lg:text-[38px] lg:leading-[60px] md:text-[28px] md:leading-[45px] sm:text-center">
            Save time by building fast with Boldo Template{" "}
          </h1>
          <h2 className="mb-10  font-opensans leading-7 sm:hidden ">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </h2>
          <div className="flex space-x-6 font-opensans text-xl font-bold lg:text-base  sm:mt-6">
            <button className="rounded-[56px] bg-green py-4 px-[56px] text-darkBlue lg:py-2 lg:px-[28px]   md:py-1 md:px-[18px] md:text-sm  ">
              Buy Template
            </button>
            <button className=" rounded-[56px] border-2 py-4 px-[56px] lg:py-2 lg:px-[28px] md:py-1 md:px-[18px] md:text-sm ">
              Explore
            </button>
          </div>
        </div>
        <img className="w-[35%] sm:hidden" src={images.hero.src} alt="" />
      </div>
      {/* Will add ticker later */}
    </div>
  );
};

export default Hero;
