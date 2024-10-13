import React from "react";
import Header from "../../components/Header";

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
import ImageSlider from "./components/ImageSlider";
import PropertyName from "./components/PropertyName";
import ScheduleATour from "./components/ScheduleATour";
import ScrollSpy from "react-ui-scrollspy";
import VirtualTour from "./components/VirtualTour";

function PropertyPage() {
  return (
    <div>
      <Header className="relative" />
      <div>
        <nav className=" hidden lg:flex fixed top-0 z-20 bg-white justify-between w-full py-5 px-6 font-bold ">
          <a href="#description" data-to-scrollspy-id="description">
            Description
          </a>
          <p data-to-scrollspy-id="address">Address</p>
          <p data-to-scrollspy-id="details">Details</p>
          <p data-to-scrollspy-id="energy">Energy Class</p>
          <p data-to-scrollspy-id="features">Features</p>
          {/* <p data-to-scrollspy-id="schedule">Scehdule a Plan</p> */}
          <p data-to-scrollspy-id="video">Video</p>
          <p data-to-scrollspy-id="virtual">360° Virtual Tour</p>
          <p data-to-scrollspy-id="contact">Contact</p>
          <p data-to-scrollspy-id="review">Reviews</p>
          <p data-to-scrollspy-id="imilar">Similar Listing</p>
        </nav>
      </div>
      <PropertyName className="hidden lg:flex" />
      <div className=" px-3 flex lg:px-16">
        <div className="flex-1 ">
          <ImageSlider />
          <PropertyName className="flex lg:hidden" />
          {/* <ScheduleTour /> */}
          {/* Overview component */}
          <PropertyOverview />

          <ScrollSpy>
            <Description id="description" />
            <Address id="address" />
            <PropertyDetail id="details" />
            <PhotoGrid />
            <EnergyClass id="energy" />
            <Features id="features" />
            <MortgageCalculator />
            {/* <ScheduleATour id="schedule" /> */}
            <Video id="video" />
            <VirtualTour id="virtual" />
            <WalkScore />
            <ContactInfo id="contact" />
            <Review id="review" />
            <PostReview />
            <SimilarListing id="imilar" />
          </ScrollSpy>
        </div>
        <div className=" ">
          <ScheduleATour />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PropertyPage;
