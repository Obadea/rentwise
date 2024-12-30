import { Tooltip } from "@nextui-org/react";
import React from "react";

function EnergyClass({ id, propertyData, forShortlet }) {
  return (
    <div id={id}>
      <div className="px-4 py-6 lg:p-10 flex flex-col mt-16 gap-4 bg-white">
        <div className="flex justify-between py-4 border-b-2 border-[#D9D9D9]  ">
          <h4 className=" text-2xl text-customdark">Energy Class</h4>
        </div>
        <div className="flex flex-col  gap-2  justify-between">
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] ">
            <h4 className=" font-medium text-base text-[#222222]">
              Energetic class:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.energeticClass
                ? propertyData?.property?.energeticClass
                : forShortlet
                ? propertyData?.shortlet?.energeticClass
                : "Loading..."}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] flex-1 ">
            <h4 className=" font-medium text-base text-[#222222]">
              Global Energy Performance Index:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.globalEnergyPerformanceIndex
                ? `${propertyData?.property?.globalEnergyPerformanceIndex} kWh / m²a`
                : forShortlet
                ? `${propertyData?.shortlet?.globalEnergyPerformanceIndex} KWh / m²a`
                : "Loading..."}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9]  ">
            <h4 className=" font-medium text-base text-[#222222]">
              Renewable energy performance index:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {forShortlet
                ? propertyData?.shortlet?.renewableEnergyPerformanceIndex
                : propertyData?.property?.renewableEnergyPerformanceIndex}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] ">
            <h4 className=" font-medium text-base text-[#222222]">
              Energy performance of the building:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.energyPerformanceOfBuilding
                ? propertyData?.property?.energyPerformanceOfBuilding
                : forShortlet
                ? propertyData?.shortlet?.energyPerformanceOfBuilding
                : "Loading..."}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] ]">
            <h4 className=" font-medium text-base text-[#222222]">
              IKEDC Current Rating:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.epcCurrentRating
                ? `${propertyData?.property?.epcCurrentRating}`
                : forShortlet
                ? `${propertyData?.shortlet?.epcCurrentRating}`
                : "Loading..."}
            </button>
          </div>
          <div className="flex justify-between py-3 border-b-2 border-[#D9D9D9] ">
            <h4 className=" font-medium text-base text-[#222222]">
              EPC Potential Rating:
            </h4>
            <button className="font-normal text-sm   text-customStreetcolor flex justify-center items-center">
              {propertyData?.property?.epcPotentialRating
                ? `${propertyData?.property?.epcPotentialRating}`
                : forShortlet
                ? `${propertyData?.shortlet?.epcPotentialRating}`
                : "Loading..."}
            </button>
          </div>
        </div>
      </div>

      {/* Band distribution */}
      <div className="flex justify-center mt-12 w-full text-white">
        <Tooltip
          content={`${
            forShortlet
              ? propertyData?.shortlet?.globalEnergyPerformanceIndex
              : propertyData?.property?.property?.globalEnergyPerformanceIndex
          }kWh / m²a | Energy class A+`}
          showArrow
        >
          <div className="px-1 md:px-8 py-2 min-w-10 flex items-center justify-center bg-[#33A357]">
            A+
          </div>
        </Tooltip>
        <Tooltip
          content={`${
            forShortlet
              ? propertyData?.shortlet?.globalEnergyPerformanceIndex
              : propertyData?.property?.globalEnergyPerformanceIndex
          }kWh / m²a | Energy class A`}
          showArrow
        >
          <div className="px-1 cursor-pointer md:px-8 min-w-10 flex items-center justify-center py-2 bg-[#79B752]">
            A
          </div>
        </Tooltip>

        <Tooltip
          content={`${
            forShortlet
              ? propertyData?.shortlet?.globalEnergyPerformanceIndex
              : propertyData?.property?.globalEnergyPerformanceIndex
          }kWh / m²a | Energy class B`}
          showArrow
        >
          <div className="px-1 cursor-pointer md:px-8 min-w-10 flex items-center justify-center py-2 bg-[#C3D545]">
            B
          </div>
        </Tooltip>

        <Tooltip
          content={`${
            forShortlet
              ? propertyData?.shortlet?.globalEnergyPerformanceIndex
              : propertyData?.prope?.globalEnergyPerformanceIndex
          }kWh / m²a | Energy class C`}
          showArrow
        >
          <div className="px-1 cursor-pointer md:px-8 min-w-10 flex items-center justify-center py-2 bg-[#FFF12C]">
            C
          </div>
        </Tooltip>

        <Tooltip
          content={`${
            forShortlet
              ? propertyData?.shortlet?.globalEnergyPerformanceIndex
              : propertyData?.property?.globalEnergyPerformanceIndex
          }kWh / m²a | Energy class D`}
          showArrow
        >
          <div className="px-1 cursor-pointer md:px-8 min-w-10 flex items-center justify-center py-2 bg-[#EDB731]">
            D
          </div>
        </Tooltip>

        <Tooltip
          content={`${
            forShortlet
              ? propertyData?.shortlet?.globalEnergyPerformanceIndex
              : propertyData?.property?.globalEnergyPerformanceIndex
          }kWh / m²a | Energy class E`}
          showArrow
        >
          <div className="px-1 cursor-pointer md:px-8 min-w-10 flex items-center justify-center py-2 bg-[#D66F2C]">
            E
          </div>
        </Tooltip>

        <Tooltip
          content={`${
            forShortlet
              ? propertyData?.shortlet?.globalEnergyPerformanceIndex
              : propertyData?.property?.globalEnergyPerformanceIndex
          }kWh / m²a | Energy class F`}
          showArrow
        >
          <div className="px-1 cursor-pointer md:px-8 min-w-10 flex items-center justify-center py-2 bg-[#CC232A]">
            F
          </div>
        </Tooltip>

        <Tooltip
          content={`${
            forShortlet
              ? propertyData?.shortlet?.globalEnergyPerformanceIndex
              : propertyData?.property?.globalEnergyPerformanceIndex
          }kWh / m²a | Energy class G`}
          showArrow
        >
          <div className="px-1 cursor-pointer md:px-8 min-w-10 flex items-center justify-center py-2 bg-[#CC232A]">
            G
          </div>
        </Tooltip>

        <Tooltip
          content={`${
            forShortlet
              ? propertyData?.shortlet?.globalEnergyPerformanceIndex
              : propertyData?.property?.globalEnergyPerformanceIndex
          }kWh / m²a | Energy class H`}
          showArrow
        >
          <div className="px-1 cursor-pointer md:px-8 min-w-10 flex items-center justify-center py-2 bg-[#CC232A]">
            H
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default EnergyClass;
