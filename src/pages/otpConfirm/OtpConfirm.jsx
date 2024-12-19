import React, { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import { Button, InputOtp } from "@nextui-org/react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { confirmOTP, resendOtp } from "../../utils/endpoint";
import { useAuth } from "../../utils/AuthContext";
import RefreshIcon from "@mui/icons-material/Refresh";
const OtpConfirm = () => {
  const [value, setValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const data = location.state;

  const { token } = useAuth();

  const [timer, setTimer] = useState(60); // 60 seconds = 1 minutes
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  const mutation = useMutation({
    mutationFn: confirmOTP,
    onSuccess: async (data) => {
      // console.log(data);
      toast(data?.message, { type: "success", draggable: true });
      setIsLoading(false);
      setValue("");
      navigate("/");
      // console.log(data);
    },

    onError: async (err) => {
      toast(err?.message, { type: "error", draggable: true });
      // console.log(err);
      setIsLoading(false);
    },
  });

  const resendOtpMutation = useMutation({
    mutationFn: resendOtp,
    onSuccess: async (data) => {
      toast(data?.message, { type: "success", draggable: true });
      setValue("");
      // console.log(data);
    },

    onError: async (err) => {
      toast(err?.message, { type: "error", draggable: true });
      // console.log(err);
    },
  });

  // Update the timer every second
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) return prev - 1;
        return 0;
      });
    }, 1000);

    return () => clearInterval(countdown); // Cleanup interval on unmount
  }, []);

  // Enable resend button when the timer reaches 0
  useEffect(() => {
    if (timer === 0) {
      setIsResendDisabled(false);
    }
  }, [timer]);

  // Resend OTP function
  const handleResend = () => {
    // Logic for resending OTP (e.g., API call) goes here
    resendOtpMutation.mutate({ email: data, token: token });

    // Add 5 minutes to the timer
    setTimer((prev) => prev + 300);
    setIsResendDisabled(true);
  };

  // Format the timer into MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="flex h-[100vh]">
      <div className="py-20 px-11">
        <Logo />
        <p className="text-2xl font-bold text-customblue mt-11">Comfirm OTP</p>

        <p className="text-base font-normal text-customBlackShade my-7">
          OTP has been sent to{" "}
          <span className="text-customaccent font-medium">{data}</span>. If you
          don’t get the email soon, check your spam folder
        </p>

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
        <div className="flex mt-8 items-center justify-between w-full">
          <Button
            color="primary"
            onPress={() => {
              navigate("/signup");
            }}
          >
            {isLoading ? "Confirming" : "Go Back"}
          </Button>

          <Button
            startContent={<RefreshIcon />}
            variant="bordered"
            isDisabled={isResendDisabled}
            onPress={handleResend}
          >
            {isResendDisabled
              ? `Resend OTP in ${formatTime(timer)}`
              : "Resend OTP"}
          </Button>
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
};

export default OtpConfirm;
