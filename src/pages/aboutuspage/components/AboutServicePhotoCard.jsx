import React from "react";
import image from "../../assets/min-room.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function AboutServicePhotoCard() {
  return (
    <div class="relative pl-4 lg:flex-1 max-w-[20vw] h-[20vw]">
      <div className="relative z-10 top-4 left-0 right-0">
        <p className=" font-normal text-xs text-white">Services</p>
        <h4 className="  font-normal text-lg text-white">Rentwise Report</h4>
      </div>
      <img
        src={image}
        alt="Description"
        class="absolute inset-0 object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-black   opacity-30"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 text-white flex justify-between items-center">
        <button className="font-normal text-xs "> More Details</button>
        <PlayArrowIcon />
      </div>
    </div>
  );
}

export default AboutServicePhotoCard;
