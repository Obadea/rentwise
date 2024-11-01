import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";

function ComparePage() {
  return (
    <div className="bg-textcolor">
      <Header className="bg-[#FAFBFF]" newclassName="sticky  " />
      <div className="py-6 flex flex-col gap-3 px-20">
        <Breadcrumb />
        <h4 className="font-bold text-3xl text-customNameBlack">
          Compare Properties
        </h4>
      </div>
    </div>
  );
}

export default ComparePage;
