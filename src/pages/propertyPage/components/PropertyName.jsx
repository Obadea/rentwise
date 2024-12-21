import React from "react";
import Breadcrumb from "../../../components/BreadCrumb";
import RoomIcon from "@mui/icons-material/Room";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import PrintIcon from "@mui/icons-material/Print";
import { Button, Skeleton } from "@nextui-org/react";
import { toNaira } from "../../../utils/helperFunction";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function PropertyName({ className, propertyData }) {
  return (
    <div
      className={`flex-col-reverse lg:flex-row justify-between lg:px-8 mt-4 ${className}`}
    >
      <div className=" ml-4 flex flex-col gap-4  ">
        <Breadcrumb />
        {propertyData?.property?.property?.name ? (
          <h3 className="font-bold text-3xl text-customblack1">
            {propertyData?.property?.property?.name}
          </h3>
        ) : (
          <Skeleton className="w-[80%] h-10 rounded-lg mt-2" />
        )}
        <div className="flex gap-3">
          <button className="font-bold text-xs text-white bg-customSearchblue p-1">
            DOWNLOAD WISEREPORT{" "}
          </button>
          <button className="font-bold text-xs text-white bg-customNameBlack  p-1">
            {propertyData?.property?.property?.propertyStatus
              ? propertyData?.property?.property?.propertyStatus
              : "Loading..."}
          </button>{" "}
        </div>
        <div className="flex text-customStreetcolor items-center mb-5 ">
          <LocationOnOutlinedIcon />
          <p className="text-sm font-normal">
            {propertyData?.property?.property?.address
              ? propertyData?.property?.property?.address
              : "Loading..."}
          </p>
        </div>
      </div>

      <div className="w-44 mx-4 flex flex-col gap-4 items-start lg:items-end">
        <div className=" hidden lg:flex gap-2 text-customStreetcolor  ">
          <Button
            className="border-1 border-[#666666]"
            isIconOnly
            variant="bordered"
            size="sm"
            radius="sm"
          >
            <FavoriteBorderIcon
              style={{
                fontSize: 20,
              }}
            />
          </Button>

          <Button
            className="border-1 border-[#666666]"
            isIconOnly
            variant="bordered"
            size="sm"
            radius="sm"
          >
            <ShareOutlinedIcon
              style={{
                fontSize: 20,
              }}
            />
          </Button>

          <Button
            className="border-1 border-[#666666]"
            isIconOnly
            variant="bordered"
            size="sm"
            radius="sm"
          >
            <PrintOutlinedIcon
              style={{
                fontSize: 20,
              }}
            />
          </Button>
        </div>
        <p className="font-bold text-2xl text-customaccent ">
          {" "}
          {propertyData?.property?.property?.price
            ? `${toNaira(propertyData?.property?.property?.price)}`
            : "Loading..."}
        </p>
        <p className="font-normal text-base text-[#666666]">
          {propertyData?.property?.property?.sizeSquareFeet
            ? `${propertyData?.property?.property?.sizeSquareFeet}/sq ft`
            : "Loading..."}
        </p>
      </div>
    </div>
  );
}

export default PropertyName;
