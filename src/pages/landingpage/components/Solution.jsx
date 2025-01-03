import React from "react";
import country from "../../../assets/country.png";
import continent from "../../../assets/africa.png";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function Solution() {
  const navigate = useNavigate();
  return (
    <div className="bg-customdark text-white px-6 lg:px-20 py-16">
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="basis-[65%] px-0 lg:px-12 py-6">
          <div className="text-center lg:text-start">
            <h2 className="text-4xl inline-block font-semibold">
              Our solution cuts across{" "}
            </h2>
            <h2 className="text-4xl font-semibold"> African countries</h2>
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
          <div>
            <Button
              color="primary"
              className="mt-6 px-9 py-3  w-full  lg:w-auto rounded-lg"
              onPress={() => navigate("/contact us")}
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="basis-[30%]">
          <img src={continent} alt="" className="h-full w-full px-4 lg:px-0" />
        </div>
      </div>
    </div>
  );
}

export default Solution;
