import React from "react";
import blogimage from "../../../assets/blogroom.png";

function AboutBlogPost() {
  return (
    <div className="px-4 lg:px-24 py-12">
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-col gap-2">
          <h3 className="font-normal text-3xl text-[#000000] ">
            Read From Our Blog
          </h3>
          <p className="font-normal text-base text-customStreetcolor">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
        </div>
        <div className="flex flex-col px-2">
          <img src="" alt="" />
          <div className="p-2 flex flex-col border-b-2">
            <div></div>
            <h4 className="font-medium font-base text-customdark">
              Skills That You Can Learn In The Real Estate Market{" "}
            </h4>
            <p className="font-normal text-xs text-customStreetcolor">
              Lorem ipsum dolor sit amejdnskxkmlzsldnska.knhiwnsanx
              ZJbnklnxsk......consectetur adipiscing elit.{" "}
            </p>
            <button className="text-customSearchblue font-bold text-sm">
              Continue reading
            </button>
          </div>
          {/* add animation author */}
          <div> by Mike Moore</div>
        </div>
      </div>
    </div>
  );
}

export default AboutBlogPost;
