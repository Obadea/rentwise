import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import agent from "../../assets/agent.png";

function ServicesAgentPage() {
  return (
    <div>
      <Header />
      <div>
        <Breadcrumb />
        <h4 className="font-bold text-sm text-customNameBlack">
          A.C / Refrigeration Services around you
        </h4>
      </div>
      <div className="flex bg-DownloadHover py-2 ">
        <input type="text" className="text-[#DCE0E0] " />
        <input type="text" />
        <input type="text" />
        <button>Search Agent</button>
      </div>
      <div className="flex flex-col gap-6 p-7">
        <div className="flex gap-6 justify-between ">
          <div>
            <img src={agent} alt="" />
          </div>
          {/* FInd Agent */}
          <div>
            <div className="flex justify-between">
              <h4 className="text-lg text-customblack font-normal">
                Samuel Palmer
              </h4>
              {/* star ratings */}
            </div>
            <div>
              <p>Company Agent at Modern House Real Estate</p>
            </div>
            <div>
              <div className="flex justify-between border-b border-b-customgray3">
                <h4 className="font-bold text-sm text-customBlackShade1">
                  Office
                </h4>
                <p className="font-normal text-sm text-customNameBlack">
                  321 456 9865
                </p>
              </div>
              <div className="flex justify-between border-b border-b-customgray3">
                <h4 className="font-bold text-sm text-customBlackShade1">
                  Mobile
                </h4>
                <p className="font-normal text-sm text-customNameBlack">
                  321 456 9865
                </p>
              </div>
              <div className="flex justify-between border-b border-b-customgray3">
                <h4 className="font-bold text-sm text-customBlackShade1">
                  Coverage Location
                </h4>
                <p className="font-normal text-sm text-customNameBlack">
                  Lagos
                </p>
              </div>
              <div className="flex justify-between">
                {/* for icons */}
                <div>
                  <WhatsAppIcon
                    sx={{ fontSize: "15px" }}
                    className="text-[#0B8200]"
                  />
                  <LocalPhoneIcon sx={{ fontSize: "15px" }} />
                  <MailOutlineIcon sx={{ fontSize: "15px" }} />
                </div>
                <p className="text-sm text-customSearchblue font-semibold">
                  Book Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesAgentPage;
