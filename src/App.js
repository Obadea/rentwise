import LandingPage from "./pages/landingpage/LandingPage";
import "./fonts.css";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signinpage/SignInPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
  );
}

export default App;
