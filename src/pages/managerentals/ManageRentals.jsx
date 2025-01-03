import React, { useState } from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import ManageRentalsCard from "./components/ManageRentalsCard";
import { Image, Button } from "@nextui-org/react";
import rentalImage from "../../assets/rentalimage.png";
import { manageRentalCardData } from "../../utils/constants";
import {
  SvgArrowForwardIcon,
  SvgPhoneIcon,
  SvgUserIcon,
} from "../../utils/SvgIcons";
import Footer from "../../components/Footer";

function ManageRentals() {
  // State to control the number of items displayed
  const [visibleCount, setVisibleCount] = useState(9);

  // Function to show more items
  const handleShowMore = () => {
    setVisibleCount(manageRentalCardData.length); // Show all items
  };

  // Function to hide additional items (if needed)
  const handleShowLess = () => {
    setVisibleCount(9); // Reset to show only 9 items
  };

  // Items to display based on the visibleCount
  const visibleItems = manageRentalCardData.slice(0, visibleCount);

  return (
    <div>
      <Header newclassName="sticky" className="bg-textcolor" />
      <div className="xl:max-w-[1300px] lg:max-w-7xl m-auto">
        <div className="mt-7 pl-7">
          <Breadcrumb />
        </div>
        <div className="grid lg:grid-cols-2 grid-rows-[0.2fr_0.4fr]  lg:grid-rows-1">
          <p className="lg:text-[60px] text-customNameBlack font-bold lg:mt-48 w-[90%] mt-3  text-center lg:text-start text-[28px] mx-auto">
            A fast and easy way to manage your rentals seamlessly
          </p>
          <Image
            className="w-[80%] lg:w-[90%] m-auto"
            src={rentalImage}
            draggable={false}
            disableSkeleton
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
          {visibleItems.map((item, index) => (
            <ManageRentalsCard
              key={index}
              img={item.image}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {visibleCount < manageRentalCardData.length ? (
            <Button onPress={handleShowMore} color="primary">
              Show More
            </Button>
          ) : (
            <Button onPress={handleShowLess} color="primary" variant="bordered">
              Show Less
            </Button>
          )}
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
