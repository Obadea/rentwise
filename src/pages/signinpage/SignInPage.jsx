import React from "react";
import Logo from "../../components/Logo";

function SignInPage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen min-h-[500px]  ">
      <div className="flex-1 my-4 mx-auto">
        <Logo />
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
              <p className="text-base font-normal text-customBlackShade">
                Dont have an account?{" "}
                <a href="#" className="text-customaccent">
                  Create an account
                </a>
              </p>
            </div>
          </form>
          <p>or</p>
          <div>
            <h4>Sign up Using Google</h4>
            <h4>Sign up Using Facebook</h4>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${require("../../../src/assets/swimpool.png")})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="hidden lg:block flex-1"
      >
        <div>
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
