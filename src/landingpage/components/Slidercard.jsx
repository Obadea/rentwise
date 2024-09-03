import React from "react";
import palor from "../../assets/palor.png";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import AdjustIcon from "@mui/icons-material/Adjust";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";

function Slidercard() {
  return (
    <div className=" px-0 hover:bg-addpropertybg w-[400px] rounde-md mx-2">
      <div className="h-[300px] w-[400px]">
        <img src={palor} alt="kitchen " className="  h-full w-full" />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <h4 className="text-base font-bold">Selewa abeni estate</h4>
          <div className="flex justify-between gap-1">
            <OpenInFullIcon fontSize="small" />
            <AdjustIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
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
              <AttachFileIcon />
            </div>
            Download WiseReport
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slidercard;
