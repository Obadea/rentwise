import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MultiFooterLink from "./MultiFooterLink";

function Footer() {
  return (
    <div className="px-6  py-16 bg-customblack lg:px-20">
      <div className="flex flex-col lg:flex-row text-white gap-12  ">
        <div className="flex-1 ">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-base font-medium">
            Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent nunc.
            Sed aliquam mi at urna. Condimentum mi lorem aliquam mattis.
            Consequat est phasellus velit nisl justo dui. Faucibus dictum
            habitasse sed vel at nisl non. Nisi placerat purus sed varius
            euismod. Risus etiam purus donec neque. Non id mi maecenas quam
            convallis ut varius feugiat iaculis. Quis porttitor urna malesuada
            mattis in quam. Quictum habitasse sed vel at nisl non. Nisi placerat
            purus sed varius euismod.{" "}
          </p>
        </div>
        <div className="flex flex-col justify-between  lg:gap-12 lg:flex-row ">
          <MultiFooterLink />
          <MultiFooterLink />
          <MultiFooterLink />
          <MultiFooterLink />
        </div>
      </div>
      <div className="flex justify-between items-center mt-16">
        <h2 className="text-white text-4xl">
          rent<span className="text-yellow-500">w</span>ise
          <span className="text-yellow-500">.</span>
        </h2>
        <div>
          <h4 className="font-sm text-white mb-2">Follow us</h4>
          <div className="flex gap-4 text-white">
            <YouTubeIcon />
            <FacebookIcon />
            <XIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
