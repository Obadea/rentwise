import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";

function StatesMenPage() {
  return (
    <div>
      <Header className="bg-[#FAFBFF]" />
      <div className="py-6 flex flex-col gap-3 px-20">
        <Breadcrumb />
        <h2 className="font-bold text-4xl text-customNameBlack">State-men</h2>
      </div>
    </div>
  );
}

export default StatesMenPage;
