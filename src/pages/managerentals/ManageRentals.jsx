import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";

function ManageRentals() {
  return (
    <div>
      <Header newclassName="sticky" className="bg-textcolor" />
      <Breadcrumb className="my-12" />
      <div className="flex flex-col lg:flex-row ">
        <div className="flex-1">
          <h3 className="font-bold text-4xl text-customNameBlack">
            A fast and easy way to manage your rentals seamlessly
          </h3>
        </div>
        <div className="flex-1">
          <img src="" alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col mx-"></div>
    </div>
  );
}

export default ManageRentals;
