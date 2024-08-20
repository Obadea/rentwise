import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import TopProperties from "./components/TopProperties";
import StatemenComponent from "./components/StatemenComponent";
import Enquiry from "./components/Enquiry";

function LandingPage() {
  return (
    <>
      <Header />
      <Banner />
      <TopProperties />
      <StatemenComponent />
      <Enquiry />
    </>
  );
}

export default LandingPage;
