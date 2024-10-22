import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import AgentCard from "../../components/AgentCard";
import AgentSearch from "../../components/AgentSearch";

function StatesMenPage() {
  return (
    <div>
      <Header className="bg-[#FAFBFF]" />
      <div className="py-6 flex flex-col gap-3 px-20">
        <Breadcrumb />
        <h2 className="font-bold text-4xl text-customNameBlack">State-men</h2>
      </div>
      <div className="flex flex-col lg:flex-row  gap-6 p-7 px-2 lg:px-20 items-start">
        {/* statesmen */}
        <div className="flex-[3] flex flex-col gap-5">
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
        </div>

        {/* search agent */}
        <AgentSearch />
      </div>
    </div>
  );
}

export default StatesMenPage;
