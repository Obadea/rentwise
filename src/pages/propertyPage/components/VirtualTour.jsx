import React from "react";

function VirtualTour({ id }) {
  return (
    <div id={id} className="px-4 py-3 lg:p-10 flex flex-col  gap-4 ">
      <div className="flex justify-between py-4 border-b-2 border-[#D9D9D9]  ">
        <h4 className=" font-medium text-lg text-customdark">
          360° Virtual Tour
        </h4>
      </div>
      <div>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/B4o8PvcqHC4?si=D4r69y3HGTRRZGz8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default VirtualTour;
