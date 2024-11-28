import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import AgentCard from "../../components/AgentCard";
import AgentSearch from "../../components/AgentSearch";
import Footer from "../../components/Footer";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

function WiseMenPage() {
  return (
    <div className="bg-textcolor">
      <div className="bg-textcolor">
        <Header className="bg-[#FAFBFF]" newclassName="sticky  " />
        <div className="py-6 flex flex-col gap-3 px-20">
          <Breadcrumb />
          <h4 className="font-bold text-4xl text-customNameBlack">Wise men</h4>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  gap-6 p-7 px-2 lg:px-20 items-center lg:items-start">
        <div className="lg:flex-[3] flex flex-col w-full lg:w-auto gap-5">
          <AgentCard className="hidden">
            <div className="flex flex-row gap-2">
              <WhatsAppIcon
                sx={{ fontSize: "20px" }}
                className="text-[#0B8200]"
              />
              <FacebookIcon
                sx={{ fontSize: "20px" }}
                className="text-[#0A66C2]"
              />
              <LinkedInIcon
                sx={{ fontSize: "20px" }}
                className="text-[#0A66C2]"
              />
              <XIcon sx={{ fontSize: "20px" }} />
              <InstagramIcon sx={{ fontSize: "20px" }} className="" />
              <PinterestIcon
                sx={{ fontSize: "20px" }}
                className="text-[#E60019]"
              />
            </div>
          </AgentCard>
          <AgentCard className="hidden">
            <div className="flex flex-row gap-2">
              <WhatsAppIcon
                sx={{ fontSize: "20px" }}
                className="text-[#0B8200]"
              />
              <FacebookIcon
                sx={{ fontSize: "20px" }}
                className="text-[#0A66C2]"
              />
              <LinkedInIcon
                sx={{ fontSize: "20px" }}
                className="text-[#0A66C2]"
              />
              <XIcon sx={{ fontSize: "20px" }} />
              <InstagramIcon sx={{ fontSize: "20px" }} className="" />
              <PinterestIcon
                sx={{ fontSize: "20px" }}
                className="text-[#E60019]"
              />
            </div>
          </AgentCard>
          <AgentCard className="hidden">
            <div className="flex flex-row gap-2">
              <WhatsAppIcon
                sx={{ fontSize: "20px" }}
                className="text-[#0B8200]"
              />
              <FacebookIcon
                sx={{ fontSize: "20px" }}
                className="text-[#0A66C2]"
              />
              <LinkedInIcon
                sx={{ fontSize: "20px" }}
                className="text-[#0A66C2]"
              />
              <XIcon sx={{ fontSize: "20px" }} />
              <InstagramIcon sx={{ fontSize: "20px" }} className="" />
              <PinterestIcon
                sx={{ fontSize: "20px" }}
                className="text-[#E60019]"
              />
            </div>
          </AgentCard>
        </div>

        {/* Search agent */}
        <AgentSearch />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default WiseMenPage;
