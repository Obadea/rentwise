import React, { useState } from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

function Passwordreset() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to submit form data
    console.log("Form submitted:", { email, password });
    // Replace with your API call
    // fetch('/api/signin', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password }),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
  };

  return (
    <div className="flex flex-col lg:flex-row  min-h-[500px]  ">
      <div className=" my-4 mx-auto px-3 lg:pl-24 lg:pr-16  lg:w-[50%] ">
        <div className="flex justify-between ">
          <Logo />
          <button className="font-bold text-sm text-customSearchblue lg:hidden">
            Back
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-8">
          <h2 className="text-customblue text-2xl font-bold ">
            Password Reset
          </h2>
          <p className="text-base font-normal text-customBlackShade">
            Enter email address and password you registered with and we’ll send
            you an OTP to reset your password.
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

            <div className="mt-4 flex flex-col gap-6">
              <button className="w-full h-[52px] px-[10px] py-[20px] rounded-xl bg-customSearchblue text-white text-base flex justify-center items-center  font-bold ">
                Create an Account
              </button>
              <p className="text-base font-normal text-customBlackShade text-center">
                Already have an account?{" "}
                <Link to="/signin" className="text-customaccent">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
          <div class="container mx-auto text-center my-6">
            <div class="or-tag relative inline-block mx-4 flex justify-center items-center">
              <div class="w-1/2 h-1 bg-gray-300"></div>
              <span class="mx-4 font-normal text-customStreetcolor text-[18px]">
                or
              </span>
              <div class="w-1/2 h-1 bg-gray-300"></div>
            </div>
          </div>
          <div className="flex gap-2 justify-around mb-3">
            <h4 className="flex border gap-3 justify-center items-center border-customBlackShade p-2 text-customStreetcolor font-normal text-base">
              <img
                src="https://www.cdnlogo.com/logos/g/35/google-icon.svg"
                className="w-5"
              />
              Sign up Using Google
            </h4>

            <h4 className="flex border items-center gap-2 border-customBlackShade p-2 text-customStreetcolor font-normal text-base">
              <img
                src="https://www.cdnlogo.com/logos/f/74/facebook.svg"
                className="w-6"
              />
              Sign up Using Facebook
            </h4>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${require("../../../src/assets/swimmingpool.jpg")})`,
          objectFit: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="hidden lg:block flex-1 relative  "
      >
        <div className="absolute w-[70%] rounded-2xl py-4 px-3 gap-4 bottom-14 right-24 bg-[#00000087]">
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

export default Passwordreset;
