import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import ArtisanService from "./components/ArtisanService";
import Footer from "../../components/Footer";

function QuickServicesPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFF]">
      <Header className="fixed bg-white" />
      <div className="flex flex-col gap-3 lg:px-20 px-3">
        <Breadcrumb />
        <div className="flex flex-col gap-1 lg:mt-2  mt-16">
          <h4 className="font-medium text-base text-customStreetcolor">
            Victoria Island, Lagos
          </h4>
          <button className="font-normal text-sm text-start text-customSearchblue">
            Edit service location
          </button>
        </div>
        <div className="flex flex-col gap-8 py-6">
          <h2 className="font-bold lg:text-3xl text-customdark text-center text-2xl">
            What do you need help with today?
          </h2>
          <div className="flex flex-col  md:flex-row justify-center items-center  flex-wrap gap-4">
            <ArtisanService />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QuickServicesPage;
