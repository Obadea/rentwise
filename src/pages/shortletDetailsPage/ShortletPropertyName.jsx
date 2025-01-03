import React from "react";
import Breadcrumb from "../../components/BreadCrumb";
import { Button, Select, SelectItem, Skeleton } from "@nextui-org/react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import { toNaira } from "../../utils/helperFunction";
import { SvgGreaterIcon, SvgHomeIcon } from "../../utils/SvgIcons";
import { Link } from "react-router-dom";

const ShortletPropertyName = ({ className, shortletData, value, setValue }) => {
  // const [value, setValue] = React.useState("hourlyPrice");
  const handleSelectionChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div
      className={`flex-col-reverse lg:flex-row justify-between lg:px-8 mt-4 ${className}`}
    >
      <div className=" ml-4 flex flex-col gap-4  ">
        {/* <Breadcrumb /> */}
        <div className="text-customStreetcolor flex items-center gap-2">
          <SvgHomeIcon />
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <SvgGreaterIcon />
          <Link to="/shortlets" className="hover:underline font-semibold">
            Shortlet
          </Link>
        </div>
        {shortletData?.shortlet?.name ? (
          <h3 className="font-bold text-3xl text-customblack1">
            {shortletData?.shortlet?.name}
          </h3>
        ) : (
          <Skeleton className="w-[80%] h-10 rounded-lg mt-2" />
        )}
        <div className="flex gap-3">
          <a href="#virtual">
            <Button size="sm" href="#vitual" className="bg-green-400">
              Take a virtual Tour
            </Button>
          </a>
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
                value === "Hour"
                  ? shortletData?.shortlet?.hourlyPrice
                  : value === "Day"
                  ? shortletData?.shortlet?.dailyPrice
                  : value === "Week"
                  ? shortletData?.shortlet?.weeklyPrice
                  : value === "Month"
                  ? shortletData?.shortlet?.monthlyPrice
                  : ""
              )}`
            : "Loading..."}
        </p>
        <Select
          aria-label="select"
          selectedKeys={[value]}
          onChange={handleSelectionChange}
          className="w-36"
          disallowEmptySelection={true}
        >
          <SelectItem key="Hour">Per Hour</SelectItem>
          <SelectItem key="Day">Per Day</SelectItem>
          <SelectItem key="Week">Per Week</SelectItem>
          <SelectItem key="Month">Per Month</SelectItem>
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
