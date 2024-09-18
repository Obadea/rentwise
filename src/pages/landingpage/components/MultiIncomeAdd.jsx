import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

function MultiIncomeAdd() {

  const [num1, SetNum1] = useState (0)
  const [num2, SetNum2] = useState (0)
  const [num3, SetNum3] = useState (0)
  const [total, SetTotal] = useState (0)

  function addTotalValue(){
    const totalValue = num1 + num2 + num3
    console.log(totalValue)
    SetTotal(totalValue)
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="rounded-3xl flex flex-col gap-10  fixed  py-4 px-10 bg-white">
      <div>
        <CloseIcon />
      </div>
      <div className="flex flex-col justify-center w-[510px]  gap-10" >
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl text-customNameBlack">
            Improve search
          </h2>
          <p className="font-normal text-base  text-customgray2">
            Enter requested details to help us provide better search results for
            your optimized results.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-2 items-center">
          <div className="flex flex-col  ">
            <label htmlFor="incomeOne block" className="font-normal text-sm text-customdark">Income one</label>
            <input type="number" id="incomeOne" placeholder="Enter in NGN" className="pl-2 py-1 border border-customBlackShade w-[130px] rounded-md focus:outline-none focus:border-gray-500" value={num1} onChange = {(e) => SetNum1(e.target.value)} />
          </div>
          <AddIcon />
          <div className="flex flex-col  ">
            <label htmlFor="incomeTwo" className="font-normal text-sm text-customdark">Income two</label>
            <input type="number" id="incomeTwo" placeholder="Enter in NGN" className="pl-2 py-1 border border-customBlackShade w-[130px] rounded-md focus:outline-none focus:border-gray-500" value={num2} onChange={(e) => SetNum2(e.target.value)} />
          </div>
          <AddIcon />
          <div className="flex flex-col  ">
            <label htmlFor="incomeThree" className="font-normal text-sm text-customdark">Income three</label>
            <input type="number" id="incomeThree" placeholder="Enter in NGN" className="pl-2 py-1 border border-customBlackShade w-[130px] rounded-md focus:outline-none focus:border-gray-500" value={num3} onChange={(e) => SetNum3(e.target.value)}/>
          </div>
        </div>
        <div className="w-full">
          <button className="bg-customSearchblue rounded-lg py-3 font-medium w-full text-textcolor text-base " onClick={addTotalValue}>
            Next
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MultiIncomeAdd;
