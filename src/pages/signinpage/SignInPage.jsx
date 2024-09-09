import React from "react";
import Logo from "../../components/Logo";

function SignInPage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen min-h-[500px]  ">
      <div className="flex-1 my-4 mx-auto px-3">
        <div className="flex justify-between ">
          <Logo />
          <button className="font-bold text-sm text-customSearchblue lg:hidden">
            Back
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-8">
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
                placeholder="akomolafe1234@yahoo.com"
                className="border border-customBlackShade pl-2 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                placeholder="****"
                className="border border-customBlackShade pl-2 py-2"
              />
              <a href="#" className="text-xs font-bold text-customSearchblue">
                Forgot passsword?
              </a>
            </div>

            <div className="mt-4 flex flex-col gap-8">
              <button className="w-full h-[52px] px-[10px] py-[20px] rounded-xl bg-customSearchblue text-white text-base flex justify-center items-center  font-bold ">
                Sign In
              </button>
              <p className="text-base font-normal text-customBlackShade text-center">
                Already have an account?{" "}
                <a href="#" className="text-customaccent">
                  Create an account
                </a>
              </p>
            </div>
          </form>
          <div class="container mx-auto text-center my-12">
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="hidden lg:block flex-1 relative"
      >
        <div
          className="absolute w-[70%] rounded-2xl p-6 gap-4 text-white bg-[#00000087];
"
        >
          <h4>Something to motivate</h4>
          <p>
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
