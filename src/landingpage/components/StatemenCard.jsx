import React from "react";

function StatemenCard(props) {
  return (
    <div className="flex flex-col justify-center items-center text-center px-2 py-8 bg-white hover:shadow-[8px_4px_20px_0px_rgba(0,0,0,0.1)] border border-cardBorder">
      <div>
        <img src={props.bayo} alt="" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-customNameBlack">
          {props.name}
        </h3>
        <p className="text-sm font-normal text-customStreetcolor">
          {props.level}
        </p>
        <p className="text-sm font-normal text-customBlackShade">
          {props.about}
        </p>
        <button className="px-4 py-2 my-2 text-xs font-bold text-customProfileblue hover:text-DownloadHover">
          View profile
        </button>
      </div>
    </div>
  );
}

export default StatemenCard;
