import React, { useState } from "react";
import LocationSearch from "./LocationSearch";

function Banner() {
  // State to track the selected button
  const [selectedButton, setSelectedButton] = useState(1);

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div
      className="h-[500px] w-full relative mt-16"
      style={{
        backgroundImage: `url(${require("../../assets/beach-town.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center flex-col gap-3 h-[400px]">
        <h2 className="text-textcolor text-3xl  text-center lg:text-6xl font-bold">
          Welcome to rentwise
        </h2>
        <div>
          <div className="flex justify-center px-6">
            <p className="text-textcolor  text-base lg:w-[856px] text-center font-medium lg:text-3xl ">
              An AI powered real estate platform; Connecting trusted landlords
              with reliable tenants.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-center">
        <button
          className={`w-30 px-4 py-3 mr-1 transition duration-500 ease-in-out ${
            selectedButton === 1
              ? "bg-[#FAD766] transform scale-[97%] "
              : "bg-addpropertybg "
          } rounded-t-lg`}
          onClick={() => handleButtonClick(1)}
        >
          All Status
        </button>
        <button
          className={`px-4 mr-1 w-30 transition duration-500 ease-in-out ${
            selectedButton === 2
              ? "bg-[#FAD766] transform scale-[97%] "
              : "bg-addpropertybg "
          } rounded-t-lg`}
          onClick={() => handleButtonClick(2)}
        >
          For Rent
        </button>
        <button
          className={`px-4 mr-1 w-30 transition duration-500 ease-in-out ${
            selectedButton === 3
              ? "bg-[#FAD766] transform scale-[97%] "
              : "bg-addpropertybg "
          } rounded-t-lg`}
          onClick={() => handleButtonClick(3)}
        >
          For Sale
        </button>
      </div>

      <LocationSearch />
    </div>
  );
}

export default Banner;
