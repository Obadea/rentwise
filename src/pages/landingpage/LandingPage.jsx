import React, { useState } from "react";
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
import WiseeReport from "./components/WiseeReport";
import SearchBetter from "./components/SearchBetter"
import MultiIncomeAdd from "./components/MultiIncomeAdd"

function LandingPage() {
  const [activePopup, setActivePopup]=useState("none");
  return (
    <>
      <Header />
      <Banner />
        <TopProperties setActivePopup={setActivePopup} /> 
      {/* // :activePopup==="pop2"? <SearchBetter setActivePopup={setActivePopup} />
      // :activePopup==="pop3"? <MultiIncomeAdd setActivePopup={setActivePopup} /> :null}  */}

      
      <WiseeReport />
      {/* <WiseReport /> */}
      <StatemenComponent />
      <Enquiry />
      <Partnership />
      <Solution />
      {/* <LocationTest /> */}
      <Footer />
    </>
  );
}

export default LandingPage;
