import React from "react";
import walk from "../../../assets/Iframe.png";

function WalkScore() {
  return (
    <div>
      <div className="px-4 py-6 lg:p-10 flex flex-col bg-white gap-4 ">
        <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9]  ">
          <h4 className=" font-medium text-lg text-customdark">Walk score</h4>
        </div>
      </div>
      <div className="px-8">
        <img src={walk} alt="walk score" className="w-full" />
      </div>
    </div>
  );
}

export default WalkScore;
