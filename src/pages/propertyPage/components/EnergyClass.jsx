import React from "react";

function EnergyClass() {
  return (
    <div>
      <div className="px-4 py-6 lg:p-10 flex flex-col  gap-4 ">
        <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9]  ">
          <h4 className=" font-medium text-lg text-customdark">Address</h4>
        </div>
        <div className="flex flex-col  gap-2  justify-between">
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] ">
            <h4 className=" font-medium text-sm text-customdark">Address</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              Victoria Island
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 ">
            <h4 className=" font-medium text-sm text-customdark">City</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              Lagos
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9]  ">
            <h4 className=" font-medium text-sm text-customdark">State</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              Lagos
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] ">
            <h4 className=" font-medium text-sm text-customdark">
              Zip/Postal Code
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              10013
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] ]">
            <h4 className=" font-medium text-sm text-customdark">Area</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              Lagos Island
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] ">
            <h4 className=" font-medium text-sm text-customdark">Country</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              Nigeria
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnergyClass;
