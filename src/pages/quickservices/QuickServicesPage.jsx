import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import ArtisanService from "./components/ArtisanService";

function QuickServicesPage() {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-6">
        <Breadcrumb />
        <div className="flex flex-col gap-1">
          <h4 className="font-medium text-base text-customStreetcolor">
            Victoria Island, Lagos
          </h4>
          <button className="font-normal text-sm text-customSearchblue">
            Edit service location
          </button>
        </div>
        <div className="flex flex-col gap-16">
          <h2 className="font-bold text-3xl text-customdark text-center">
            What do you need help with today?
          </h2>
          <div className="flex flex-row justify-center  flex-wrap gap-4">
            <ArtisanService />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickServicesPage;
