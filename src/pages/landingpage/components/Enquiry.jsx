import React from "react";

import "./Enquiry.css";
import EnquiryForm from "./EnquiryForm";
function Enquiry() {
  return (
    <div
      className="background-imagee lg:py-24 lg:px-8"
      style={{
        backgroundImage: `url(${require("../../../assets/chair_table.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="flex flex-col py-12 md:gap-4  lg:px-0 lg:py-0 lg:flex lg:flex-row lg:gap-6">
        <div className=" text-white mx-6 lg:mx-0 lg:flex lg:gap-20">
          <div className="flex flex-col gap-8 mb-10 lg:mb-0 lg:gap-28">
            <div>
              <h2 className="font-bold text-3xl lg:text-[40px] pt-2 h-[150px] lg:max-w-[300px] mb-6 lg:mb-0 lg:h-[234px] leading-snug">
                Why rentwise Is The Perfect Choice?
              </h2>
              <div className=" hidden lg:w-48 border lg:border-borderbottom"></div>
            </div>

            <div className="flex flex-col lg:h-[369px] lg:gap-4">
              <h2 className="font-bold text-5xl mb-3"> 01.</h2>
              <h3 className="text-4xl font-medium">
                Personalized Recommendations
              </h3>
              <p>
                rentwise AI uses your household income to tailor apartment
                suggestions, ensuring they fit your budget and lifestyle
              </p>
              <div className="w-48 border mt-8 border-borderbottom"></div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <div>
              <div className=" flex flex-col gap-4 mb-8 lg:mb-0 lg:h-[330px]">
                <h2 className="font-bold text-5xl mb-3">02.</h2>

                <h3 className="text-4xl font-medium">Data-Driven Insights</h3>
                <p className="max-w-[405px]">
                  The platform leverages advanced data analytics to provide you
                  with the most accurate and up-to-date rental options.
                </p>
              </div>
              <div className="w-48 border mb-3 border-borderbottom"></div>
            </div>

            <div className="flex flex-col gap-3 mb-12 lg:mb-0 lg:gap-4 ">
              <h2 className="font-bold text-5xl mb-3"> 03.</h2>
              <h3 className="text-3xl">Confidence in Decision-Making</h3>
              <p className="">
                With cutting-edge tools, Rentwise AI empowers you to make
                informed and confident rental decisions, reducing the stress of
                apartment hunting.
              </p>
              <div className="w-48 border mt-8 border-borderbottom"></div>
            </div>
          </div>
        </div>

        <EnquiryForm />
      </div>
    </div>
  );
}

export default Enquiry;
