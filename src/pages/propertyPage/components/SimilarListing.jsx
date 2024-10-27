import React from "react";
import Propertycard from "../../landingpage/components/Propertycard";

function SimilarListing({ id }) {
  return (
    <div id={id} className="px-4 py-6 lg:p-10 flex flex-col bg-white gap-4 ">
      <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9]  ">
        <h4 className=" font-medium text-lg text-customdark">
          Similar Listin45 0{" "}
        </h4>
      </div>
      <div className="flex flex-wrap justify-evenly gap-y-3 gap-x-2 ">
        <Propertycard className="lg:w-[30%] lg:mx-1 lg:min-w-[240px] " />
        <Propertycard className="lg:w-[30%] lg:mx-1 lg:min-w-[240px] " />
        <Propertycard className="lg:w-[30%] lg:mx-1 lg:min-w-[240px]" />
        <Propertycard className="lg:w-[30%] lg:mx-1 lg:min-w-[240px]" />
        <Propertycard className="lg:w-[30%] lg:mx-1 lg:min-w-[240px]" />
        <Propertycard className="lg:w-[30%] lg:mx-1 lg:min-w-[240px]" />
      </div>
    </div>
  );
}

export default SimilarListing;
