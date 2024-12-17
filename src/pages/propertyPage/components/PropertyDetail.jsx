import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { SvgCalenderIcon } from "../../../utils/SvgIcons";
import { toNaira } from "../../../utils/helperFunction";

function PropertyDetail({ id, propertyData }) {
  return (
    <div id={id} className="px-4 py-6 lg:p-10 flex flex-col  gap-2 bg-white">
      <div className="flex flex-col  gap-4">
        <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9]  flex-1 min-w-[45%]">
          <h4 className=" font-medium text-lg text-customdark">Details</h4>
          <div className="flex justify-center items-center gap-2">
            <SvgCalenderIcon />
            <p className="text-customBlackShade font-[200] text-[13px]">
              Updated on September 15, 2020 at 7:12pm
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-y-4 md:gap-x-10 justify-between bg-[#E6ECFE] border-2 border-[#C9D5FD] rounded-md p-7 ">
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">
              Property ID:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.property?.propertyId
                ? propertyData?.property?.property?.propertyId
                : "Loading..."}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">Price:</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.property?.price
                ? toNaira(propertyData?.property?.property?.price)
                : "Loading..."}
            </button>
          </div>

          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">
              Property Size:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.property?.sizeSquareFeet
                ? `${propertyData?.property?.property?.sizeSquareFeet} Sq ft`
                : "Loading..."}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">Bedrooms:</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.property?.bedrooms
                ? propertyData?.property?.property?.bedrooms
                : "Loading..."}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">Bathrooms:</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.property?.bathrooms
                ? propertyData?.property?.property?.bathrooms
                : "Loading..."}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">Garage:</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.property?.garage
                ? propertyData?.property?.property?.garage
                : "Loading..."}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">
              Garage Size:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.property?.garageSize
                ? `${propertyData?.property?.property?.garageSize} Sq ft`
                : "Loading..."}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">
              Year Built:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.property?.yearBuilt
                ? propertyData?.property?.property?.yearBuilt
                : "Loading..."}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">
              Property Type:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.property?.propertyType
                ? propertyData?.property?.property?.propertyType
                : "Loading..."}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">
              Property Status:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.property?.propertyStatus
                ? propertyData?.property?.property?.propertyStatus
                : "Loading..."}
            </button>
          </div>
        </div>
      </div>

      {/* More Details */}
      <div>
        <div className="px-4 py-6 lg:p-0 flex flex-col  gap-4  ">
          <div className=" py-10 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-customdark">Additional Details</h4>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-y-4 md:gap-x-10 justify-between">
            <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
              <h4 className=" font-medium text-sm text-customdark">
                {" "}
                Deposit:
              </h4>
              <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
                {propertyData?.property?.property?.deposit
                  ? `${propertyData?.property?.property?.deposit}%`
                  : "Loading..."}
              </button>
            </div>
            <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
              <h4 className=" font-medium text-sm text-customdark">
                Pool Size:
              </h4>
              <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
                {propertyData?.property?.property?.poolSize
                  ? `${propertyData?.property?.property?.poolSize}Sqft`
                  : "Loading..."}
              </button>
            </div>
            <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
              <h4 className=" font-medium text-sm text-customdark">
                Last remodel year:
              </h4>
              <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
                {propertyData?.property?.property?.lastRemodelYear
                  ? `${propertyData?.property?.property?.lastRemodelYear}`
                  : "Loading..."}
              </button>
            </div>
            <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
              <h4 className=" font-medium text-sm text-customdark">
                Amenities:
              </h4>
              <button className="font-normal text-sm truncate  text-customStreetcolor flex justify-center items-center">
                {propertyData?.property?.property?.amenities
                  ? propertyData?.property?.property?.amenities.map(
                      (item) => `${item},`
                    )
                  : "Loading..."}
              </button>
            </div>
            <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
              <h4 className=" font-medium text-sm text-customdark">
                Additional Rooms:
              </h4>
              <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
                {propertyData?.property?.property?.additionalRooms
                  ? propertyData?.property?.property?.additionalRooms
                  : "Loading..."}
              </button>
            </div>
            <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
              <h4 className=" font-medium text-sm text-customdark">
                Equipment:
              </h4>
              <button className="font-normal text-sm  truncate text-customStreetcolor flex justify-center items-center">
                {propertyData?.property?.property?.equipment
                  ? propertyData?.property?.property?.equipment.map(
                      (item) => `${item},`
                    )
                  : "Loading..."}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
