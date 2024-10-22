import React from "react";
import Propertycard from "../../landingpage/components/Propertycard";

function SimilarListing({ id }) {
  return (
    <div id={id} className="px-4 py-6 lg:p-10 flex flex-col bg-white gap-4 ">
      <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9]  ">
        <h4 className=" font-medium text-lg text-customdark">
          Similar Listing
        </h4>
      </div>
      <div className="flex flex-wrap gap-3">
        <Propertycard className="lg:w-32%" />
        <Propertycard className="lg:w-32%" />
        <Propertycard className="lg:w-32%" />
        <Propertycard className="lg:w-32%" />
      </div>
    </div>
  );
}

export default SimilarListing;
