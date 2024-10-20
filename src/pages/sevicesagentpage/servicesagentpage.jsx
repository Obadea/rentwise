import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import AgentCard from "../../components/AgentCard";

function ServicesAgentPage() {
  return (
    <div className="bg-textcolor">
      <Header />
      <div>
        <Breadcrumb />
        <h4 className="font-bold text-sm text-customNameBlack">
          A.C / Refrigeration Services around you
        </h4>
      </div>

      <div className="flex bg-DownloadHover py-2 gap-4 ">
        <input type="text" className="text-[#DCE0E0] " />
        <input type="text" />
        <input type="text" />
        <div>
          <button className="bg-customSearchblue text-base text-white font-medium rounded-md p-2 ">
            Search Agents
          </button>
        </div>
      </div>

      <div className="flex  gap-6 p-7 px-20">
        <AgentCard />

        {/* Search agent */}
        <div className="flex-1 flex flex-col bg-white gap-6 p-6">
          <h3 className="font-medium text-lg text-customdark">Find Agent</h3>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="All Cities"
                className="border border-[#DCE0E0] focus:border-[#DCE0E0] outline-none p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="All Categories"
                className="border border-[#DCE0E0] focus:border-[#DCE0E0] outline-none p-2 rounded-md"
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
