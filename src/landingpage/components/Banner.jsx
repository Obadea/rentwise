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
      <div className="flex justify-center items-center flex-col gap-3 h-[400px]">
        <h2 className="text-textcolor text-center text-6xl font-bold">
          Welcome to rentwise
        </h2>
        <div>
          <div className="flex justify-center">
            <p className="text-textcolor w-[856px] text-center font-medium text-3xl ">
              An AI powered real estate platform; Connecting trusted landlords
              with reliaable tenants.
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
