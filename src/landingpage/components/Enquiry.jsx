import React from "react";

import "./Enquiry.css";
import EnquiryForm from "./EnquiryForm";
function Enquiry() {
  return (
    <div
      className="background-imagee lg:py-24 lg:px-8"
      style={{
        backgroundImage: `url(${require("../../assets/chair_table.png")})`,
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
              <h2 className="font-bold text-3xl lg:text-[40px] pt-2 h-[150px] lg:max-w-[300px] mb-6 lg:mb-0 lg:h-[234px]">
                Why rentwise Is The Perfect Choice?
              </h2>
              <div className=" hidden lg:w-48 border lg:border-borderbottom"></div>
            </div>

            <div className="flex flex-col lg:h-[369px] lg:gap-4">
              <h2 className="font-bold text-5xl mb-3"> 01.</h2>
              <h3 className="text-3xl">Suitable for Landlords and Tenants</h3>
              <p className="font-medium ">
                Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent
                nunc. Sed aliquam mi at urna. Condimentum mi lorem aliquam
                mattis. Consequat est phasellus velit nisl justo dui. ius
              </p>
              <div className="w-48 border mt-8 border-borderbottom"></div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <div>
              <div className=" flex flex-col gap-4 mb-8 lg:mb-0 lg:h-[330px]">
                <h2 className="font-bold text-5xl mb-3">02.</h2>

                <h3 className="text-3xl">Suitable for Landlords and Tenants</h3>
                <p className="font-normal">
                  Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent
                  nunc. Sed aliquam mi at urna. Condimentum mi lorem aliquam
                  mattis. Consequat est phasellus velit nisl justo dui. ius
                </p>
              </div>
              <div className="w-48 border mb-3 border-borderbottom"></div>
            </div>

            <div className="flex flex-col gap-3 mb-12 lg:mb-0 lg:gap-4 ">
              <h2 className="font-bold text-5xl mb-3"> 03.</h2>
              <h3 className="text-3xl">Suitable for Landlords and Tenants</h3>
              <p className="font-medium ">
                Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent
                nunc. Sed aliquam mi at urna. Condimentum mi lorem aliquam
                mattis. Consequat est phasellus velit nisl justo dui. ius
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
