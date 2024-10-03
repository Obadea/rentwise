import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function PropertyDetail() {
  return (
    <div className="px-4 py-6 lg:p-10 flex flex-col  gap-2">
      <div className="flex flex-col  gap-4">
        <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-lg text-customdark">Details</h4>
          <button className="font-normal text-xs  px-2 text-[#A6A6A6] flex justify-center items-center">
            <CalendarMonthIcon />
            Updated on September 15, 2020 at 7:12pm
          </button>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-y-4 md:gap-x-10 justify-between bg-[#E6ECFE] border-2 border-[#C9D5FD] p-7 ">
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">
              Property ID:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              HZ43
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">Price:</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              $876,000
            </button>
          </div>

          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">
              Property Size:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              2560 Sq Ft
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">Bedrooms:</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              3
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">Bathrooms:</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              2
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">Garage:</h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              1
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">
              Garage Size:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              200 SqFt
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">
              Year Built:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              2016
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">
              Property Type:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              Apartment
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-sm text-customdark">
              Property Status:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              For Sale
            </button>
          </div>
        </div>
      </div>

      {/* More Details */}
      <div>
        <div className="px-4 py-6 lg:p-0 flex flex-col  gap-4  ">
          <div className=" py-10 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-lg text-customdark">
              Additional details
            </h4>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-y-4 md:gap-x-10 justify-between">
            <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
              <h4 className=" font-medium text-sm text-customdark">
                {" "}
                Deposit:
              </h4>
              <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
                20%
              </button>
            </div>
            <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
              <h4 className=" font-medium text-sm text-customdark">
                Pool Size:
              </h4>
              <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
                300 Sqft
              </button>
            </div>
            <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
              <h4 className=" font-medium text-sm text-customdark">
                Last remodel year:
              </h4>
              <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
                1987
              </button>
            </div>
            <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
              <h4 className=" font-medium text-sm text-customdark">
                Amenities:
              </h4>
              <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
                Clubhouse
              </button>
            </div>
            <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
              <h4 className=" font-medium text-sm text-customdark">
                Additional Rooms:
              </h4>
              <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
                Guest Bath
              </button>
            </div>
            <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
              <h4 className=" font-medium text-sm text-customdark">
                Equipment:
              </h4>
              <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
                Gril gas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;
