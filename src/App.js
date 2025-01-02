// // import LandingPage from "./pages/landingpage/LandingPage";
// import "./fonts.css";
// import { Route, Routes } from "react-router-dom";
// // import SignInPage from "./pages/signinpage/SignInPage";
// import SignUpPage from "./pages/signuppage/SignUpPage.jsx";
// import ComingSoon from "./pages/comingsoon/ComingSoon.jsx";
// import PropertyPage from "./pages/propertyPage/PropertyPage.jsx";
// import LandingPage from "./pages/landingpage/LandingPage.jsx";
// import AffordabilityCalculator from "./pages/affordabilitycalcuator/AffordabilityCalculator.jsx";
// import QuickServicesPage from "./pages/quickservices/QuickServicesPage.jsx";
// import ServicesAgentPage from "./pages/servicesagentpage/ServicesAgentPage.jsx";
// import AboutUsPage from "./pages/aboutuspage/AboutUsPage.jsx";
// import BlogPage from "./pages/blogpage/BlogPage.jsx";
// import WiseMenPage from "./pages/wisemenpage/WiseMenPage.jsx";
// import ContactUsPage from "./pages/contactuspage/ContactUsPage.jsx";
// import AccessCodePage from "./pages/accesscodepage/AccessCodePage.jsx";
// import ManageRentals from "./pages/managerentals/ManageRentals.jsx";
// import NotFoundPage from "./pages/notfoundpage/NotFoundPage.jsx";
// import SignInPage from "./pages/signinpage/SignInPage.jsx";

// import PasswordReset from "./pages/passwordresetpage/PasswordReset.jsx";
// import OtpReset from "./pages/otpresetpage/OtpReset.jsx";
// import SearchResultpage from "./pages/searchresultpage/SearchResultpage.jsx";
// import ComparePage from "./pages/comparepage/ComparePage.jsx";
// import OtpConfirm from "./pages/otpConfirm/OtpConfirm.jsx";
// import ResetPasswordOtp from "./pages/resetPasswordOtp/ResetPasswordOtp.jsx";
// import PropertiesPage from "./pages/propertiesPage/PropertiesPage.jsx";
// import ShortletPage from "./pages/shortletPage/ShortletPage.jsx";
// import ShortletDetailsPage from "./pages/shortletDetailsPage/ShortletDetailsPage.jsx";
// import FaqPage from "./pages/faqPage/FaqPage.jsx";
// import PrivacyPolicyPage from "./pages/privacyPolicyPage/PrivacyPolicyPage.jsx";
// import { Terminal } from "@mui/icons-material";
// import TermsAndConditions from "./pages/termsAndConditions/TermsAndConditions.jsx";
// import DisclaimerPage from "./pages/disclaimerPage/DisclaimerPage.jsx";

// function App() {
//   return (
//     <Routes>
//       {/* <Route path="/" element={<ComingSoon />} /> */}
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/signin" element={<SignInPage />} />
//       <Route path="/signup" element={<SignUpPage />} />
//       <Route path="/property" element={<PropertyPage />} />
//       <Route path="/properties" element={<PropertiesPage />} />
//       <Route path="/shortlet/property" element={<ShortletDetailsPage />} />
//       <Route
//         path="/Rent affordability calculator"
//         element={<AffordabilityCalculator />}
//       />
//       <Route path="/quickservices/agents" element={<ServicesAgentPage />} />
//       <Route path="/Quick services" element={<QuickServicesPage />} />
//       <Route path="/About us" element={<AboutUsPage />} />
//       <Route path="/blog" element={<BlogPage />} />
//       <Route path="/wisemen" element={<WiseMenPage />} />
//       <Route path="/contact us" element={<ContactUsPage />} />
//       <Route path="/accessId" element={<AccessCodePage />} />
//       <Route path="/rental management" element={<ManageRentals />} />
//       <Route path="/FAQ" element={<FaqPage />} />
//       <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
//       <Route path="/terms-conditions" element={<TermsAndConditions />} />
//       <Route path="/disclaimer" element={<DisclaimerPage />} />
//       <Route
//         path="/search"
//         element={<SearchResultpage forShortlet={false} />}
//       />
//       <Route path="/shortlet" element={<ShortletPage />} />
//       <Route path="/compare" element={<ComparePage />} />
//       <Route path="/confirmOTP" element={<OtpConfirm />} />
//       <Route path="*" element={<NotFoundPage />} />
//       <Route path="/passwordreset" element={<PasswordReset />} />
//       <Route path="/otpreset" element={<OtpReset />} />
//       <Route path="/reset_password_otp" element={<ResetPasswordOtp />} />
//     </Routes>
//   );
// }

// export default App;

// Public Pages
import "./fonts.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
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
import OtpConfirm from "./pages/otpConfirm/OtpConfirm.jsx";
import ResetPasswordOtp from "./pages/resetPasswordOtp/ResetPasswordOtp.jsx";
import PropertiesPage from "./pages/propertiesPage/PropertiesPage.jsx";
import ShortletPage from "./pages/shortletPage/ShortletPage.jsx";
import ShortletDetailsPage from "./pages/shortletDetailsPage/ShortletDetailsPage.jsx";
import FaqPage from "./pages/faqPage/FaqPage.jsx";
import PrivacyPolicyPage from "./pages/privacyPolicyPage/PrivacyPolicyPage.jsx";
import TermsAndConditions from "./pages/termsAndConditions/TermsAndConditions.jsx";
import DisclaimerPage from "./pages/disclaimerPage/DisclaimerPage.jsx";

// Layouts
import PublicLayout from "./layouts/PublicLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import RequireAuth from "./components/RequireAuth";
import Dashboard from "./dashboardPages/Dashboard";
import OpenSaverPage from "./pages/openSaverPage/OpenSaverPage.jsx";
import { useEffect } from "react";
import { initGA, logPageView } from "./utils/analytics.js";
import PaymentPage from "./pages/paymentPage/PaymentPage.jsx";

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname);
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(window.location.pathname); // Log initial pageview
  }, []);

  return (
    <>
      <TrackPageView /> {/* Track page views for all routes */}
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* <Route path="/property" element={<PropertyPage />} /> */}
          {/* <Route path="/properties" element={<PropertiesPage />} /> */}
          {/* <Route path="/shortlet/property" element={<ShortletDetailsPage />} /> */}
          <Route
            path="/Rent-affordability-calculator"
            element={<AffordabilityCalculator />}
          />
          {/* <Route path="/quickservices/agents" element={<ServicesAgentPage />} /> */}
          {/* <Route path="/Quick-services" element={<QuickServicesPage />} /> */}
          {/* <Route path="/About-us" element={<AboutUsPage />} /> */}
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          {/* <Route path="/wisemen" element={<WiseMenPage />} /> */}
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/accessId" element={<AccessCodePage />} />
          {/* <Route path="/manage-rentals" element={<ManageRentals />} /> */}
          <Route path="/FAQ" element={<FaqPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          {/* <Route
            path="/search"
            element={<SearchResultpage forShortlet={false} />}
          /> */}
          {/* <Route path="/shortlet" element={<ShortletPage />} /> */}
          {/* <Route path="/compare" element={<ComparePage />} /> */}
          <Route path="/confirmOTP" element={<OtpConfirm />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/otpreset" element={<OtpReset />} />
          <Route path="/reset_password_otp" element={<ResetPasswordOtp />} />
          <Route path="/open-saver-account" element={<OpenSaverPage />} />
          <Route path="/rentsaver-account" element={<OpenSaverPage />} />
          <Route path="/shortlet" element={<ShortletPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route
            path="/search"
            element={<SearchResultpage forShortlet={false} />}
          />
          <Route path="/manage-rentals" element={<ManageRentals />} />
          <Route path="/wisemen" element={<WiseMenPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/About-us" element={<AboutUsPage />} />
          <Route path="/our-services" element={<AboutUsPage />} />
          <Route path="/Quick-services" element={<QuickServicesPage />} />
          <Route path="/quickservices/agents" element={<ServicesAgentPage />} />
          <Route path="/shortlet/property" element={<ShortletDetailsPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/wisereport" element={<PropertiesPage />} />
          <Route path="/products" element={<ComingSoon />} />
          <Route path="/leadership" element={<ComingSoon />} />
          <Route path="/Partners" element={<ComingSoon />} />
          <Route path="/property" element={<PropertyPage />} />
          <Route path="/dashboard" element={<PropertyPage />} />
          <Route path="/shortlet/checkout" element={<PaymentPage />} />
        </Route>

        {/* Private (Dashboard) Routes */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DashboardLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} />

          {/* to be returned back */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
