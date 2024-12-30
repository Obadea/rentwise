import React from "react";
import Breadcrumb from "../../components/BreadCrumb";
import { Button, Select, SelectItem, Skeleton } from "@nextui-org/react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import { toNaira } from "../../utils/helperFunction";

const ShortletPropertyName = ({ className, shortletData }) => {
  const [value, setValue] = React.useState("hourlyPrice");
  const handleSelectionChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div
      className={`flex-col-reverse lg:flex-row justify-between lg:px-8 mt-4 ${className}`}
    >
      <div className=" ml-4 flex flex-col gap-4  ">
        <Breadcrumb />
        {shortletData?.shortlet?.name ? (
          <h3 className="font-bold text-3xl text-customblack1">
            {shortletData?.shortlet?.name}
          </h3>
        ) : (
          <Skeleton className="w-[80%] h-10 rounded-lg mt-2" />
        )}
        <div className="flex gap-3">
          <button className="font-bold text-xs text-white bg-customNameBlack  p-1">
            {shortletData?.shortlet?.shortletsStatus
              ? shortletData?.shortlet?.shortletsStatus
              : "Loading..."}
          </button>{" "}
        </div>
        <div className="flex text-customStreetcolor items-center mb-5 ">
          <LocationOnOutlinedIcon />
          <p className="text-sm font-normal">
            {shortletData?.shortlet?.address
              ? shortletData?.shortlet?.address
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
          {shortletData?.shortlet
            ? `${toNaira(
                value === "hourlyPrice"
                  ? shortletData?.shortlet?.hourlyPrice
                  : value === "dailyPrice"
                  ? shortletData?.shortlet?.dailyPrice
                  : value === "weeklyPrice"
                  ? shortletData?.shortlet?.weeklyPrice
                  : shortletData?.shortlet?.monthlyPrice
              )}`
            : "Loading..."}
        </p>
        <Select
          selectedKeys={[value]}
          onChange={handleSelectionChange}
          className="w-36"
        >
          <SelectItem key="hourlyPrice">hourlyPrice</SelectItem>
          <SelectItem key="dailyPrice">dailyPrice</SelectItem>
          <SelectItem key="weeklyPrice">weeklyPrice</SelectItem>
          <SelectItem key="monthlyPrice">monthlyPrice</SelectItem>
        </Select>
        {/* <p className="font-normal text-base text-[#666666]">
          {shortletData?.shortlet?.sizeSquareFeet
            ? `${shortletData?.shortlet?.sizeSquareFeet}/sq ft`
            : "Loading..."}
        </p> */}
      </div>
    </div>
  );
};

export default ShortletPropertyName;
