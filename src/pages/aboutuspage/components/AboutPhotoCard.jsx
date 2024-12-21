import React from "react";
import image from "../../../assets/scheduleImage.png";

function AboutPhotoCard({ teamImg, teamName }) {
  return (
    <div class="relative  min-w-[200px] min-h-[300px] h-[40vw] w-[30vw] lg:max-w-[400px] lg:max-h-[400px] ">
      <img
        src={teamImg ? teamImg : image}
        alt="Description"
        class="absolute inset-0 object-cover w-full h-full"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
      <div
        class="absolute bottom-0 left-0 right-0 p-4 md:text-md lg:text-lg text-white text-center font-medium
      "
      >
        {teamName ? teamName : "Anita Nwabale"}
        <p className="text-sm font-normal">Founder</p>
      </div>
    </div>
  );
}

export default AboutPhotoCard;
