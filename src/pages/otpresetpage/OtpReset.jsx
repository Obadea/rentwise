import React, { useState } from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

function OtpReset() {
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
    <div className="flex flex-col lg:flex-row h-screen  min-h-[500px]  ">
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
            OTP has been sent to{" "}
            <span className="text-customaccent">akomolafe123@icloud.com</span>
            If you don’t get the email soon, check your spam folder
          </p>
        </div>
        <div className="mt-8">
          <form action="#" className="flex flex-col gap-32">
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
              <Link
                to="/otpreset"
                className="w-full h-[52px] px-[10px] py-[20px] rounded-xl bg-customSearchblue text-white text-base flex justify-center items-center  font-bold "
              >
                Reset Password
              </Link>
              <button className="font-medium text-base text-customSearchblue text-center">
                Resend OTP
              </button>
            </div>
          </form>
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

export default OtpReset;
