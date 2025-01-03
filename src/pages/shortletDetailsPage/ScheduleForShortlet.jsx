import { Button } from "@nextui-org/react";
import React from "react";

const ScheduleForShortlet = ({ className }) => {
  return (
    <div
      className={` lg:flex -top-1 bottom-0 z-10 py-5 pt-7 flex-col w-full gap-4  px-4 mb-6   ${className}`}
    >
      <p className="text-center text-customSearchblue">Request Info</p>
      <div className="mt-4 p-4 bg-white rounded-md w-full">
        <p className="font-bold text-customdark mb-2">Make Findings</p>
        <Button variant="bordered" className="w-full">
          Video Chat Our Agent
        </Button>
        <p className="text-sm text-customdark mt-8 mb-2">
          Satisfied with apartment?
        </p>
        <Button color="primary" className="w-full">
          Proceed to Payment{" "}
        </Button>
      </div>
    </div>
  );
};

export default ScheduleForShortlet;
