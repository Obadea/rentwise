import React from "react";
import Header from "../../components/Header";
import Banner from "../landingpage/components/Banner";
import LocationSearch from "../landingpage/components/LocationSearch";
import Footer from "../../components/Footer";
import Partnership from "../landingpage/components/Partnership";
import ShortletCard from "./ShortletCard";
import AboutBlogPost from "../aboutuspage/components/AboutBlogPost";

const ShortletPage = () => {
  return (
    <div>
      <Header newclassName="sticky" />
      <Banner forShortlet={true} />
      <ShortletCard />
      <div className="max-w-7xl mx-auto w-full">
        <AboutBlogPost forShortletPage={true} />
      </div>
      <Partnership />

      <Footer />
    </div>
  );
};

export default ShortletPage;
