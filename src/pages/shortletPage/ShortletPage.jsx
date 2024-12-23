import React from "react";
import Header from "../../components/Header";
import Banner from "../landingpage/components/Banner";
import LocationSearch from "../landingpage/components/LocationSearch";
import Footer from "../../components/Footer";
import Partnership from "../landingpage/components/Partnership";
import ShortletCard from "./ShortletCard";

const ShortletPage = () => {
  return (
    <div>
      <Header newclassName="sticky" />
      <Banner forShortlet={true} />
      <ShortletCard />
      <Partnership />
      <Footer />
    </div>
  );
};

export default ShortletPage;
