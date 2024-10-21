import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import AgentCard from "../../components/AgentCard";
import SearchIcon from "@mui/icons-material/Search";
import ReusableSelect from "../../components/ReuseableSelect";

const locationOptions = [
  { value: "lagosIsland", label: "Lagos Island" },
  { value: "victoriaIsland", label: "Victoria Island" },
  { value: "lekki", label: "Lekki" },
  { value: "ajah", label: "Ajah" },
  { value: "surulere", label: "Surulere" },
];
function ServicesAgentPage() {
  return (
    <div className="bg-textcolor">
      <Header />
      <div className="py-6 flex flex-col gap-3 px-20">
        <Breadcrumb />
        <h4 className="font-bold text-sm text-customNameBlack">
          A.C / Refrigeration Services around you
        </h4>
      </div>

      <div className="flex bg-DownloadHover py-2 gap-4 px-2 lg:px-20">
        <div className=" flex-[3] flex gap-1 items-center bg-white rounded-sm px-1">
          <SearchIcon className="text-[#A1A7A8]" />
          <input
            type="text"
            className="text-black text-xl flex-[3]  px-2 focus:outline-none focus:border-transparent  "
            placeholder="Enter agent name"
          />
        </div>

        <ReusableSelect
          options={locationOptions}
          placeholder={"All Cities in Lagos"}
          onChange={(value) => console.log(value)}
          className=""
        />

        <ReusableSelect
          options={locationOptions}
          placeholder={"All Categories"}
          onChange={(value) => console.log(value)}
          className=""
        />
        <div>
          <button className="bg-customSearchblue text-base text-white font-medium rounded-md p-2 ">
            Search Agents
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  gap-6 p-7 px-2 lg:px-20 items-start">
        <div className="flex-[3] flex flex-col gap-5">
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
        </div>

        {/* Search agent */}
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
      </div>
    </div>
  );
}

export default ServicesAgentPage;
