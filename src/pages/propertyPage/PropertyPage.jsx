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

function PropertyPage() {
  return (
    <div>
      <Header />
      <PropertyName />
      <div className="flex px-16">
        <div className="flex-1 ">
          <div>{/* Horizontal navbar for each vertical component */}</div>

          <ImageSlider />
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
          <ScheduleATour />
          <Video />
          <WalkScore />
          <ContactInfo />
          <Review />
          <PostReview />
          <SimilarListing />
          <Footer />
        </div>
        <div className="sticky top-40 z-10 f">
          <ScheduleATour />
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;
