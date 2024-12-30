import React, { useEffect, useState } from "react";
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
import { getAuthData } from "../../utils/helperFunction";

function LandingPage() {
  // checking if user is logged in

  const [userData, setUserData] = useState(null);

  const [proppertyProps, setPropertyProps] = useState({
    propertyType: "",
    city: "",
    bedrooms: "",
    price: "",
  });

  useEffect(() => {
    const data = getAuthData();

    if (data) {
      setUserData(data);
      // console.log(data);
    }
  }, []);

  useEffect(() => {
    console.log(proppertyProps);
  }, [proppertyProps]);

  return (
    <div>
      <Header newclassName="sticky" className="bg-white" userData={userData} />
      <Banner
        setPropertyProps={setPropertyProps}
        proppertyProps={proppertyProps}
      />
      {/* <ComingSoon /> */}
      <TopProperties proppertyProps={proppertyProps} />
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
