import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function TotalIncome() {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
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
                Total annual household income
              </p>
              <p>{total}</p>
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
        </div>
      </div>
    </div>
  );
}

export default TotalIncome;
