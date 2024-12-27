import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import ArtisanService from "./components/ArtisanService";
import Footer from "../../components/Footer";
import { Button } from "@nextui-org/react";
import LocationGetter from "./components/LocationGetter";
// import { Button } from "@mui/material";

function QuickServicesPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFF]">
      <Header className="fixed bg-white" />
      <div className="flex flex-col gap-3 lg:px-10 px-3 w-full lg:w-[1010px] xl:w-[1200px] justify-center m-auto">
        <div className="flex flex-col gap-1 lg:mt-28  mt-16">
          <Breadcrumb />
          {/* <h4 className="font-medium text-base text-customStreetcolor mt-6">
            Victoria Island, Lagos
          </h4>
          <button className="font-normal text-sm text-start text-customSearchblue">
            Edit service location
          </button> */}
          <LocationGetter />
        </div>
        <div className="flex flex-col gap-8 py-6">
          <h2 className="font-bold lg:text-3xl text-customdark text-center text-2xl">
            What do you need help with today?
          </h2>
          <div className="flex flex-col  md:flex-row justify-center items-center  flex-wrap gap-4">
            <ArtisanService />
            <div className="flex lg:justify-end w-full pr-5  my-8 justify-center">
              <Button
                variant="bordered"
                color="primary"
                className="border-1 font-semibold w-[70%] m-auto lg:m-0 lg:w-auto"
              >
                Learn How it Works
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QuickServicesPage;
