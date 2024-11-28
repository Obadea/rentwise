import React, { useState } from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import swimming from "../../assets/swimmingpool.jpg";
import ReactFacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login";
import GoogleOauth from "./components/GoogleOauth";
import { googleLogout } from "@react-oauth/google";

import Profile from "./Profile";
function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);
  const [profiler, setProfiler] = useState(null);

  const logOut = () => {
    googleLogout();
    setProfiler(null);
  };
  // More on testing the facebook Api
  const responseFacebook = (response) => {
    if (response.accessToken) {
      // You can handle the login response here
      console.log("Login Success", response);
      setUser(response);
    } else {
      console.log("Login Failed", response);
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // Call API to submit form data
  // console.log("Form submitted:", { email, password });
  // Replace with your API call
  // fetch('/api/signin', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email, password }),
  // })
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error(error));
  // };
  if (profiler) {
    return <Profile profile={profiler} logOut={logOut} />; // Render Profile component if user is logged in
  }
  return (
    <div className="flex flex-col lg:flex-row  min-h-screen  ">
      <div className=" my-4 mx-auto px-3 lg:pl-24 lg:pr-16  lg:w-[50%] ">
        <div className="flex justify-between ">
          <Logo />
          <button className="font-bold text-sm text-customSearchblue lg:hidden">
            Back
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-8">
          <h2 className="text-customblue text-2xl font-bold ">Sign In</h2>
          <p className="text-base font-normal text-customBlackShade">
            Enter email address and password you registered with.
          </p>
        </div>
        <div className="mt-8">
          <form action="#" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="akomolafe1234@yahoo.com"
                className="border border-customBlackShade pl-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="****"
                className="border border-customBlackShade pl-2 py-1"
              />
              <Link
                to="/passwordreset"
                className="text-xs font-bold text-customSearchblue"
              >
                Forgot passsword?
              </Link>
            </div>

            <div className="mt-4 flex flex-col gap-6">
              <button className="w-full h-[52px] px-[10px] py-[20px] rounded-xl bg-customSearchblue text-white text-base flex justify-center items-center  font-bold ">
                Sign In
              </button>
              <p className="text-base font-normal text-customBlackShade text-center">
                Dont have an account?{" "}
                <Link to="/signup" className="text-customaccent">
                  Create an account
                </Link>
              </p>
            </div>
          </form>
          <div className="container mx-auto text-center my-6">
            <div className="or-tag relative inline-block mx-4 flex justify-center items-center">
              <div className="w-1/2 h-1 bg-gray-300"></div>
              <span className="mx-4 font-normal text-customStreetcolor text-[18px]">
                or
              </span>
              <div className="w-1/2 h-1 bg-gray-300"></div>
            </div>
          </div>
          <div className="flex gap-2 justify-between mb-3">
            <GoogleOauth
              user={user}
              setUser={setUser}
              profiler={profiler}
              setProfiler={setProfiler}
            />

            {/* <h4 className="flex border items-center gap-2 border-customBlackShade p-2 text-customStreetcolor font-normal text-base">
                <img
                  src="https://www.cdnlogo.com/logos/f/74/facebook.svg"
                  className="w-6"
                  alt="img"
                />
                Sign in Using Facebook
              </h4> */}

            {/* Testing the facebook API */}
            <div>
              <ReactFacebookLogin
                appId="" // Replace with your Facebook App ID
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                icon="fa-facebook"
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block md:flex-1 lg:flex-3 relative   ">
        <img src={swimming} alt="" className="h-full w-full object-cover" />
        <div className="absolute w-[75%] rounded-2xl py-4 px-3 gap-4 bottom-[10%] right-24 bg-[#00000087]">
          <h4 className="text-textcolor font-bold text-lg">
            Something to motivate
          </h4>
          <p className="font-medium text-sm text-[#FFFFFFA8]">
            Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent nunc.
            Sed aliquam mi at urna. Condimentum mi lorem aliquam mattis.
            Consequat est phasellus velit nisl justo dui. Faucibus dictum
            habitasse sed vel at nisl non. Nisi placerat purus sed varius
            euismod. Risus etiam purus donec neque. Non id mi maecenas quam
            convallis ut varius feugiat iaculis. Quis porttitor urna malesuada
            mattis in quam. Quam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
