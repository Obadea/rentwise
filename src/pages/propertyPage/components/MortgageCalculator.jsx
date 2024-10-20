import React from "react";
import mortage from "../../../assets/mortage-div.png";
import mortage1 from "../../../assets/Div [d-flex].png";
import mortage2 from "../../../assets/Div [row].png";

function MortgageCalculator() {
  return (
    <div>
      <div className="px-4 py-6 lg:p-10 flex flex-col  gap-4 ">
        <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9]  ">
          <h4 className=" font-medium text-lg text-customdark">
            Mortgage Calculator
          </h4>
        </div>
        <div className=" hidden md:flex justify-center">
          <img src={mortage} alt="mortage" className="w-[80%]" />
        </div>
        <div className="flex flex-col md:hidden">
          <img src={mortage1} alt="mortage" />
          <img src={mortage2} alt="mortage" />
        </div>
      </div>
    </div>
  );
}

export default MortgageCalculator;
