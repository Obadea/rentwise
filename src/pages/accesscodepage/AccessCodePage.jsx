import React, { useEffect } from "react";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  autocomplete,
  Button,
  Form,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useAuth } from "../../utils/AuthContext";
import { signInForLandLord, signInForWisemen } from "../../utils/endpoint";
function AccessCodePage() {
  const [action, setAction] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [role, setRole] = React.useState("landlord");
  const { login } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: role === "landlord" ? signInForLandLord : signInForWisemen,
    onSuccess: async (data) => {
      setIsLoading(false);
      toast(data?.message, { type: "success", draggable: true });
      // setAuthData(data);
      login(data);
      navigate("/");
    },

    onError: async (err) => {
      setIsLoading(false);
      toast(err?.message, {
        type: "error",
        draggable: true,
      });
      console.log(err);
    },
  });

  const handleSelectionChange = (e) => {
    setRole(e.target.value);
  };

  useEffect(() => {
    console.log(role);
  }, [role]);

  return (
    <div className="flex flex-col lg:flex-row  min-h-screen  ">
      <div className=" my-4 mx-auto px-4 w-full  lg:pl-24 lg:pr-16  lg:w-[50%] ">
        <div className="flex justify-between ">
          <Logo />
          <button className="font-bold text-sm text-customSearchblue lg:hidden">
            Back
          </button>
        </div>

        <div className="flex flex-col gap-3 my-10">
          <h2 className="text-customblue text-2xl font-bold capitalize ">
            Enter Access ID ({role})
          </h2>
          <p className="text-base font-normal text-customBlackShade">
            Enter required access ID
          </p>
        </div>
        <div className="lg:gap-6 mt-8">
          {/* <form action="#" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Access ID</label>
              <input
                type="text"
                id="accessCode"
                // value={text}
                // onChange={(event) => setAccessCode(event.target.value)}
                placeholder="Enter access ID"
                className="border border-customBlackShade text-[#333333] text-2xl pl-2 py-2  "
              />
            </div>

            <div className="lg:m-4 flex flex-col ">
              <button className="w-full h-[52px] px-[10px] py-[20px] rounded-xl bg-customSearchblue text-white text-xl flex justify-center items-center  font-bold ">
                Continue
              </button>
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
              data.accessId.toUpperCase();
              setIsLoading(true);

              mutation.mutate(data.accessId.toUpperCase());
              // console.log(data.accessId.toUpperCase());
            }}
          >
            <Input
              isRequired
              errorMessage="Please enter a access ID"
              label="Access ID"
              labelPlacement="outside"
              name="accessId"
              placeholder="Enter your Access ID"
              type="text"
              isDisabled={isLoading}
              isClearable
              variant="bordered"
            />

            <Select
              isRequired
              errorMessage="Please Select a role"
              defaultSelectedKeys={[role]}
              label="Role"
              selectedKeys={[role]}
              placeholder="Select your role"
              isDisabled={isLoading}
              onChange={handleSelectionChange}
              variant="bordered"
            >
              <SelectItem key="landlord">Landlord</SelectItem>
              <SelectItem key="wisemen">Wisemen</SelectItem>
            </Select>

            <Button
              color="primary"
              type="submit"
              className="w-full"
              isLoading={isLoading}
            >
              Sign In
            </Button>
          </Form>
          <div className="container mx-auto text-center mt-16 mb-6">
            <div className="or-tag relative  mx-4 flex justify-center items-center">
              <div className="w-1/2 h-1 bg-gray-300"></div>
              <span className=" mx-4 font-normal text-customBlackShade text-[18px] text-nowrap">
                Don’t have access ID?
              </span>
              <div class="w-1/2 h-1 bg-gray-300"></div>
            </div>
          </div>
          <div className="flex gap-3 flex-col lg:flex-row lg:gap-6 justify-evenly mb-3">
            <Button
              variant="bordered"
              startContent={<WhatsAppIcon className="text-[#25D366]" />}
              className=" px-5 flex-1 flex border gap-3 cursor-pointer justify-center items-center border-customBlackShade p-2 text-customStreetcolor font-normal text-base"
            >
              Contact through Whatsapp
            </Button>

            <Button
              variant="bordered"
              startContent={
                <MailOutlineIcon className="text-customNameBlack" />
              }
              className=" flex-1 flex border justify-center px-5 items-center cursor-pointer gap-3 border-customBlackShade p-2 text-customStreetcolor font-normal text-base"
            >
              Send us a mail
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
      ></div>
    </div>
  );
}

export default AccessCodePage;
