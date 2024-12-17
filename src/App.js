// import LandingPage from "./pages/landingpage/LandingPage";
import "./fonts.css";
import { Route, Routes } from "react-router-dom";
// import SignInPage from "./pages/signinpage/SignInPage";
import SignUpPage from "./pages/signuppage/SignUpPage.jsx";
import ComingSoon from "./pages/comingsoon/ComingSoon.jsx";
import PropertyPage from "./pages/propertyPage/PropertyPage.jsx";
import LandingPage from "./pages/landingpage/LandingPage.jsx";
import AffordabilityCalculator from "./pages/affordabilitycalcuator/AffordabilityCalculator.jsx";
import QuickServicesPage from "./pages/quickservices/QuickServicesPage.jsx";
import ServicesAgentPage from "./pages/servicesagentpage/ServicesAgentPage.jsx";
import AboutUsPage from "./pages/aboutuspage/AboutUsPage.jsx";
import BlogPage from "./pages/blogpage/BlogPage.jsx";
import WiseMenPage from "./pages/wisemenpage/WiseMenPage.jsx";
import ContactUsPage from "./pages/contactuspage/ContactUsPage.jsx";
import AccessCodePage from "./pages/accesscodepage/AccessCodePage.jsx";
import ManageRentals from "./pages/managerentals/ManageRentals.jsx";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage.jsx";
import SignInPage from "./pages/signinpage/SignInPage.jsx";

import PasswordReset from "./pages/passwordresetpage/PasswordReset.jsx";
import OtpReset from "./pages/otpresetpage/OtpReset.jsx";
import SearchResultpage from "./pages/searchresultpage/SearchResultpage.jsx";
import ComparePage from "./pages/comparepage/ComparePage.jsx";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<ComingSoon />} /> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<ComingSoon />} />
      <Route path="/property" element={<PropertyPage />} />
      <Route
        path="/Rent affordability calculator"
        element={<AffordabilityCalculator />}
      />
      <Route path="/quickservices/agents" element={<ServicesAgentPage />} />
      <Route path="/Quick services" element={<QuickServicesPage />} />
      <Route path="/About us" element={<AboutUsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/wisemen" element={<WiseMenPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/accessId" element={<AccessCodePage />} />
      <Route path="/landlord/manage rentals" element={<ManageRentals />} />
      <Route
        path="/search"
        element={<SearchResultpage forShortlet={false} />}
      />
      <Route
        path="/shortlet"
        element={<SearchResultpage forShortlet={true} />}
      />
      <Route path="/compare" element={<ComparePage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/search" element={<SearchResultpage />} />

      <Route path="/passwordreset" element={<PasswordReset />} />
      <Route path="/otpreset" element={<OtpReset />} />
    </Routes>
  );
}

export default App;
