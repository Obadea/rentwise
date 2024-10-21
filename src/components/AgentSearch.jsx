import React from "react";
import ReusableSelect from "./ReuseableSelect";
const locationOptions = [
  { value: "lagosIsland", label: "Lagos Island" },
  { value: "victoriaIsland", label: "Victoria Island" },
  { value: "lekki", label: "Lekki" },
  { value: "ajah", label: "Ajah" },
  { value: "surulere", label: "Surulere" },
];

function AgentSearch() {
  return (
    <div className="  flex-1 w-full lg:w-auto flex flex-col bg-white gap-6 p-6">
      <h3 className="font-medium text-lg text-customdark">Find Agent</h3>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <ReusableSelect
            options={locationOptions}
            placeholder={"All Cities in Lagos"}
            onChange={(value) => console.log(value)}
            className="w-full"
          />

          <ReusableSelect
            options={locationOptions}
            placeholder={"All Categories"}
            onChange={(value) => console.log(value)}
            className="w-full"
          />
          <input
            type="text"
            placeholder="Enter agent name"
            className="border border-[#DCE0E0] focus:border-[#DCE0E0] outline-none p-2 rounded-md"
          />
        </div>
        <div>
          <button className="bg-customSearchblue text-base text-white font-medium rounded-md p-2 w-full">
            Search Agents
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgentSearch;
