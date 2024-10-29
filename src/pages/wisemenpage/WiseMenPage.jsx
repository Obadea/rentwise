import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import AgentCard from "../../components/AgentCard";
import AgentSearch from "../../components/AgentSearch";
import Footer from "../../components/Footer";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function WiseMenPage() {
  return (
    <div>
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
            <div>
              <WhatsAppIcon
                sx={{ fontSize: "15px" }}
                className="text-[#0B8200]"
              />
              <LocalPhoneIcon sx={{ fontSize: "15px" }} />
              <MailOutlineIcon sx={{ fontSize: "15px" }} />
              <WhatsAppIcon
                sx={{ fontSize: "15px" }}
                className="text-[#0B8200]"
              />
              <WhatsAppIcon
                sx={{ fontSize: "15px" }}
                className="text-[#0B8200]"
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
