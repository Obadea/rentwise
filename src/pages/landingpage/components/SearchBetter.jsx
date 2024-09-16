import React from "react";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import binoculars from "../../../assets/binoculars.png";

function SearchBetter() {
  return (
    <div className="rounded-3xl">
      <div>
        <CancelPresentationIcon />
      </div>
      <div>
        <div className="bg-textcolor rounded-full">
          <img src={binoculars} alt="" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-3xl text-customNameBlack">
            Search better
          </h2>
          <p className="font-normal text-base bg-customStreetcolor">
            Search better using the household income rule. Household income is
            the total money earned by all members of a household. It includes
            money from jobs, business, investments, rent, and any government
            help.
          </p>
          <h3 className="font-bold text-sm text-customNameBlack">
            How to Calculate Household Income
          </h3>
          <div className="font-bold text-sm text-customStreetcolor text-center">
            <p>Add up all sources of income, such as:</p>
            <ol>
              <li>Job Earnings (salary, wages)</li>
              <li>Business Income (if you own a business)</li>
              <li>Investment Income (like interest or dividends)</li>
            </ol>
            <div>
              <p>Example:</p>
              <ul>
                <li>Job Earnings: NGN 50,000</li>
                <li>Business Income: NGN 10,000</li>
                <li>Investment Income: NGN 5,000</li>
              </ul>
              <p>Total Household Income = NGN 65,000</p>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-customSearchblue px-2 py-4 font-medium text-base">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBetter;
