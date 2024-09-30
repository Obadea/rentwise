import React from "react";
import Header from "../landingpage/components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import RoomIcon from "@mui/icons-material/Room";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";

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

        <div className="w-44 ml-4 flex flex-col gap-4 ">
          <div className="flex gap-2">
            <FavoriteBorderIcon className="border-2 border-red-500 p-0" />
            <ShareIcon />
            <PrintIcon />
          </div>
          <p>$876,000</p>
          <p>$7,600/sq ft</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;
