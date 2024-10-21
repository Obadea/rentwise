import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import agent from "../assets/agent.png";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

function AgentCard() {
  const [value, setValue] = React.useState(3);
  return (
    <div>
      <div className="flex gap-6 justify-between p-3  bg-white ">
        <div className="h-full">
          <img src={agent} alt="" className="h-full" />
        </div>
        {/* FInd Agent */}
        <div className="flex-1">
          <div className=" flex justify-between">
            <h4 className=" text-lg text-customblack font-normal">
              Samuel Palmer
            </h4>
            {/* star ratings */}
            <Box sx={{ "& > legend": { mt: 2 } }}>
              <Rating name="read-only" value={value} readOnly />
            </Box>
          </div>
          <div>
            <p className="font-normal text-sm text-customStreetcolor mb-5">
              Company Agent at Modern House Real Estate
            </p>
          </div>
          <div className="flex flex-col gap-2">
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
            <div className="flex justify-between border-b border-b-customgray3 mb-6">
              <h4 className="font-bold text-sm text-customBlackShade1">
                Coverage Location
              </h4>
              <p className="font-normal text-sm text-customNameBlack">Lagos</p>
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
  );
}

export default AgentCard;
