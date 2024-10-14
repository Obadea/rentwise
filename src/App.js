// import LandingPage from "./pages/landingpage/LandingPage";
import "./fonts.css";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signinpage/SignInPage";
import SignUpPage from "./pages/signuppage/SignUpPage.jsx";
import ComingSoon from "./pages/comingsoon/ComingSoon.jsx";
import PropertyPage from "./pages/propertyPage/PropertyPage.jsx";
import LandingPage from "./pages/landingpage/LandingPage.jsx";
import AffordabilityCalculator from "./pages/affordabilitycalcuator/AffordabilityCalculator.jsx";
import QuickServicesPage from "./pages/quickservices/QuickServicesPage.jsx";
// import PasswordReset from "./pages/passwordresetpage/PasswordReset.jsx";
// import OtpReset from "./pages/otpresetpage/OtpReset.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<ComingSoon />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/apartment/properties" element={<PropertyPage />} />
      <Route
        path="/affordabiltycalculator"
        element={<AffordabilityCalculator />}
      />
      <Route path="/quickservices" element={<QuickServicesPage />} />
      {/* <Route path="/passwordreset" element={<PasswordReset />} />
      <Route path="/otpreset" element={<OtpReset />} /> */}
    </Routes>
  );
}

export default App;
