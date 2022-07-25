import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";

import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="px-[100px] py-20">
      <div className="mb-20 flex flex-col items-center justify-center space-y-3">
        <h1 className="font-opensans text-xl text-gray">Our Services</h1>
        <h2 className="w-[70%] text-center font-manrope text-[40px]">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
      </div>

      {/* Info Cards */}
      <div className="flex items-center justify-center">
        <ServiceCard title="Cool Feature Title" image={images.info1.src} />
        <ServiceCard title="A Cooler feautre" image={images.info2.src} />
        <ServiceCard title="Coolest Feautre ever" image={images.info3.src} />
      </div>

      {/* Feature-1 */}
      <div className="mt-[185px] flex   ">
        <div className="relative flex flex-col">
          <img src={images.img1.src} alt="" />
          <img
            className="absolute top-[13rem] left-[10rem]"
            src={images.graph1.src}
            alt=""
          />
        </div>

        <div className="ml-[150px] flex w-1/2 flex-col pt-20 ">
          <h1 className="mb-10 font-manrope text-[36px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <div className="flex w-fit items-center justify-center space-x-7  ">
            <Icon
              className="h-9 w-9 text-darkBlue "
              icon="teenyicons:tick-circle-solid"
            />
            <p className="font-opensans text-xl">
              {" "}
              We connect our customers with the best.
            </p>
          </div>

          <div className="flex w-fit items-center justify-center space-x-7 py-6">
            <Icon
              className="h-9 w-9 text-darkBlue "
              icon="teenyicons:tick-circle-solid"
            />
            <p className="font-opensans text-xl">
              {" "}
              Advisor success customer launch party.
            </p>
          </div>

          <div className="flex w-fit items-center justify-center space-x-7">
            <Icon
              className="h-9 w-9 text-darkBlue "
              icon="teenyicons:tick-circle-solid"
            />
            <p className="font-opensans text-xl">
              {" "}
              Business-to-consumer long tail.
            </p>
          </div>

          <button className="mt-[56px] w-max rounded-[56px] bg-darkBlue px-[56px] py-4 text-left font-opensans text-xl font-bold text-white">
            Start Now
          </button>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="mt-[185px] flex   ">
        <div className="relative order-1 flex flex-col">
          <img src={images.img2.src} alt="" />
          <img
            className="absolute top-[13rem] left-[10rem]"
            src={images.graph2.src}
            alt=""
          />
        </div>

        <div className="mr-[150px] flex w-1/2 flex-col pt-20 ">
          <h1 className="mb-10 font-manrope text-[36px]">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <div className="transition hover:text-white rounded-md hover:bg-darkBlue py-4 pl-5 pr-[53px] flex w-[70%] items-center  space-x-3 drop-shadow-xl bg-white  ">
            <Icon className="h-7 w-7 " icon="jam:feather-f" />
            <p className="font-opensans text-base font-semibold">
              {" "}
              We connect our customers with the best.
            </p>
          </div>

          <div className="transition hover:text-white rounded-md hover:bg-darkBlue py-4 pl-5 pr-[53px] flex w-[70%] items-center  space-x-3 my-6 drop-shadow-xl bg-white" >
            <Icon className="h-7 w-7 " icon="akar-icons:eye" />

            <p className="font-opensans text-base font-semibold">
              {" "}
              Advisor success customer launch party.
            </p>
          </div>

          <div className="transition hover:text-white rounded-md hover:bg-darkBlue py-4 pl-5 pr-[53px] flex w-[70%] items-center  space-x-3 drop-shadow-xl bg-white">
            <Icon className="h-7 w-7 " icon="charm:sun" />

            <p className="font-opensans text-base font-semibold">
              {" "}
              Business-to-consumer long tail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
