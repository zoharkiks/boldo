import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";

import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="px-[100px] pt-20 pb-[226px] lg:px-[50px] md:px-[30px]">
      <div className="mb-20 flex flex-col items-center justify-center space-y-3">
        <h1 className="font-opensans text-xl text-gray">Our Services</h1>
        <h2 className="] w-[70%] text-center font-manrope text-[40px] lg:text-[32px]">
          Handshake infographic mass market crowdfunding iteration.
        </h2>
      </div>

      {/* Info Cards */}
      <div className="flex items-center justify-center md:flex-col md:space-y-10">
        <ServiceCard title="Cool Feature Title" image={images.info1.src} />
        <ServiceCard title="A Cooler feautre" image={images.info2.src} />
        <ServiceCard title="Coolest Feautre ever" image={images.info3.src} />
      </div>

      {/* Feature-1 */}
      <div className="mt-[185px] flex lg:mt-[90px]  md:mt-[45px] md:justify-center   ">
        <div className="relative flex flex-col lg:place-self-center">
          <img className="lg:hidden" src={images.img1.src} alt="" />
          <img
            className="absolute top-[13rem] left-[10rem]  lg:static lg:flex md:hidden"
            src={images.graph1.src}
            alt=""
          />
        </div>

        <div className="ml-[150px] flex w-1/2 flex-col pt-20 lg:ml-[60px] md:ml-0 md:items-center  ">
          <h1 className="mb-10 font-manrope text-[36px] lg:text-[30px] md:text-center sm:text-[24px] ">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <div className="flex w-fit items-center justify-center space-x-7  md:hidden ">
            <Icon
              className="h-9 w-9 text-darkBlue "
              icon="teenyicons:tick-circle-solid"
            />
            <p className="font-opensans text-xl">
              {" "}
              We connect our customers with the best.
            </p>
          </div>

          <div className="flex w-fit items-center justify-center space-x-7 py-6 md:hidden ">
            <Icon
              className="h-9 w-9 text-darkBlue "
              icon="teenyicons:tick-circle-solid"
            />
            <p className="font-opensans text-xl">
              {" "}
              Advisor success customer launch party.
            </p>
          </div>

          <div className="flex w-fit items-center justify-center space-x-7 md:hidden ">
            <Icon
              className="h-9 w-9 text-darkBlue "
              icon="teenyicons:tick-circle-solid"
            />
            <p className="font-opensans text-xl">
              {" "}
              Business-to-consumer long tail.
            </p>
          </div>

          <button className="mt-[56px] w-max rounded-[56px] bg-darkBlue px-[56px] py-4 text-left font-opensans text-xl font-bold text-white md:mt-0">
            Start Now
          </button>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="mt-[185px] flex lg:mt-[90px] md:justify-center ">
        <div className="relative order-1 flex flex-col lg:place-self-center">
          <img className="lg:hidden" src={images.img2.src} alt="" />
          <img
            className="absolute top-[13rem] left-[10rem] lg:static md:hidden"
            src={images.graph2.src}
            alt=""
          />
        </div>

        <div className="mr-[100px] flex w-1/2 flex-col pt-20 lg:mr-[60px] md:mr-0 md:items-center  ">
          <h1 className="mb-10 font-manrope text-[36px] lg:text-[30px] md:text-center sm:text-[24px] ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nam hic laudantium cumque praesentium ut nisi quidem illum incidunt voluptatibus.
          </h1>
          <div className=" flex w-[70%] items-center space-x-3 rounded-md bg-white py-4 pl-5 pr-[53px] drop-shadow-xl transition  hover:bg-darkBlue hover:text-white md:w-max sm:flex-col  sm:space-y-5 sm:p-6  ">
            <Icon className="h-7 w-7 " icon="jam:feather-f" />
            <p className="font-opensans text-base font-semibold">
              {" "}
              We connect our customers with the best.
            </p>
          </div>

          <div className="my-6 flex w-[70%] items-center space-x-3 rounded-md bg-white py-4 pl-5 pr-[53px]  drop-shadow-xl transition hover:bg-darkBlue hover:text-white md:w-max sm:flex-col  sm:space-y-5 sm:p-6 ">
            <Icon className="h-7 w-7 " icon="akar-icons:eye" />

            <p className="font-opensans text-base font-semibold">
              {" "}
              Advisor success customer launch party.
            </p>
          </div>

          <div className="flex w-[70%] items-center space-x-3 rounded-md bg-white py-4 pl-5 pr-[53px] drop-shadow-xl  transition hover:bg-darkBlue hover:text-white md:w-max sm:flex-col  sm:space-y-5 sm:p-6 ">
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
