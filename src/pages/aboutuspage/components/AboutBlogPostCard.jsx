import React from "react";
import blogimage from "../../../assets/blogroom.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function AboutBlogPostCard({ className }) {
  return (
    <div className={` ${className} flex flex-col px-2  lg:w-[300px]`}>
      <img src={blogimage} alt="" />
      <div className="p-2 flex flex-col gap-3 border-b-2">
        <div className="flex gap-3 ">
          <div className="flex gap-2 items-center">
            <CalendarMonthIcon
              sx={{ fontSize: "16px" }}
              className="text-customBlackShade"
            />
            <h5 className="font-normal text-xs text-customStreetcolor">
              {" "}
              March 9, 2024
            </h5>
          </div>
          <div className="flex gap-2 items-center">
            <LocalOfferIcon
              sx={{ fontSize: "16px" }}
              className="text-customBlackShade"
            />
            <p className="font-normal text-xs text-customaccent">Business</p>
          </div>
        </div>
        <h4 className="font-medium font-base text-customdark">
          Skills That You Can Learn In The Real Estate Market{" "}
        </h4>
        <p className="font-normal text-xs text-customStreetcolor">
          Lorem ipsum dolor sit amejdnskxkmlzsldnska.knhiwnsanx
          ZJbnklnxsk......consectetur adipiscing elit.{" "}
        </p>
        <button className="text-customSearchblue font-bold text-start text-sm">
          Continue reading
        </button>
      </div>
      {/* add animation author */}
      <div className=" font-normal px-2 gap-4 text-lg text-customStreetcolor flex items-center">
        <PersonOutlineIcon
          sx={{ fontSize: "20px" }}
          className="text-customBlackShade"
        />{" "}
        by Mike Moore
      </div>
    </div>
  );
}

export default AboutBlogPostCard;
