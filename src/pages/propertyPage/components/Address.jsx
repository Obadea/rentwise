import React from "react";
import MapIcon from "@mui/icons-material/Map";

function Address({ id }) {
  return (
    <div id={id} className="px-4 py-6 lg:p-10 flex flex-col  gap-4 mt-16 ">
      <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
        <h4 className=" font-medium text-lg text-customdark">Address</h4>
        <button className="font-medium text-xs bg-customSearchblue px-2 text-white flex justify-center items-center">
          {" "}
          <MapIcon /> Open on Google Maps
        </button>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-y-4 md:gap-x-10 justify-between">
        <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-sm text-customdark">Address</h4>
          <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
            Victoria Island
          </button>
        </div>
        <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-sm text-customdark">City</h4>
          <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
            Lagos
          </button>
        </div>
        <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-sm text-customdark">State</h4>
          <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
            Lagos
          </button>
        </div>
        <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-sm text-customdark">
            Zip/Postal Code
          </h4>
          <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
            10013
          </button>
        </div>
        <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-sm text-customdark">Area</h4>
          <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
            Lagos Island
          </button>
        </div>
        <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-sm text-customdark">Country</h4>
          <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
            Nigeria
          </button>
        </div>
      </div>
    </div>
  );
}

export default Address;
