import React from "react";

function EnergyClass() {
  return (
    <div>
      <div className="px-4 py-6 lg:p-10 flex flex-col  gap-4 ">
        <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9]  ">
          <h4 className=" font-medium text-lg text-customdark">Energy Class</h4>
        </div>
        <div className="flex flex-col  gap-2  justify-between">
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] ">
            <h4 className=" font-medium text-base text-[#222222]">
              Energetic class:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              Band A
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 ">
            <h4 className=" font-medium text-base text-[#222222]">
              Global Energy Performance Index:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              92.42 kWh / m²a
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9]  ">
            <h4 className=" font-medium text-base text-[#222222]">
              Renewable energy performance index:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              00.00 kWh / m²a
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] ">
            <h4 className=" font-medium text-base text-[#222222]">
              Energy performance of the building:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              Prepaid meter
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] ]">
            <h4 className=" font-medium text-base text-[#222222]">
              IKEDC Current Rating:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              Band A
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] ">
            <h4 className=" font-medium text-base text-[#222222]">
              EPC Potential Rating:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              21hrs - 24hrs
            </button>
          </div>
        </div>
      </div>

      {/* Band distribution */}
      <div className="flex justify-center text-white">
        <div className="px-8 py-2 bg-[#33A357]">Band A</div>
        <div className="px-8 py-2 bg-[#79B752]">Band B</div>
        <div className="px-8 py-2 bg-[#FFF12C]">Band C</div>
        <div className="px-8 py-2 bg-[#D66F2C]">Band D</div>
        <div className="px-8 py-2 bg-[#CC232A]">Band E</div>
      </div>
    </div>
  );
}

export default EnergyClass;
