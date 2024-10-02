import React from "react";
import Header from "../landingpage/components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import RoomIcon from "@mui/icons-material/Room";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";

import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import GarageIcon from "@mui/icons-material/Garage";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function PropertyPage() {
  return (
    <div>
      <Header />
      <div>{/* Horizontal navbar for each vertical component */}</div>
      <div className="flex flex-row justify-between px-8 mt-24">
        <div className=" ml-4 flex flex-col gap-4 ">
          <Breadcrumb className="hidden lg:block" />
          <h3 className="font-bold text-3xl text-customblack1">Glory Suite</h3>
          <div className="flex gap-3">
            <button className="font-bold text-xs text-white bg-customSearchblue p-1">
              DOWNLOAD WISEREPORT{" "}
            </button>
            <button className="font-bold text-xs text-white bg-customNameBlack  p-1">
              FOR SALE
            </button>
          </div>
          <div className="flex text-customStreetcolor items-center  ">
            <RoomIcon />
            <p className="text-sm font-normal">Allen Avenue, Lagos</p>
          </div>
        </div>

        <div className="w-44 mx-4 flex flex-col gap-4 items-end">
          <div className="flex gap-2 text-customStreetcolor ">
            <FavoriteBorderIcon
              style={{
                fontSize: 26,
                border: "1px solid #666666",
                padding: "3px",
              }}
            />
            <ShareIcon
              style={{
                fontSize: 26,
                border: "1px solid #666666",
                padding: "3px",
              }}
            />
            <PrintIcon
              style={{
                fontSize: 26,
                border: "1px solid #666666",
                padding: "3px",
              }}
            />
          </div>
          <p className="font-bold text-2xl text-customaccent ">$876,000</p>
          <p className="font-normal text-base text-[#666666]">$7,600/sq ft</p>
        </div>
      </div>

      {/* Overview component */}
      <div>
        <div>
          <h4 className="font-medium text-lg">Overview</h4>
          <p>
            Property ID: <span>HZ43</span>
          </p>
        </div>
        <div className="flex flex-wrap">
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
    </div>
  );
}

export default PropertyPage;
