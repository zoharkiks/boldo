import { Icon } from "@iconify/react";
import React from "react";
import { images } from "../constants";

const Blog = () => {
  return (
    <div className="py-[124px] px-[100px]">
      <div className="flex justify-center">
        <img src={images.services.src} alt="" />
      </div>
      <div className="flex justify-evenly mt-[56px]  ">
        <h1 className="font-manrope text-4xl w-1/2 leading-[56px]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h1>
        <div className="flex flex-col space-y-8">
          <div className="flex w-fit items-center justify-center space-x-[84px] border-b border-b-gray pb-4  ">
            <p className="font-opensans text-xl">
              We connect our customers with the best.
            </p>
            <Icon
              className="h-7 w-7 text-darkBlue "
              icon="fluent:chevron-circle-down-16-filled"
            />
          </div>
          <div className="flex w-fit items-center justify-center space-x-[84px] border-b border-b-gray pb-4  ">
            <p className="font-opensans text-xl">
              We connect our customers with the best.
            </p>
            <Icon
              className="h-7 w-7 text-darkBlue "
              icon="fluent:chevron-circle-down-16-filled"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
