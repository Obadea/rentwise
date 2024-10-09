import React from "react";
import Header from "../landingpage/components/Header";
import Breadcrumb from "../../components/BreadCrumb";

function AffordabilityCalculator() {
  return (
    <div>
      <Header />
      <div>
        <div>
          {" "}
          <Breadcrumb />
        </div>
        <div className="flex">
          <div className="flex flex-col gap-2">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-customblack2">
                See what I can afford
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row ">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-3xl text-customNameBlack">
                How much Rent can I afford?
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffordabilityCalculator;
