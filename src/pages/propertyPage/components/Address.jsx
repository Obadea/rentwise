import React from "react";
import MapIcon from "@mui/icons-material/Map";
import { SvgMapIcon } from "../../../utils/SvgIcons";
import { Button } from "@nextui-org/react";

function Address({ id, propertyData, forShortlet }) {
  return (
    <div
      id={id}
      className="px-4 py-6 lg:p-10 flex flex-col  gap-4 mt-16 bg-white "
    >
      <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
        <h4 className=" font-medium text-lg text-customdark">Address</h4>
        <Button
          radius="sm"
          className="font-medium text-[13px] px-3 bg-customSearchblue h-9 py-0 text-white"
        >
          {" "}
          <SvgMapIcon /> Open on Google Maps
        </Button>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-y-4 md:gap-x-10 justify-between">
        <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-sm text-customdark">Address</h4>
          <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
            {propertyData?.property?.address
              ? propertyData?.property?.address
              : forShortlet
              ? propertyData?.shortlet?.address
              : "Loading..."}
          </button>
        </div>
        <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-sm text-customdark">City</h4>
          <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
            {propertyData?.property?.property?.city
              ? propertyData?.property?.property?.city
              : forShortlet
              ? propertyData?.shortlet?.city
              : "Loading..."}
          </button>
        </div>
        <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-sm text-customdark">State</h4>
          <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
            {propertyData?.property?.state
              ? propertyData?.property?.state
              : forShortlet
              ? propertyData?.shortlet?.state
              : "Loading..."}
          </button>
        </div>
        <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-sm text-customdark">
            Zip/Postal Code
          </h4>
          <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
            {propertyData?.property?.zipCode
              ? propertyData?.property?.zipCode
              : forShortlet
              ? propertyData?.shortlet?.zipCode
              : "Loading..."}
          </button>
        </div>
        <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-sm text-customdark">Area</h4>
          <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
            {propertyData?.property?.Area
              ? propertyData?.property?.Area
              : forShortlet
              ? propertyData?.shortlet?.Area
              : "Loading..."}
          </button>
        </div>
        <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-sm text-customdark">Country</h4>
          <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
            {propertyData?.property?.country
              ? propertyData?.property?.country
              : forShortlet
              ? propertyData?.shortlet?.country
              : "Loading..."}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Address;
