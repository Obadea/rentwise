import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import binoculars from "../../../assets/binoculars.png";

function SearchBetter() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="rounded-3xl fixed   py-4 px-10 bg-white">
      <div>
        <CloseIcon />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="bg-textcolor w-[140px] h-[140px]  flex justify-center items-center rounded-full">
          <img src={binoculars} alt="" className="text-customBlackShade" style={{ color: '#A6A6A6' }} />
        </div>

        <div className="flex flex-col items-center w-[510px]  gap-2">
          <h2 className="font-bold text-3xl  text-customNameBlack">
            Search better
          </h2>
          <p className="font-normal text-base text-center text-customStreetcolor">
            Search better using the household income rule. Household income is
            the total money earned by all members of a household. It includes
            money from jobs, business, investments, rent, and any government
            help.
          </p>
          <h3 className="font-bold text-sm text-customNameBlack">
            How to Calculate Household Income
          </h3>
          <div className="font-normal text-sm text-customStreetcolor text-center">
            <p>Add up all sources of income, such as:</p>
            <ol className="list-decimal list-inside"> {/* Changed to ordered list */}
              <li>Job Earnings (salary, wages)</li>
              <li>Business Income (if you own a business)</li>
              <li>Investment Income (like interest or dividends)</li>
            </ol>
            <div>
              <p>Example:</p>
              <ul className="list-disc list-inside "> {/* Changed to ordered list for example */}
                <li className="">Job Earnings: NGN 50,000</li>
                <li className="">Business Income: NGN 10,000</li>
                <li className="">Investment Income: NGN 5,000</li>
              </ul>
              <p>Total Household Income = NGN 65,000</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <button className="bg-customSearchblue rounded-lg py-3 font-medium w-full text-textcolor text-base">
            Search
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default SearchBetter;