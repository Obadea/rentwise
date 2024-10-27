import React from "react";
import Header from "../../components/Header";
import Banner from "./components/Banner";
import TopProperties from "./components/TopProperties";
import StatemenComponent from "./components/StatemenComponent";
import Enquiry from "./components/Enquiry";
import Solution from "./components/Solution";
import Footer from "../../components/Footer";
import Partnership from "./components/Partnership";
import WiseeReport from "./components/WiseeReport";
import WisePopup from "./components/WisePopup";

function LandingPage() {
  return (
    <div>
      <Header newclassName="sticky" className="bg-white" />
      <Banner />
      {/* <ComingSoon /> */}
      <TopProperties />
      <WisePopup />
      <WiseeReport />

      {/* <WiseReport /> */}
      <StatemenComponent />
      <Enquiry />
      <Partnership />
      <Solution />
      {/* <LocationTest /> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
