import React from "react";
import country from "../../assets/country.png";
import continent from "../../assets/africa.png";

function Solution() {
  return (
    <div className="bg-customdark text-white px-20 py-16">
      <div className="flex gap-2">
        <div className="basis-[65%] px-12 py-6">
          <div>
            <h2 className="text-4xl">Our solution cuts across </h2>
            <h2 className="text-4xl">African countries</h2>
          </div>
          <p className="text-base text-gray-400 my-6">
            Businessses all over the world can use the rentwise AI rental
            solution to improve their ability to make well informed decisions
            when it comes to renting or buying real estate. procedures for
            authentication and verification. no matter where your activities are
            located, our commited collegues throughout the world are prepared to
            support you and your clients.
          </p>
          <img src={country} alt="" />
          <button className="mt-6 px-4 py-3 rounded-lg bg-customDownloadBlue border border-white">
            Learn more
          </button>
        </div>
        <div className="basis-[30%]">
          <img src={continent} alt="" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

export default Solution;
