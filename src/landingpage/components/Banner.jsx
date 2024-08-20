import React from "react";
import LocationSearch from "./LocationSearch";

function Banner() {
  return (
    <div
      className="h-[500px] "
      style={{
        backgroundImage: `url(${require("../../assets/beach-town.png")})`,
        // backgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center flex-col h-[80%]">
        <h2 className="text-white text-center text-[4vw]">
          Welcome to rentwise
        </h2>
        <div>
          <div className="">
            <p className="text-white mx-56 text-center text-[1.7vw] px-12">
              An AI powered real estate platform; Connecting trusted landlords
              with reliaable tenants
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="w-30 px-4 mr-1  bg-white rounded-t-lg">
          All Status
        </button>
        <button className="px-4 py-3 mr-1 w-30 bg-[#FAD766] rounded-t-lg">
          For Rent
        </button>
        <button className="px-4 mr-1 w-30 bg-[#FAD766] rounded-t-lg">
          For Sale
        </button>
      </div>

      <LocationSearch />
    </div>
  );
}

export default Banner;
