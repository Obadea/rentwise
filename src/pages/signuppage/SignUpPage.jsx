import React, { useState } from "react";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { userSignUp } from "../../utils/endpoint";
// import { setAuthData } from "../../utils/helperFunction";
import { toast } from "react-toastify";
import { useAuth } from "../../utils/AuthContext";
import { SvgFacebookIcon, SvgGoogleIcon } from "../../utils/SvgIcons";
import { goBack } from "../../utils/helperFunction";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [action, setAction] = React.useState(null);

  const { login } = useAuth();

  const mutation = useMutation({
    mutationFn: userSignUp,
    onSuccess: async (data) => {
      setIsLoading(false);
      toast(data?.message, { type: "success", draggable: true });
      // setAuthData(data);
      login(data);
      navigate("/confirmOTP", { state: data?.data?.user?.email });
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

  return (
    <div className="flex flex-col lg:flex-row  min-h-screen  ">
      <div className=" my-4 mx-auto px-3 lg:px-16 lg:w-[50%] ">
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
          <h2 className="text-customblue text-2xl font-bold ">
            Create an Account
          </h2>
          <p className="text-base font-normal text-customBlackShade">
            Enter email address and password.
          </p>
        </div>
        <div className="mt-8">
          {/* <form action="#" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <Input
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
            </div>

            <div className="mt-4 flex flex-col gap-6">
              <button className="w-full h-[52px] px-[10px] py-[20px] rounded-xl bg-customSearchblue text-white text-base flex justify-center items-center  font-bold ">
                Create Account
              </button>
              <p className="text-base font-normal text-customBlackShade text-center">
                Already have an Account?{" "}
                <Link to="/signin" className="text-customaccent">
                  Sign In
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
            />
            <Button
              color="primary"
              type="submit"
              className="w-full"
              isLoading={isLoading}
            >
              Create an Account
            </Button>
          </Form>
          <p className="text-base font-normal mt-8 text-customBlackShade text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-customaccent">
              Sign In
            </Link>
          </p>
          <div class="container mx-auto text-center my-6">
            <div class="or-tag relative mx-4 flex justify-center items-center">
              <div class="w-1/2 h-1 bg-gray-300"></div>
              <span class="mx-4 font-normal text-customStreetcolor text-[18px]">
                or
              </span>
              <div class="w-1/2 h-1 bg-gray-300"></div>
            </div>
          </div>
          <div className="flex gap-2 justify-between w-[80%] mb-3 items-center m-auto">
            <Button variant="bordered" startContent={<SvgGoogleIcon />}>
              Sign up Using Google
            </Button>
            <Button startContent={<SvgFacebookIcon />} variant="bordered">
              Sign up Using Facebook
            </Button>
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

export default SignInPage;
