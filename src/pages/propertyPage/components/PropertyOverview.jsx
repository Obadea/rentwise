import React from "react";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import GarageIcon from "@mui/icons-material/Garage";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function PropertyOverview({ id, propertyData, forShortlet }) {
  return (
    <div id={id} className="px-4 py-6 lg:p-10 bg-white">
      <div className="flex justify-between mb-8 border-b-[1px] border-[#DCE0E0]">
        <h4 className="font-medium text-lg">Overview</h4>
        <p className="font-semibold">
          Property ID:{" "}
          <span className="font-normal">
            {" "}
            {forShortlet
              ? propertyData?.shortlet?.shortletId
              : propertyData?.property?.propertyId}
          </span>
        </p>
      </div>
      <div className="flex flex-wrap justify-start gap-9 ">
        <div className="w-[86px]">
          <h4 className="font-bold text-base text-[#333333]">
            {forShortlet
              ? propertyData?.shortlet?.shortletsType
              : propertyData?.property?.propertyType}
          </h4>
          <p className="font-normal text-sm text-[#666666]">Property Type</p>
        </div>
        <div className="w-[86px]">
          <h3 className="font-bold text-base text-[#333333]">
            <BedIcon className="text-[#5C6872]" />{" "}
            {forShortlet
              ? propertyData?.shortlet?.bedrooms
              : propertyData?.property?.property?.bedrooms}
          </h3>
          <p className="font-normal text-sm text-[#666666]">Bedrooms</p>
        </div>
        <div className="w-[86px]">
          <h3 className="font-bold text-base text-[#333333]">
            <ShowerIcon className="text-[#5C6872]" />{" "}
            {forShortlet
              ? propertyData?.shortlet?.bathrooms
              : propertyData?.property?.bathrooms}
          </h3>
          <p className="font-normal text-sm text-[#666666]">Bathrooms</p>
        </div>

        <div className="w-[86px]">
          <h3 className="font-bold text-base text-[#333333]">
            {" "}
            <GarageIcon className="text-[#5C6872]" />{" "}
            {forShortlet
              ? propertyData?.shortlet?.garage
              : propertyData?.property?.garage}
          </h3>
          <p className="font-normal text-sm text-[#666666] capitalize">
            garage
          </p>
        </div>
        <div className="w-[86px]">
          <h3 className="font-bold text-base text-[#333333]">
            {" "}
            <SquareFootIcon className="text-[#5C6872]" />{" "}
            {forShortlet
              ? propertyData?.shortlet?.sizeSquareFeet
              : propertyData?.property?.sizeSquareFeet}
          </h3>
          <p className="font-normal text-sm text-[#666666]">Sq Ft</p>
        </div>
        <div className="w-[86px]">
          <h3 className="font-bold text-base text-[#333333]">
            {" "}
            <CalendarMonthIcon className="text-[#5C6872]" />{" "}
            {forShortlet
              ? propertyData?.shortlet?.yearBuilt
              : propertyData?.property?.yearBuilt}
          </h3>
          <p className="font-normal text-sm text-[#666666]">Year Built</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyOverview;
