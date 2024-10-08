import React from "react";
import Header from "../landingpage/components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import RoomIcon from "@mui/icons-material/Room";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import PropertyOverview from "./components/PropertyOverview";
import Description from "./components/Description";
import Address from "./components/Address";
import PropertyDetail from "./components/PropertyDetail";
import PhotoGrid from "./components/PhotoGrid";
import EnergyClass from "./components/EnergyClass";
import Features from "./components/Features";
import MortgageCalculator from "./components/MortgageCalculator";
import Video from "./components/Video";
import WalkScore from "./components/WalkScore";
import ScheduleTour from "./components/ScheduleTour";
import ContactInfo from "./components/ContactInfo";
import Review from "./components/Review";
import PostReview from "./components/PostReview";
import SimilarListing from "./components/SimilarListing";
import Footer from "../../components/Footer";

function PropertyPage() {
  return (
    <div>
      <Header />
      <div>{/* Horizontal navbar for each vertical component */}</div>
      <div className="flex flex-col-reverse lg:flex-row justify-between px-8 mt-24">
        <div className=" ml-4 flex flex-col gap-4 ">
          <Breadcrumb className="hidden lg:block" />
          <h3 className="font-bold text-3xl text-customblack1">Glory Suite</h3>
          <div className="flex gap-3">
            <button className="font-bold text-xs text-white bg-customSearchblue p-1">
              DOWNLOAD WISEREPORT{" "}
            </button>
            <button className="font-bold text-xs text-white bg-customNameBlack  p-1">
              FOR SALE
            </button>
          </div>
          <div className="flex text-customStreetcolor items-center  ">
            <RoomIcon />
            <p className="text-sm font-normal">Allen Avenue, Lagos</p>
          </div>
        </div>

        <div className="w-44 mx-4 flex flex-col gap-4 items-start lg:items-end">
          <div className=" hidden lg:flex gap-2 text-customStreetcolor  ">
            <FavoriteBorderIcon
              style={{
                fontSize: 26,
                border: "1px solid #666666",
                padding: "3px",
              }}
            />
            <ShareIcon
              style={{
                fontSize: 26,
                border: "1px solid #666666",
                padding: "3px",
              }}
            />
            <PrintIcon
              style={{
                fontSize: 26,
                border: "1px solid #666666",
                padding: "3px",
              }}
            />
          </div>
          <p className="font-bold text-2xl text-customaccent ">$876,000</p>
          <p className="font-normal text-base text-[#666666]">$7,600/sq ft</p>
        </div>
      </div>
      {/* <ScheduleTour /> */}
      {/* Overview component */}
      <PropertyOverview />
      <Description />
      <Address />
      <PropertyDetail />
      <PhotoGrid />
      <EnergyClass />
      <Features />
      <MortgageCalculator />
      <Video />
      <WalkScore />
      <ContactInfo />
      <Review />
      <PostReview />
      <SimilarListing />
      <Footer />
    </div>
  );
}

export default PropertyPage;
