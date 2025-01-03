import React, { useState } from "react";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import swimming from "../../assets/swimmingpool.jpg";
import GoogleOauth from "./components/GoogleOauth";
import { googleLogout } from "@react-oauth/google";

import Profile from "./Profile";
import { Button, Form, Input } from "@nextui-org/react";
import { SvgFacebookIcon, SvgGoogleIcon } from "../../utils/SvgIcons";
import { useMutation } from "@tanstack/react-query";
import { signInApi } from "../../utils/endpoint";
import { toast } from "react-toastify";
import { useAuth } from "../../utils/AuthContext";
import { goBack } from "../../utils/helperFunction";
// import { Form } from "formik";
function SignInPage() {
  const [action, setAction] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const mutation = useMutation({
    mutationFn: signInApi,
    onSuccess: async (data) => {
      setIsLoading(false);
      // console.log(data);
      toast(data?.message, { type: "success", draggable: true });
      login(data);
      goBack();
      // navigate("/");
    },

    onError: async (err) => {
      setIsLoading(false);
      toast(err?.response?.data.message, {
        type: "error",
        draggable: true,
      });
      console.log(err);
    },
  });

  // const [user, setUser] = useState(null);
  // const [profiler, setProfiler] = useState(null);

  // const logOut = () => {
  //   googleLogout();
  //   setProfiler(null);
  // };
  // More on testing the facebook Api
  // const responseFacebook = (response) => {
  //   if (response.accessToken) {
  //     // You can handle the login response here
  //     console.log("Login Success", response);
  //     setUser(response);
  //   } else {
  //     console.log("Login Failed", response);
  //   }
  // };

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
  // if (profiler) {
  //   return <Profile profile={profiler} logOut={logOut} />; // Render Profile component if user is logged in
  // }
  return (
    <div className="flex flex-col lg:flex-row  min-h-screen w-full ">
      <div className=" my-4 mx-auto px-3 lg:px-16 mt-8  lg:w-[50%] w-[97%]">
        <div className="flex justify-between ">
          <Logo />
          <button
            className="font-bold text-sm text-customSearchblue lg:hidden"
            onClick={goBack}
          >
            Back
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-8">
          <h2 className="text-customblue text-2xl font-bold ">Sign In</h2>
          <p className="text-base font-normal text-customBlackShade max-w-[80%]">
            Enter email address and password you registered with.
          </p>
        </div>
        <div className="mt-8">
          {/* <form action="#" className="flex flex-col gap-4">
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
          </form> */}
          <Form
            className="w-full  flex flex-col gap-4"
            validationBehavior="native"
            onReset={() => setAction("reset")}
            onSubmit={(e) => {
              e.preventDefault();
              let data = Object.fromEntries(new FormData(e.currentTarget));
              setAction(`submit ${JSON.stringify(data)}`);
              setIsLoading(true);
              mutation.mutate(data);
              // console.log(JSON.stringify(data));
            }}
          >
            <Input
              isRequired
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
              isDisabled={isLoading}
              className=""
            />

            <Input
              isRequired
              errorMessage="Password must be up to 8 characters"
              label="Password"
              labelPlacement="outside"
              name="password"
              placeholder="Enter your password"
              type="password"
              isDisabled={isLoading}
              minLength={7}
              className="w-full"
            />
            <Link
              to="/passwordreset"
              className=" font-bold text-customSearchblue"
            >
              Forgot passsword?
            </Link>
            <Button
              color="primary"
              type="submit"
              className="w-full m-auto"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </Form>
          <Link to="/accessId">
            <Button
              color="default"
              className="w-full mt-7"
              variant="bordered"
              // isLoading={isLoading}
              onPress={() => navigate("/accessId")}
            >
              Sign In as a Landlord/Wisemen here
            </Button>
          </Link>
          <p className="text-base font-normal mt-8 text-customBlackShade text-center">
            Dont have an account?{" "}
            <Link to="/signup" className="text-customaccent">
              Create an account
            </Link>
          </p>
          <div className="container mx-auto text-center my-6">
            <div className="or-tag relative  mx-4 flex justify-center items-center">
              <div className="w-1/2 h-1 bg-gray-300"></div>
              <span className="mx-4 font-normal text-customStreetcolor text-[18px]">
                or
              </span>
              <div className="w-1/2 h-1 bg-gray-300"></div>
            </div>
          </div>
          <div className="flex gap-3 justify-between mb-3 items-center m-auto xl:flex-row flex-col">
            <Button
              variant="bordered"
              className="w-full"
              startContent={<SvgGoogleIcon />}
            >
              Sign In Using Google
            </Button>
            <Button
              startContent={<SvgFacebookIcon />}
              className="w-full"
              variant="bordered"
            >
              Sign In Using Facebook
            </Button>
          </div>
          {/* <div className="flex gap-2 justify-between mb-3">
            <GoogleOauth
              user={user}
              setUser={setUser}
              profiler={profiler}
              setProfiler={setProfiler}
            />

            <h4 className="flex border items-center gap-2 border-customBlackShade p-2 text-customStreetcolor font-normal text-base">
              <img
                src="https://www.cdnlogo.com/logos/f/74/facebook.svg"
                className="w-6"
                alt="img"
              />
              Sign in Using Facebook
            </h4> */}

          {/* Testing the facebook API */}
          {/* <div>
              <ReactFacebookLogin
                appId="" // Replace with your Facebook App ID
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                icon="fa-facebook"
                className="bg-white"
              />
            </div>
          </div> */}
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
        <Button
          className="absolute right-14 top-9 text-white border-white border-1"
          variant="bordered"
          radius="sm"
          onPress={goBack}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default SignInPage;
