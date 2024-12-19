import { Button, Form, Input } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import Logo from "../../components/Logo";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../utils/endpoint";

const ResetPasswordOtp = () => {
  const [action, setAction] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  const { token } = useAuth();
  const [isInvalid, setIsInvalid] = React.useState(false);

  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPasssword, setShowPassword] = React.useState(false);
  const handleChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setIsInvalid(value !== password);
  };

  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: async (data) => {
      setIsLoading(false);
      toast(data?.message, { type: "success" });
      navigate("/");
    },

    onError: async (err) => {
      setIsLoading(false);
      toast(err?.response?.data.error.message, {
        type: "error",
      });
      console.log(err);
    },
  });

  return (
    <div className="flex flex-col lg:flex-row h-screen  min-h-[500px]  ">
      <div className=" my-4 mx-auto px-3 lg:pl-14 lg:pr-16  lg:w-[50%] ">
        <div className="flex justify-between ">
          <Logo />
          <button className="font-bold text-sm text-customSearchblue lg:hidden">
            Back
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-8">
          <h2 className="text-customblue text-2xl font-bold ">
            Create a new password
          </h2>
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
              mutation.mutate({ password: data.password, token });
            }}
          >
            <Input
              isRequired
              errorMessage="Please enter a valid password"
              label="Enter new password"
              labelPlacement="outside"
              name="password"
              placeholder="Enter your new password"
              type={showPasssword ? "text" : "password"}
              isDisabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              isRequired
              errorMessage="Password does not match "
              label="Confirm your password"
              labelPlacement="outside"
              name="password2"
              placeholder="Confirm your password"
              type={showPasssword ? "text" : "password"}
              isDisabled={isLoading}
              isInvalid={isInvalid}
              value={confirmPassword}
              onChange={handleChange}
            />
            <div className="grid grid-cols-[2fr_1fr] mt-8 w-full gap-6">
              <Button
                color="primary"
                className="w-full"
                type="submit"
                isLoading={isLoading}
              >
                Create Password
              </Button>
              <Button
                color="primary"
                variant="bordered"
                onPress={() => setShowPassword(!showPasssword)}
                isDisabled={isLoading}
              >
                Show
              </Button>
            </div>
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
};

export default ResetPasswordOtp;
