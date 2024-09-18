import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function TotalIncome({ total, activePopup, setActivePopup }) {
  return (
    <div
      className={` ${
        activePopup === "pop3" ? "flex" : "hidden"
      } fixed inset-0 items-center justify-center z-50 bg-black bg-opacity-50`}
    >
      <div className="rounded-3xl flex flex-col gap-10  fixed  py-4 px-4 mx-5 lg:mx-0 lg:px-10 bg-white">
        <div>
          <CloseIcon />
        </div>
        <div className="flex flex-col justify-center lg:w-full  gap-10">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl text-customNameBlack">
              Improve search
            </h2>
            <p className="font-normal text-base  text-customgray2">
              Total annual household income
            </p>
            <p className="font-medium text-lg text-customaccent text-center">
              {total}
            </p>
          </div>
        </div>
        <div>
          <p className="font-normal text-base  text-customgray2">
            Your search will be streamlined based on your calculated annual
            household income.
          </p>
          <p className="font-normal text-base  text-customgray2">
            Would you love to continue?
          </p>
        </div>
        <div className="w-full">
          <button className="bg-customSearchblue rounded-lg py-3 font-medium w-full text-textcolor text-base ">
            Continue Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default TotalIncome;
