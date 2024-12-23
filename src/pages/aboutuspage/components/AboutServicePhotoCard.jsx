import React from "react";
import image from "../../../assets/min-room.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { SvgPlayIcon } from "../../../utils/SvgIcons";

function AboutServicePhotoCard({ className, paragraph, img }) {
  return (
    <div class={` ${className} relative pl-4 lg:flex-1`}>
      <div className="relative z-10 top-4 left-0 right-0">
        <p className=" font-thin text-base text-white mb-2">Services</p>
        <h4 className="  font-thin text-xl text-white">{paragraph}</h4>
      </div>
      <img
        src={img ? img : image}
        alt="Description"
        class="absolute inset-0 object-cover w-full h-full rounded-lg"
      />
      <div class="absolute inset-0 bg-black   opacity-30 rounded-lg"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 text-white flex justify-between items-center">
        <button className="font-thin text-base "> More Details</button>
        <SvgPlayIcon />
      </div>
    </div>
  );
}

export default AboutServicePhotoCard;
