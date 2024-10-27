import React from "react";
import image from "../../../assets/scheduleImage.png";

function AboutPhotoCard() {
  return (
    <div class="relative lg:flex-1 max-w-[300px] h-[400px]">
      <img
        src={image}
        alt="Description"
        class="absolute inset-0 object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
      <div class="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
        Anita Nwabale
      </div>
    </div>
  );
}

export default AboutPhotoCard;
