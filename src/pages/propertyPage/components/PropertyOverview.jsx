import React from "react";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import GarageIcon from "@mui/icons-material/Garage";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function PropertyOverview() {
  return (
    <div className="px-4 py-6 ">
      <div className="flex justify-between mb-8 border-b-[1px] border-[#DCE0E0]">
        <h4 className="font-medium text-lg">Overview</h4>
        <p>
          Property ID: <span>HZ43</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-start gap-9 ">
        <div className="w-[86px]">
          <h4 className="font-bold text-base text-[#333333]">Apartment</h4>
          <p className="font-normal text-sm text-[#666666]">Property Type</p>
        </div>
        <div className="w-[86px]">
          <h3 className="font-bold text-base text-[#333333]">
            <BedIcon className="text-[#5C6872]" /> 3
          </h3>
          <p className="font-normal text-sm text-[#666666]">Bedrooms</p>
        </div>
        <div className="w-[86px]">
          <h3 className="font-bold text-base text-[#333333]">
            <ShowerIcon className="text-[#5C6872]" /> 2
          </h3>
          <p className="font-normal text-sm text-[#666666]">Bathrooms</p>
        </div>

        <div className="w-[86px]">
          <h3 className="font-bold text-base text-[#333333]">
            {" "}
            <GarageIcon className="text-[#5C6872]" /> 3
          </h3>
          <p className="font-normal text-sm text-[#666666]">Bedroms</p>
        </div>
        <div className="w-[86px]">
          <h3 className="font-bold text-base text-[#333333]">
            {" "}
            <SquareFootIcon className="text-[#5C6872]" /> 2560
          </h3>
          <p className="font-normal text-sm text-[#666666]">Bedroms</p>
        </div>
        <div className="w-[86px]">
          <h3 className="font-bold text-base text-[#333333]">
            {" "}
            <CalendarMonthIcon className="text-[#5C6872]" /> 2013
          </h3>
          <p className="font-normal text-sm text-[#666666]">Bedroms</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyOverview;
