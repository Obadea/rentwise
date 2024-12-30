import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Skeleton } from "@nextui-org/react";

function Features({ id, propertyData, forShortlet, isLoading }) {
  if (isLoading) {
    return <Skeleton className="w-[92%] h-60 rounded-md mt-6 mx-auto" />;
  }

  return (
    <div id={id}>
      <div className="px-4 py-6 lg:p-8 mt-12 flex flex-col  gap-4 bg-white ">
        <div className="flex justify-between py-4 border-b-2 border-[#D9D9D9]  ">
          <h4 className=" font-medium text-xl text-customdark">Features</h4>
        </div>
        <div className="text-lg font-normal text-customNameBlack flex flex-col gap-3 md:flex-row md:flex-wrap text-nowrap">
          {forShortlet
            ? propertyData?.shortlet?.features?.map((item) => (
                <h4 className="w-52 flex items-center">
                  <CheckCircleOutlineIcon />
                  {item}
                </h4>
              ))
            : propertyData?.property?.features?.map((item) => (
                <h4 className="w-52 flex items-center">
                  <CheckCircleOutlineIcon />
                  {item}
                </h4>
              ))}
          {/* <h4 className="w-52">
            <CheckCircleOutlineIcon />
            Air Conditioning
          </h4>
          <h4 className="w-52">
            <CheckCircleOutlineIcon />
            Barbeque
          </h4>
          <h4 className="w-52">
            <CheckCircleOutlineIcon />
            Dryer
          </h4>
          <h4 className="w-52">
            <CheckCircleOutlineIcon />
            Freezer
          </h4>
          <h4 className="w-52">
            <CheckCircleOutlineIcon />
            Air Conditioning
          </h4>
          <h4 className="w-52">
            <CheckCircleOutlineIcon />
            Barbeque
          </h4>
          <h4 className="w-52">
            <CheckCircleOutlineIcon />
            Dryer
          </h4>
          <h4 className="w-52">
            <CheckCircleOutlineIcon />
            Freezer
          </h4>
          <h4 className="w-52">
            <CheckCircleOutlineIcon />
            Air Conditioning
          </h4>
          <h4 className="w-52">
            <CheckCircleOutlineIcon />
            Barbeque
          </h4>
          <h4 className="w-52">
            <CheckCircleOutlineIcon />
            Dryer
          </h4>
          <h4 className="w-52">
            <CheckCircleOutlineIcon />
            Freezer
          </h4> */}
        </div>
      </div>
    </div>
  );
}

export default Features;
