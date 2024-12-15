import React from 'react';
import Header from '../../components/Header';
import Breadcrumb from '../../components/BreadCrumb';
import { useLocation } from 'react-router-dom';
import CompareProperties from './component/CompareProperties';

function ComparePage() {
  // Comparing Data
  const { state } = useLocation();

  return (
    <div className="bg-textcolor">
      <Header className="bg-[#FAFBFF]" newclassName="sticky  " />
      <div className="py-6 flex flex-col gap-3 px-20">
        <Breadcrumb />
        <h4 className="font-bold text-3xl text-customNameBlack">
          Compare Properties
        </h4>

        {/* Compare Component */}
        <div className="flex mt-14 ">
          <div className="w-fit mt-36 text-right font-semibold capitalize">
            <p> </p>
            <p className="bg-addpropertybg pl-3 pr-4 py-1">Title</p>
            <p className="pl-3 pr-4 py-1">Address</p>
            <p className="bg-addpropertybg pl-3 pr-4 py-1">Bedroom</p>
            <p className="pl-3 pr-4 py-1">Bathroom</p>
            <p className="bg-addpropertybg pl-3 pr-4 py-1">sittingroom</p>
            <p className="pl-3 pr-4 py-1">Amount</p>
          </div>
          <CompareProperties compareData={state} />
        </div>
      </div>
    </div>
  );
}

export default ComparePage;
