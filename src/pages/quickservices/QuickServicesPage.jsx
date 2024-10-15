import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import ArtisanService from "./components/ArtisanService";

function QuickServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex flex-col gap-3 px-20">
        <Breadcrumb />
        <div className="flex flex-col gap-1">
          <h4 className="font-medium text-base text-customStreetcolor">
            Victoria Island, Lagos
          </h4>
          <button className="font-normal text-sm text-start text-customSearchblue">
            Edit service location
          </button>
        </div>
        <div className="flex flex-col gap-8 py-6">
          <h2 className="font-bold text-3xl text-customdark text-center">
            What do you need help with today?
          </h2>
          <div className="flex flex-col  md:flex-row justify-center items-center  flex-wrap gap-4">
            <ArtisanService />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickServicesPage;
