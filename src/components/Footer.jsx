import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MultiFooterLink from "../pages/landingpage/components/MultiFooterLink";

const links1 = [
  { text: "Home", path: "/" },
  { text: "Browse properties", path: "/properties" },
  { text: "WiseReport", path: "/" },
  { text: "Virtual tours", path: "/" },
  { text: "Rent calculator", path: "/Rent affordability calculator" },
  { text: "Blog", path: "/blog" },
];

const links2 = [
  { text: "Privacy policy", path: "/privacy-policy" },
  { text: "Terms & Conditions", path: "/terms-conditions" },
  { text: "Cookie policy", path: "/" },
  { text: "Disclaimer", path: "/disclaimer" },
];

const links3 = [
  { text: "FAQ", path: "/faq" },
  { text: "Live chat", path: "/" },
  { text: "Feedback", path: "/" },
  { text: "Contact Us", path: "/contact" },
];

function Footer() {
  return (
    <div className="px-6  pt-12 pb-8   bg-customblack lg:px-20">
      <div className="flex flex-col lg:flex-row text-white gap-12  ">
        <div className="flex-1 ">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-base text-customStreetcolor lg:max-w-[60%]">
            rentwise AI is an artificial intelligence platform designed to make
            finding and renting a home in Nigeria easy and stress-free. It's a
            trusted guide through the rental process, ensuring you find a place
            you love without the usual hassles.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-7 items-start lg:gap-12 lg:flex-row ">
          <MultiFooterLink header="Links" links={links1} />
          <MultiFooterLink header="Legal Information" links={links2} />
          <MultiFooterLink header="Customer Support" links={links3} />
        </div>
      </div>
      <div className="flex justify-between items-center mt-12">
        <h2 className="text-white text-2xl lg:text-3xl">
          rent<span className="text-yellow-500">w</span>ise
          <span className="text-yellow-500">.</span>
        </h2>
        <div>
          <h4 className="font-thin text-white mb-2">Follow Us</h4>
          <div className="flex gap-1 lg:gap-4 text-white">
            <a href="https://www.youtube.com/@RentwiseAI">
              <YouTubeIcon sx={{ fontSize: 20 }} />
            </a>
            <FacebookIcon sx={{ fontSize: 20 }} />
            <XIcon sx={{ fontSize: 20 }} />
            <InstagramIcon sx={{ fontSize: 20 }} />
            <a href="https://www.linkedin.com/company/rwiseai/" target="_blank">
              <LinkedInIcon sx={{ fontSize: 20 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
