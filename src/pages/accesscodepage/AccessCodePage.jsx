import React from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
function AccessCodePage() {
  return (
    <div className="flex flex-col lg:flex-row  min-h-screen  ">
      <div className=" my-4 mx-auto px-4 w-full  lg:pl-24 lg:pr-16 lg:pt-20 lg:w-[50%] ">
        <div className="flex justify-between ">
          <Logo />
          <button className="font-bold text-sm text-customSearchblue lg:hidden">
            Back
          </button>
        </div>

        <div className="flex flex-col gap-3 my-10">
          <h2 className="text-customblue text-2xl font-bold ">
            Enter Access ID
          </h2>
          <p className="text-base font-normal text-customBlackShade">
            Enter required access ID
          </p>
        </div>
        <div className="lg:gap-6 mt-8">
          <form action="#" className="flex flex-col gap-4">
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

            <div className="m-4 flex flex-col ">
              <button className="w-full h-[52px] px-[10px] py-[20px] rounded-xl bg-customSearchblue text-white text-xl flex justify-center items-center  font-bold ">
                Continue
              </button>
            </div>
          </form>
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
            <h4 className=" px-5 flex-1 flex border gap-3 justify-center items-center border-customBlackShade p-2 text-customStreetcolor font-normal text-base">
              <WhatsAppIcon className="text-[#25D366]" />
              Contact through Whatsapp
            </h4>

            <h4 className=" flex-1 flex border justify-center px-5 items-center gap-3 border-customBlackShade p-2 text-customStreetcolor font-normal text-base">
              <MailOutlineIcon className="text-customNameBlack" />
              Send us a mail
            </h4>
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
