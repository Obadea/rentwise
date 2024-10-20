import React from "react";
import Breadcrumb from "../../../components/BreadCrumb";
import RoomIcon from "@mui/icons-material/Room";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";

function PropertyName({ className }) {
  return (
    <div
      className={`flex-col-reverse lg:flex-row justify-between lg:px-8 mt-4 ${className}`}
    >
      <div className=" ml-4 flex flex-col gap-4 ">
        <Breadcrumb />
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

      <div className="w-44 mx-4 flex flex-col gap-4 items-start lg:items-end">
        <div className=" hidden lg:flex gap-2 text-customStreetcolor  ">
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
  );
}

export default PropertyName;
