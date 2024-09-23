import React, { useState, useEffect } from "react";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import topOffice from "../../../assets/topoffice.png";
import "../components/wisePopup.css";

function WisePopup({ wisePopup, header1, header2, info, details }) {
  const [today, setToday] = useState("");

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    setToday(today);
  }, []);
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40 transition-all duration-300 ${
        wisePopup ? " block" : " hidden"
      }`}
    >
      <div
        className={`w-[720px] bg-white rounded-md shadow-md ${
          wisePopup ? "animate-slideIn" : "animate-slideOut"
        } `}
      >
        <div className="bg-white w-full h-12"></div>
        <div className="flex flex-row  h-[390px]">
          <div
            className="flex flex-col w-[800px] px-4 justify-center gap-4"
            style={{
              backgroundImage: `url(${topOffice})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="font-bold text-addpropertybg text-2xl">{header1}</h3>
            <h3 className="font-bold text-addpropertybg text-2xl">{header2}</h3>
            <p className="text-sm font-bold text-addpropertybg">{info}</p>
          </div>

          <div className="px-12 bg-customblue2 py-5">
            <div>
              <div className="flex gap-2 justify-end text-white">
                <XIcon />
                <FacebookIcon />
                <InstagramIcon />
              </div>
              <h5 className="border-b-2 text-customaccent">Next stop</h5>
            </div>
            <div className="flex gap-12 text-addpropertybg font-normal text-xs my-5">
              <h4> {today}</h4>
              <h4>Lagos</h4>
            </div>

            <div className="flex flex-col gap-5 text-addpropertybg ">
              <h2 className="font-bold text-2xl ">
                {header1} {header2}{" "}
              </h2>
              <p className="font-medium text-base">{details}</p>
              <div>
                <button className="border-[0.5px] rounded-md text-base font-normal px-8 py-2 bg-[#353E59] text-textcolor border-textcolor ">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WisePopup;
