import LandingPage from "./pages/landingpage/LandingPage";
import "./fonts.css";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signinpage/SignInPage";
import SignUpPage from "./pages/signuppage/SignUpPage.jsx";
// import PasswordReset from "./pages/passwordresetpage/PasswordReset.jsx";
// import OtpReset from "./pages/otpresetpage/OtpReset.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      {/* <Route path="/passwordreset" element={<PasswordReset />} />
      <Route path="/otpreset" element={<OtpReset />} /> */}
    </Routes>
  );
}

export default App;
