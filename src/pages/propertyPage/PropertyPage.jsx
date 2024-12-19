import React, { useEffect, useState } from "react";
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
// import ScheduleTour from "./components/ScheduleTour";
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
// import ImageMapChanger from "./components/ImageMapChanger";
import scheduleImg from "../../assets/scheduleImage.png";
import { getSingleProperty } from "../../utils/endpoint";
import { useQuery } from "@tanstack/react-query";

function PropertyPage() {
  // const urlParams = new URLSearchParams(window.location.search);
  // const [propertyID, setPropertyID] = useState(urlParams.get("id"));

  const [propertyID, setPropertyID] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  });

  const { status, data, error, isLoading, refetch } = useQuery({
    queryKey: ["singleProperty", propertyID],
    queryFn: () => getSingleProperty(propertyID),
    enabled: !!propertyID, // Only fetch if propertyID is defined
  });

  // Update `propertyID` when URL changes
  useEffect(() => {
    const handleUrlChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const newID = urlParams.get("id");
      if (newID !== propertyID) {
        setPropertyID(newID);
      }
    };

    // // Listen for URL changes (e.g., history.pushState/popstate)
    // window.addEventListener("popstate", handleUrlChange);

    // return () => {
    //   window.removeEventListener("popstate", handleUrlChange);
    // };
  }, [propertyID]);

  // Log data when loading completes
  useEffect(() => {
    if (!isLoading) {
      console.log(data);
    }
  }, [isLoading, data]);

  return (
    <div className="bg-[#FAFBFF]">
      <Header className="relative x" />
      <div>
        <nav className=" hidden lg:flex fixed top-0 z-20 bg-white justify-between w-full py-5 px-6 font-bold ">
          <a href="#overview" data-to-scrollspy-id="overview">
            Overview
          </a>
          <a href="#description" data-to-scrollspy-id="description">
            Description
          </a>
          <a href="#description" data-to-scrollspy-id="address">
            Address
          </a>
          <a href="#details" data-to-scrollspy-id="details">
            Details
          </a>
          <a href="#energy" data-to-scrollspy-id="energy">
            Energy Class
          </a>
          <a href="#features" data-to-scrollspy-id="features">
            Features
          </a>
          <a href="#mortgage" data-to-scrollspy-id="mortgage">
            Mortgage Calculator
          </a>
          {/* <p data-to-scrollspy-id="schedule">Scehdule a Plan</p> */}
          <a href="#video" data-to-scrollspy-id="video">
            Video
          </a>
          <a href="#virtual" data-to-scrollspy-id="virtual">
            360° Virtual Tour
          </a>
          <a href="#workscore" data-to-scrollspy-id="workscore">
            WorkScore
          </a>
          <a href="#contact" data-to-scrollspy-id="contact">
            Contact
          </a>
          <a href="#review" data-to-scrollspy-id="review">
            Reviews
          </a>
          <a href="#imilar" data-to-scrollspy-id="imilar">
            Similar Listing
          </a>
        </nav>
      </div>
      <PropertyName propertyData={data} className="hidden lg:flex" />
      <div className=" px-2 flex gap-3 lg:px-10">
        <div className="flex-[3] ">
          {/* <ImageMapChanger className="flex lg:hidden" /> */}
          <ImageSlider propertyData={data} isLoading={isLoading} />
          <PropertyName className="flex lg:hidden" />
          {/* <Schedule Tour /> */}
          {/* Overview component */}

          <ScrollSpy>
            <PropertyOverview id="overview" propertyData={data} />
            <Description id="description" propertyData={data} />
            <Address id="address" propertyData={data} />
            {/* Note:todo */}
            <PropertyDetail id="details" propertyData={data} />
            <PhotoGrid propertyData={data} />
            <EnergyClass id="energy" propertyData={data} />
            <Features id="features" propertyData={data} />
            <MortgageCalculator id="mortgage" propertyData={data} />
            <div className="flex justify-center items-center mt-6 bg-white ">
              <div className="flex-[2] hidden lg:flex">
                <img src={scheduleImg} alt="" className="w-full" />
              </div>
              <ScheduleATour
                id="schedule"
                className="relative top-0 flex-[2]"
                newClassName="hidden"
              />
            </div>

            <Video id="video" propertyData={data} />
            <VirtualTour id="virtual" propertyData={data} />
            <WalkScore id="workscore" propertyData={data} />
            <ContactInfo id="contact" propertyData={data} />
            <Review id="review" propertyData={data} />
            <PostReview propertyID={data?.property?.property?.id} />
            <SimilarListing id="imilar" />
          </ScrollSpy>
        </div>
        <div className="flex-0 items-center justify-center ">
          <ScheduleATour className="sticky hidden" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PropertyPage;
