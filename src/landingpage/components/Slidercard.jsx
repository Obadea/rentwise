import React from "react";
import palor from "../../assets/palor.png";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import AdjustIcon from "@mui/icons-material/Adjust";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Tooltip from "@mui/material/Tooltip";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Slidercard() {
  return (
    <div className=" px-0 bg-white mx-auto hover:bg-addpropertybg w-[400px] rounde-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)]">
      <div
        className="h-[300px] w-[400px]"
        style={{
          backgroundImage: `url(${require("../../assets/chair_table.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="w-auto text-xs bg-black bg-opacity-50 text-white relative inline px-2 py-1 top-4 left-[310px]">
          FOR RENT
        </p>
        {/* <img src={palor} alt="kitchen " className="  h-full w-full" /> */}
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <h4 className="text-base text-customNameBlack font-bold">
            Selewa abeni estate
          </h4>
          <div className="flex justify-between text-customNameBlack gap-3">
            <Tooltip title="Preview" arrow placement="top">
              <OpenInFullIcon fontSize="small" className="cursor-pointer" />
            </Tooltip>
            <Tooltip title="Add to Compare" arrow placement="top">
              <AddCircleOutlineIcon
                fontSize="small"
                className="cursor-pointer"
              />
            </Tooltip>
            <Tooltip title="Favourite" arrow placement="top">
              <FavoriteBorderIcon fontSize="small" className="cursor-pointer" />
            </Tooltip>
          </div>
        </div>
        <div className="flex justify-start text-sm font-normal">
          <LocationOnOutlinedIcon />
          <p className="text-customStreetcolor">
            14, Asiriabo street, Isolo, Lagos.
          </p>
        </div>
        <div className="flex justify-start gap-2 text-xs text-customResultqueryGrey font-normal ">
          <p className="bg-customgray rounded-lg p-1">
            <LocationOnOutlinedIcon
              fontSize="small"
              className="text-customLocationIconColor"
            />
            2bed
          </p>
          <p className="bg-customgray rounded-lg p-1">
            <LocationOnOutlinedIcon
              fontSize="small"
              className="text-customLocationIconColor"
            />
            2bed
          </p>
          <p className="bg-customgray rounded-lg p-1">
            <LocationOnOutlinedIcon
              fontSize="small"
              className="text-customLocationIconColor"
            />
            2bed
          </p>
        </div>
        <div className="flex justify-between">
          <h3 className="text-customStreetcolor">
            $2,500,000/ <span className="text-sm">annum</span>
          </h3>
          <button className="text-customDownloadBlue text-sm hover:text-DownloadHover flex">
            <div className="transform rotate-45">
              <AttachFileIcon style={{ fontSize: 16 }} />
            </div>
            Download WiseReport
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slidercard;
