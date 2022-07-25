import React from "react";
import { images } from "../constants";

const TestimonialCard = ({comment,name,title,image}) => {
  return (
    <div className="flex flex-col bg-white text-black p-10 rounded-xl font-opensans space-y-10  ">
      <h1 className="text-2xl">
        {comment}
      </h1>
<div className="flex space-x-4 ">
  <img src={image} alt="" />
  <div className="flex flex-col place-content-between">
    <h3 className="font-bold ">{name}</h3>
    <h4 className="text-sm">{title}</h4>
  </div>
</div>
    </div>
  );
};

export default TestimonialCard;
