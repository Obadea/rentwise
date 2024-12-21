import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import { useLocation } from "react-router-dom";
import CompareProperties from "./component/CompareProperties";
import { propertyTitles } from "../../utils/constants";

function ComparePage() {
  // Comparing Data
  const { state } = useLocation();

  return (
    <div className="bg-textcolor">
      <Header className="bg-[#FAFBFF]" newclassName="sticky  " />
      <div className="py-6 flex flex-col gap-3 lg:px-20 px-3">
        <Breadcrumb />
        <h4 className="font-bold lg:text-3xl text-customNameBlack text-xl">
          Compare Properties
        </h4>

        {/* Compare Component */}
        <div className="flex mt-14 ">
          <div className="w-full mt-36 lg:mt-48 text-right font-semibold capitalize text-nowrap">
            {propertyTitles.map((title, index) => (
              <p
                key={index}
                className={`${
                  index % 2 == 0 ? "bg-addpropertybg" : ""
                } lg:pl-3 pl-0  pr-4 py-1 text-nowrap`}
              >
                {title}
              </p>
            ))}
          </div>
          <CompareProperties compareData={state} />
        </div>
      </div>
    </div>
  );
}

export default ComparePage;
