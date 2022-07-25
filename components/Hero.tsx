import React from "react";
import { images } from "../constants";
import Ticker from "react-ticker";

const Hero = () => {
  return (
    <div className="mt-[64px] ">
      <div className=" flex justify-between text-white">
        <div className="flex w-1/2 flex-col justify-center  ">
          <h1 className="mb-4 font-manrope text-[48px] leading-[72px]">
            Save time by building fast with Boldo Template{" "}
          </h1>
          <h2 className="mb-10  font-opensans leading-7">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </h2>
          <div className="flex space-x-6 font-opensans text-xl font-bold">
            <button className="rounded-[56px] bg-green py-4 px-[56px] text-darkBlue">
              Buy Template
            </button>
            <button className=" rounded-[56px] border-2 py-4 px-[56px]">
              Explore
            </button>
          </div>
        </div>
        <img src={images.hero.src} alt="" />
      </div>
{/* Will add ticker later */}
    </div>
  );
};

export default Hero;
