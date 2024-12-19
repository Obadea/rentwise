import React, { useState } from "react";
import Logo from "../../components/Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { forgotPassWordVerifyOtp } from "../../utils/endpoint";
import { toast } from "react-toastify";
import { useAuth } from "../../utils/AuthContext";
import { InputOtp } from "@nextui-org/react";

function OtpReset() {
  const [value, setValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const email = location.state;
  const { token, login } = useAuth();

  const mutation = useMutation({
    mutationFn: forgotPassWordVerifyOtp,
    onSuccess: async (data) => {
      toast(data?.message, { type: "success", draggable: true });
      setIsLoading(false);
      login(data);
      setValue("");
      // Todo: NAvigate to input new password
      navigate("/reset_password_otp");
      // console.log(data);
    },

    onError: async (err) => {
      toast(err?.message, { type: "error", draggable: true });
      // console.log(err);
      setIsLoading(false);
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
            OTP has been sent to{" "}
            <span className="text-customaccent">{email}</span> If you don’t get
            the email soon, check your spam folder
          </p>
        </div>
        <div className="mt-8">
          <InputOtp
            variant="bordered"
            length={6}
            value={value}
            onValueChange={setValue}
            className="m-auto"
            onComplete={() => {
              setIsLoading(true);
              mutation.mutate({ otp: value, token: token });
            }}
            isDisabled={isLoading}
          />
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
