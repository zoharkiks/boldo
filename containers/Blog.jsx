import { Icon } from "@iconify/react";
import React from "react";
import { BlogCard } from "../components";
import { images } from "../constants";

const Blog = () => {
  return (
    <div className="py-[124px] px-[100px]">
      <div className="flex justify-center">
        <img src={images.services.src} alt="" />
      </div>
      <div className="mt-[56px] flex justify-evenly  ">
        <h1 className="w-1/2 font-manrope text-4xl leading-[56px]">
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

      <div className="mt-[156px] mb-[77px] flex flex-col items-center space-y-3">
        <h2 className="font-opensans text-xl text-gray">Our Blog</h2>
        <h2 className="w-[70% text-center font-manrope text-[40px]">
          Value proposition accelerator product management venture
        </h2>
      </div>
      <div className="space-x-[17rem flex">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="mt-[84px] flex items-center justify-center">
        <button className=" w-max rounded-[56px] border-2 border-darkBlue px-[56px] py-4 font-opensans text-xl font-bold text-darkBlue">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Blog;
