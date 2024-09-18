import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

function MultiIncomeAdd({
  num1,
  setNum1,
  num2,
  setNum2,
  num3,
  setNum3,
  addTotalValue,
  activePopup,
  setActivePopup,
}) {
  return (
    <div
      className={` ${
        activePopup === "pop2" ? "flex" : "hidden"
      } fixed inset-0  items-center justify-center z-50 bg-black bg-opacity-50`}
    >
      <div className="rounded-3xl flex flex-col gap-10  fixed  py-4 px-4 mx-5 lg:mx-0 lg:px-10 bg-white">
        <div>
          <CloseIcon />
        </div>
        <div className="flex flex-col justify-center lg:w-[510px]  gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl text-customNameBlack">
              Improve search
            </h2>
            <p className="font-normal text-base  text-customgray2">
              Enter requested details to help us provide better search results
              for your optimized results.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-2 justify-center items-center">
            <div className="flex flex-col  ">
              <label
                htmlFor="incomeOne block"
                className="font-normal text-sm text-customdark"
              >
                Income one
              </label>
              <input
                type="number"
                id="incomeOne"
                placeholder="Enter in NGN"
                className="pl-2 py-1 border border-customBlackShade w-full lg:w-[130px] rounded-md focus:outline-none focus:border-gray-500"
                value={num1}
                onChange={(e) => setNum1(parseInt(e.target.value))}
              />
            </div>
            <AddIcon />
            <div className="flex flex-col  ">
              <label
                htmlFor="incomeTwo"
                className="font-normal text-sm text-customdark"
              >
                Income two
              </label>
              <input
                type="number"
                id="incomeTwo"
                placeholder="Enter in NGN"
                className="pl-2 py-1 border border-customBlackShade w-full lg:w-[130px] rounded-md focus:outline-none focus:border-gray-500"
                value={num2}
                onChange={(e) => setNum2(parseInt(e.target.value))}
              />
            </div>
            <AddIcon />
            <div className="flex flex-col  ">
              <label
                htmlFor="incomeThree"
                className="font-normal text-sm text-customdark"
              >
                Income three
              </label>
              <input
                type="number"
                id="incomeThree"
                placeholder="Enter in NGN"
                className="pl-2 py-1 border border-customBlackShade w-full lg:w-[130px] rounded-md focus:outline-none focus:border-gray-500"
                value={num3}
                onChange={(e) => setNum3(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="w-full">
            <button
              className="bg-customSearchblue rounded-lg py-3 font-medium w-full text-textcolor text-base "
              onClick={addTotalValue}
              onclick={setActivePopup("pop3")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiIncomeAdd;
