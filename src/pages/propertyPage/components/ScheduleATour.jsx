import React from "react";

function ScheduleATour() {
  return (
    <div className="flex flex-col ">
      <div className="flex">
        <h4 className="text-customSearchblue text-base font-bold">
          Schedule a Tour
        </h4>
        <h4 className="text-[#333333] text-base font-bold">Request Info</h4>
      </div>
      <div>
        <div>
          <h3>Tour type</h3>

          <div className="flex flex-col ">
            <h4 className="text-customSearchblue text-base font-bold">
              In Person
            </h4>
            <h4 className="text-[#333333] text-base font-bold">Video</h4>
          </div>

          <div>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              className="pl-2 py-1 border-2 border-customBlackShade w-[100%]  text-lg rounded-md focus:outline-none focus:border-gray-500"
            />
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="pl-2 py-1 border-2 border-customBlackShade w-[100%]  text-lg rounded-md focus:outline-none focus:border-gray-500"
            />
            <input
              type="number"
              id="number"
              placeholder="Enter your Number"
              className="pl-2 py-1 border-2 border-customBlackShade w-[100%]  text-lg rounded-md focus:outline-none focus:border-gray-500"
            />
            <textarea
              placeholder="Type your text here..."
              rows="5"
              cols="30"
              className="border-2 border-customgray3 p-2"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleATour;
