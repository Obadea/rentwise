import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import TopProperties from "./components/TopProperties";
import StatemenComponent from "./components/StatemenComponent";
import Enquiry from "./components/Enquiry";
import Solution from "./components/Solution";
import Footer from "./components/Footer";
import Partnership from "./components/Partnership";
import WiseReport from "./components/WiseReport";
import LocationTest from "./components/LocationTest";

function LandingPage() {
  return (
    <>
      <Header />
      <Banner />
      <TopProperties />
      <WiseReport />
      <StatemenComponent />
      <Enquiry />
      <Partnership />
      <Solution />
      <LocationTest />
      <Footer />
    </>
  );
}

export default LandingPage;
