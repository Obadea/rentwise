import React from "react";

function PostReview() {
  return (
    <div>
      <form action="#" className="flex flex-col gap-8">
        <div className="flex justify-between py-6 pb-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-lg text-customdark">
            Leave a Review
          </h4>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex flex-col gap-2 flex-1">
            <label
              htmlFor="email"
              className="font-bold text-base text-customNameBlack"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="pl-2 py-1 border-2 border-customBlackShade w-[100%]  text-lg rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
          <div className="flex flex-col flex-1 gap-2 ">
            <label
              htmlFor="email"
              className="font-bold text-base text-customNameBlack"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter your email"
              className="pl-2 py-1 border-2 border-customBlackShade  text-lg rounded-md focus:outline-none focus:border-gray-500"
            />
          </div>
          <div className="flex-1"></div>
        </div>
        <div>
          <div className="flex flex-col ">
            <label htmlFor="" className="font-bold text-base text-[#222222]">
              Message
            </label>
            <textarea
              placeholder="Type your text here..."
              rows="5"
              cols="30"
              className="border-2 border-customgray3 p-2"
            >
              Hello, I am interested in..
            </textarea>
          </div>
        </div>

        <div>
          <button className="text-white bg-customSearchblue px-4 py-3 rounded-lg">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostReview;
