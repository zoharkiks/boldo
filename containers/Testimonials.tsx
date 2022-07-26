import React from "react";
import { Icon } from "@iconify/react";
import {TestimonialCard} from "../components";
import { images } from "../constants";

const Testimonials = () => {
  return (
    <div className="bg-darkBlue px-[150px]  py-[96px] text-white">
      <div className="flex justify-between">
        <h1 className="w-[60%] font-manrope text-[48px]">
          An enterprise template to ramp up your company website
        </h1>
        <div className="flex items-end space-x-7">
          <Icon
            className="h-[72px] w-[72px] cursor-pointer"
            icon="bi:arrow-left-circle-fill"
          />
          <Icon
            className="h-[72px] w-[72px] cursor-pointer "
            icon="bi:arrow-right-circle-fill"
          />
        </div>
      </div>
      <div className="mt-[72px] flex space-x-6">
        <TestimonialCard
          comment="“Buyer buzz partner network disruptive non-disclosure agreement business”"
          name="Albus Dumbledore"
          title="Manager @ Hogwarts"
          image={images.people1.src}
        />
        <TestimonialCard
          comment="“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”"
          name="Severus Snape"
          title="Slytherin @ Hogwarts"
          image={images.people2.src}
        />
        <TestimonialCard
          comment="“Release facebook responsive web design business model canvas seed money monetization.”"
          name="Harry Potter"
          title="Manager @ Hogwarts"
          image={images.people3.src}
        />
      </div>
    </div>
  );
};

export default Testimonials;
