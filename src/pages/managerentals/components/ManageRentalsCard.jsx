import React from "react";

function ManageRentalsCard() {
  return (
    <div className="p-4 flex flex-col justify-center gap-4 items-center">
      <img src="" alt="" className="w-[200px] h-[200px]" />
      <div className="flex flex-col justify-center gap-12">
        <div className="flex flex-col justify-center items-center">
          <h4 className="font-bold text-lg text-customdark ">Add Property</h4>
          <p className="font-bold text-sm text-customBlackShade">
            Add your property and have your property seen by millions of people
          </p>
        </div>

        <div>
          <button className="w-full bg-customSearchblue font-medium text-base">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManageRentalsCard;
