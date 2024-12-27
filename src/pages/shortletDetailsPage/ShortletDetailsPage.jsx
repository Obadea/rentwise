import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSingleShortlet } from "../../utils/endpoint";
import Header from "../../components/Header";
import PropertyName from "../propertyPage/components/PropertyName";
import ImageSlider from "../propertyPage/components/ImageSlider";
import ScrollSpy from "react-ui-scrollspy";
import PropertyOverview from "../propertyPage/components/PropertyOverview";
import Description from "../propertyPage/components/Description";
import Address from "../propertyPage/components/Address";
import PropertyDetail from "../propertyPage/components/PropertyDetail";
import PhotoGrid from "../propertyPage/components/PhotoGrid";
import EnergyClass from "../propertyPage/components/EnergyClass";
import Features from "../propertyPage/components/Features";
import MortgageCalculator from "../propertyPage/components/MortgageCalculator";
import ScheduleATour from "../propertyPage/components/ScheduleATour";
import VirtualTour from "../propertyPage/components/VirtualTour";
import WalkScore from "../propertyPage/components/WalkScore";
import ContactInfo from "../propertyPage/components/ContactInfo";
import Review from "../propertyPage/components/Review";
import PostReview from "../propertyPage/components/PostReview";
import SimilarListing from "../propertyPage/components/SimilarListing";
import Footer from "../../components/Footer";
import scheduleImg from "../../assets/scheduleImage.png";
import ShortletPropertyName from "./ShortletPropertyName";
import ScheduleForShortlet from "./ScheduleForShortlet";

const ShortletDetailsPage = () => {
  const [propertyID, setPropertyID] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  });

  const { status, data, error, isLoading, refetch } = useQuery({
    queryKey: ["singleProperty", propertyID],
    queryFn: () => getSingleShortlet(propertyID),
    enabled: !!propertyID, // Only fetch if propertyID is defined
  });

  useEffect(() => {
    const handleUrlChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const newID = urlParams.get("id");
      if (newID !== propertyID) {
        setPropertyID(newID);
      }
    };
  }, [propertyID]);

  // Log data when loading completes
  useEffect(() => {
    if (!isLoading) {
      console.log(data);
    }
  }, [isLoading, data]);

  return (
    <div className="bg-[#FAFBFF]">
      <Header className="fixed lg:relative x bg-white " />
      <div>
        <nav className=" hidden lg:flex fixed top-0 z-[25] bg-white justify-between w-full py-5 px-6 font-bold">
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
          <a href="#virtual" data-to-scrollspy-id="virtual">
            360° Virtual Tour
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
      {/* <PropertyName
        propertyData={data}
        className="hidden lg:flex lg:px-[100px]"
      /> */}
      <ShortletPropertyName
        shortletData={data}
        className="hidden lg:flex lg:px-[100px]"
      />
      <div className=" px-2 flex gap-3 lg:pl-[110px] lg:pr-[40px]">
        <div className="flex-[3] w-full">
          <ImageSlider
            propertyData={data}
            isLoading={isLoading}
            forShortlet={true}
          />
          <ShortletPropertyName
            shortletData={data}
            className="flex lg:hidden"
            for
          />
          {/* <PropertyName propertyData={data} className="flex lg:hidden" /> */}

          <ScrollSpy>
            <PropertyOverview
              id="overview"
              propertyData={data}
              forShortlet={true}
            />
            <Description
              id="description"
              propertyData={data}
              isLoading={isLoading}
              forShortlet={true}
            />
            <Address id="address" propertyData={data} forShortlet={true} />

            <EnergyClass id="energy" propertyData={data} forShortlet={true} />
            <Features
              id="features"
              propertyData={data}
              forShortlet={true}
              isLoading={isLoading}
            />
            <VirtualTour id="virtual" propertyData={data} forShortlet={true} />

            {/* todo */}
            <ContactInfo id="contact" propertyData={data} forShortlet={true} />
            <Review id="review" propertyData={data} forShortlet={true} />
            <PostReview propertyID={data?.shortlet?._id} forShortlet={true} />
            <ScheduleForShortlet className="lg:hidden block" />
            <SimilarListing id="imilar" />
            {/*
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
            <WalkScore id="workscore" propertyData={data} />
             */}
          </ScrollSpy>
        </div>
        <div className="flex-0 items-center justify-center ">
          {/* <ScheduleATour className="sticky hidden" /> */}
          <ScheduleForShortlet className="sticky" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShortletDetailsPage;
