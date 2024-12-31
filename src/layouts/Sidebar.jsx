import React, { useState } from "react";

import "./Sidebar.css";
import { section2, sidenavData } from "../utils/constants";
import { Avatar, Button, Image, User } from "@nextui-org/react";
import { SvgToCloseIcon } from "../utils/SvgIcons";

import sidebarImg from "../assets/sidebarImg.png";
import avatarImg from "../assets/Inner.png";
import { useAuth } from "../utils/AuthContext";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeBar, setActiveBar] = useState(0);

  const { user } = useAuth();

  return (
    <div className="h-screen w-60 shadow-md bg-white rounded-2xl">
      <div>
        <div className=" my-5 relative mt-8">
          <Button
            isIconOnly
            size="sm"
            radius="full"
            className="absolute -right-4 bg-white border-1 border-[#EEF2FF]"
          >
            {<SvgToCloseIcon />}
          </Button>
          <p className="text-2xl font-semibold pl-[13%]">
            Rent<span className="text-customyellow">w</span>ise
            <span className="text-customyellow">.</span>
          </p>
        </div>
      </div>
      <div className="flex gap-1 flex-col items-center">
        {sidenavData.map((item, idx) => (
          <Button
            startContent={<item.svgIcon className={``} />}
            className={`w-[80%] justify-start text-[#64748B] font-medium transition-all duration-250 ${
              activeBar === idx
                ? "text-[#4F46E5] bg-[#EEF2FF]"
                : "bg-transparent hover:bg-[#EEF2FF] hover:text-black"
            }`}
            radius="full"
            onPress={() => {
              setActiveBar(idx);
            }}
          >
            {item.sideTitle}
          </Button>
        ))}
        <div className="border-[#E2E8F0] border-t-1 w-full my-4" />
        {section2.map((item, idx) => (
          <Button
            startContent={item.svgIcon}
            className="w-[80%] justify-start"
            radius="full"
          >
            {item.sideTitle}
          </Button>
        ))}
      </div>
      <div className=" w-[80%]  flex items-center mx-auto flex-col my-8">
        <Image src={sidebarImg} />
        <Button color="primary" radius="full" className="w-full mt-2">
          Upgrade Now
        </Button>
      </div>
      <div className="border-[#E2E8F0] border-t-1 w-full my-4" />
      <div className="w-[90%] mx-auto">
        <User
          avatarProps={{
            src: avatarImg,
          }}
          description="Welcome back👋"
          name={user?.email}
        />
      </div>
    </div>
  );
};

export default Sidebar;
