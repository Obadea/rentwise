import React from "react";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import AddIcon from "@mui/icons-material/Add";

function MultiIncomeAdd() {
  return (
    <div>
      <div>
        <CancelPresentationIcon />
      </div>
      <div>
        <div>
          <h2 className="font-bold text-3xl text-customNameBlack">
            Search better
          </h2>
          <p className="font-normal text-base bg-customStreetcolor">
            Enter requested details to help us provide better search results for
            your optimized results.
          </p>
        </div>
        <div>
          <div>
            <label htmlFor="incomeOne">Income one</label>
            <input type="number" id="incomeOne" placeholder="Enter in NGN" />
          </div>
          <AddIcon />
          <div>
            <label htmlFor="incomeTwo">Income one</label>
            <input type="number" id="incomeTwo" placeholder="Enter in NGN" />
          </div>
          <AddIcon />
          <div>
            <label htmlFor="incomeThree">Income one</label>
            <input type="number" id="incomeThree" placeholder="Enter in NGN" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultiIncomeAdd;
