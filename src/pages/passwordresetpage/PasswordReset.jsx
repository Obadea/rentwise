import React, { useState } from "react";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { passWordResetOtp } from "../../utils/endpoint";
import { toast } from "react-toastify";

function Passwordreset() {
  const [action, setAction] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const mutation = useMutation({
    mutationFn: passWordResetOtp,
    onSuccess: async (data) => {
      setIsLoading(false);
      toast(data?.message, { type: "success", draggable: true });
      navigate("/otpreset", { state: email });
    },

    onError: async (err) => {
      setIsLoading(false);
      toast(err?.response?.data.error.message, {
        type: "error",
        draggable: true,
      });
      console.log(err);
    },
  });

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
            Enter email address you registered with and we’ll send you an OTP to
            reset your password.
          </p>
        </div>
        <div className="mt-8">
          <Form
            className="w-full  flex flex-col gap-4"
            validationBehavior="native"
            onReset={() => setAction("reset")}
            onSubmit={(e) => {
              e.preventDefault();
              let data = Object.fromEntries(new FormData(e.currentTarget));
              setAction(`submit ${JSON.stringify(data)}`);
              setIsLoading(true);
              setEmail(data?.email);
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
            />
            <Button
              color="primary"
              type="submit"
              className="w-full"
              isLoading={isLoading}
            >
              Send OTP
            </Button>
          </Form>
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
