import React, { useState } from "react";
import quote from "../../../assets/Open-Quote--Streamline-Ultimate.png.png";
import testimonial from "../../../assets/testimonials.png";

import Rating from "@mui/material/Rating";

function TestimonialCard({ className }) {
  const [value, setValue] = useState(4);
  return (
    <div className="bg-white px-2 lg:px-0">
      <div
        className={`${className} flex flex-col flex-shrink bg-[#FAFBFF] gap-4 w-full lg:w-[400px] py-8 px-2 lg:px-6 lg:rounded-lg lg:shadow-lg`}
      >
        <img src={quote} alt="" className="w-[10%]" />
        <h5 className="font-normal text-base text-[#454F54] mb-8">
          RentWise made my house-hunting so much easier! I was able to find the
          perfect apartment that fit my budget, thanks to their income-based
          recommendations. No more wasting time on homes I couldn’t afford. I
          felt like they really understood my needs!
        </h5>
        <div className="flex gap-3 justify-between">
          <img src={testimonial} alt="woman face" />
          <div className="flex flex-col justify-between">
            <h4 className="text-[#454F54] font-semibold text-lg lg:text-xl ">
              Chinedu
            </h4>
            <div className="pr-3 lg:pr-0 flex justify-between gap-10 items-center">
              <p className="font-normal text-base lg:text-lg text-[#454F54]">
                VIctoria Island
              </p>

              <Rating
                name="read-only"
                value={value}
                sx={{ fontSize: { xs: "16px", sm: "18px", md: "20px" } }}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
