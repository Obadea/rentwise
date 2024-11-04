import React from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
function AccessCodePage() {
  return (
    <div className="flex flex-col lg:flex-row  min-h-screen  ">
      <div className=" my-4 mx-auto px-3 lg:pl-24 lg:pr-16  lg:w-[50%] ">
        <div className="flex justify-between ">
          <Logo />
          <button className="font-bold text-sm text-customSearchblue lg:hidden">
            Back
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-8">
          <h2 className="text-customblue text-2xl font-bold ">
            Enter Access ID
          </h2>
          <p className="text-base font-normal text-customBlackShade">
            Enter required access ID
          </p>
        </div>
        <div className="mt-8">
          <form action="#" className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Access ID</label>
              <input
                type="text"
                id="accessCode"
                // value={text}
                // onChange={(event) => setAccessCode(event.target.value)}
                placeholder="Enter access ID"
                className="border border-customBlackShade pl-2 py-1"
              />
            </div>

            <div className="mt-4 flex flex-col ">
              <button className="w-full h-[52px] px-[10px] py-[20px] rounded-xl bg-customSearchblue text-white text-base flex justify-center items-center  font-bold ">
                Continue
              </button>
            </div>
          </form>
          <div class="container mx-auto text-center my-6">
            <div class="or-tag relative inline-block mx-4 flex justify-center items-center">
              <div class="w-1/2 h-1 bg-gray-300"></div>
              <span class="mx-4 font-normal text-customStreetcolor text-[18px]">
                Don’t have access ID?
              </span>
              <div class="w-1/2 h-1 bg-gray-300"></div>
            </div>
          </div>
          <div className="flex gap-2 justify-around mb-3">
            <h4 className="flex border gap-3 justify-center items-center border-customBlackShade p-2 text-customStreetcolor font-normal text-base">
              <WhatsAppIcon />
              Contact through Whatsapp
            </h4>

            <h4 className="flex border items-center gap-2 border-customBlackShade p-2 text-customStreetcolor font-normal text-base">
              <MailOutlineIcon />
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

export default AccessCodePage;
