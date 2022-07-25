import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";

const ServiceCard = ({title,image}) => {
  return (
    <div className="">
      <div className="flex flex-col items-center  font-opensans ">
        <div className="flex">
          <img src={image} alt="" />
        </div>
        <div className="flex w-[70%] flex-col justify-center mt-6" >
          <h2 className="text-2xl">{title}</h2>
          <p className="text-xl mt-3 mb-7 text-gray">
            Learning curve network effects return on investment.
          </p>
          <a href="" className="flex pb-2 w-max items-center justify-center space-x-3 border-b text-xl font-bold text-darkBlue">
            <span>Explore Page</span>
            <Icon icon="bytesize:arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
