import React from "react";

function StatemenCard(props) {
  return (
    <div className="flex flex-col  justify-center items-center text-center px-2 py-8  ">
      <div>
        <img src={props.bayo} alt="" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-customNameBlack my-1">
          {props.name}
        </h3>
        <p className="text-sm font-normal text-customStreetcolor mb-3">
          {props.level}
        </p>
        {/* <p className="text-sm font-normal text-customBlackShade">
          {props.about}
        </p> */}
        <button className="px-4 py-2 my-2 text-sm font-semibold text-customProfileblue hover:text-DownloadHover">
          View profile
        </button>
      </div>
    </div>
  );
}

export default StatemenCard;
