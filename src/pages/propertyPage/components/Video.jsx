import React from "react";

function Video({ id }) {
  return (
    <div
      id={id}
      className="px-4 py-6 lg:p-10 flex flex-col mt-16 bg-white gap-4 "
    >
      <div className="flex justify-between py-4 border-b-2 border-[#D9D9D9]  ">
        <h4 className=" font-medium text-lg text-customdark">Video</h4>
      </div>
      <div>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/y9j-BL5ocW8?si=Xx4jbXA5YF-271fb&amp;start=28"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
