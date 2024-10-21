import React from "react";
import DateAndTimePicker from "../../../components/DateAndTimePicker";

function ScheduleATour({ className }) {
  return (
    <div
      className={` lg:flex   top-8 bottom-0 z-10 flex-col w-full lg:w-[380px] mb-6 ${className}`}
    >
      <div className="flex">
        <h4 className="text-customSearchblue text-base font-bold text-center py-3 flex-1">
          Schedule a Tour
        </h4>
        <h4 className="text-[#333333] text-base font-bold text-center py-3 flex-1">
          Request Info
        </h4>
      </div>
      <DateAndTimePicker />
      <div className="px-2">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-base text-[#33333]">Tour type</h3>

          <div className="flex gap-2 ">
            <h4 className="text-customSearchblue text-base font-bold py-3 text-center flex-1">
              In Person
            </h4>
            <h4 className="text-[#333333] text-base font-bold text-center py-3 flex-1">
              Video
            </h4>
          </div>

          <div className="flex flex-col gap-4">
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
              //   cols="30"
              className="border-2 border-customgray3 w-full p-2"
            ></textarea>
            <h4 className="text-sm font-normal text-[#333333]">
              By submitting this form I agree to{" "}
              <span className="cursor-pointer text-customSearchblue">
                Terms of Use
              </span>
            </h4>
          </div>
        </div>
        <div>
          <button className="bg-customSearchblue text-white w-full mt-6 p-3 rounded-lg">
            Submit a Tour Request
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScheduleATour;
