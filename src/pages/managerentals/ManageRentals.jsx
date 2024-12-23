import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import ManageRentalsCard from "./components/ManageRentalsCard";
import { Image } from "@nextui-org/react";
import rentalImage from "../../assets/rentalimage.png";
import { manageRentalCardData } from "../../utils/constants";
import {
  SvgArrowForwardIcon,
  SvgPhoneIcon,
  SvgUserIcon,
} from "../../utils/SvgIcons";
import Footer from "../../components/Footer";

function ManageRentals() {
  return (
    <div>
      <Header newclassName="sticky" className="bg-textcolor" />
      <div className="xl:max-w-[1300px] lg:max-w-7xl m-auto">
        <div className="mt-7 ">
          <Breadcrumb />
        </div>
        <div className="grid lg:grid-cols-2 grid-rows-[0.4fr_1fr] ">
          <p className="lg:text-[40px] text-customNameBlack font-bold lg:mt-48 w-[90%] mt-1  text-center text-[28px] m-auto">
            A fast and easy way to manage your rentals seamlessly
          </p>
          <Image
            width="90%"
            src={rentalImage}
            draggable={false}
            className="m-auto"
          />
        </div>
        <div>
          <p className="lg:text-[40px] text-customNameBlack font-bold mt-10 text-center text-[28px]">
            Rent and Manage your Properties
          </p>
          <p className="text-customNameBlack text-tiny text-center lg:w-[36%] m-auto w-[90%]">
            Increase visibility for your listing, streamline maintenance
            requests, or manage rent collection seamlessly, we are here to
            assist you!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-7xl mx-auto mt-7">
          {manageRentalCardData.map((item) => (
            <ManageRentalsCard
              img={item.image}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
            />
          ))}
        </div>
        <div className="bg-white p-12 w-full ">
          <p className="lg:text-[32px] text-center text-customNameBlack font-bold mt-18 w-[90%] m-auto text-[22px]">
            How it works
          </p>
          <div className="flex lg:gap-4 items-center justify-center mt-10 lg:flex-row flex-col gap-10">
            <div className="flex flex-col gap-2 items-center max-w-[220px]">
              <SvgUserIcon />
              <p className="text-center text-customResultqueryGrey font-semibold">
                Create Account
              </p>
              <p className="text-center text-sm text-customBlackShade">
                Create an account and enjoy rentwise services
              </p>
            </div>
            <SvgArrowForwardIcon className="hidden lg:block" />
            <div className="flex flex-col gap-2 items-center max-w-[220px]">
              <SvgPhoneIcon />
              <p className="text-center text-customResultqueryGrey font-semibold">
                Speak with an agent
              </p>
              <p className="text-center text-sm text-customBlackShade">
                Speak with an agent and get verified{" "}
              </p>
            </div>
            <SvgArrowForwardIcon className="hidden lg:block" />
            <div className="flex flex-col gap-2 items-center max-w-[220px]">
              <SvgPhoneIcon />
              <p className="text-center text-customResultqueryGrey font-semibold">
                Lease your property
              </p>
              <p className="text-center text-sm text-customBlackShade">
                Add your property and get it managed
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ManageRentals;
