import React, { useState, useEffect } from "react";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function WisePopup() {
  const [today, setToday] = useState("");

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    setToday(today);
  }, []);
  return (
    <div className="w-[720px] relative left-10 ">
      <div className="bg-white w-full h-12"></div>
      <div className="flex flex-row  h-[390px]">
        <div className="flex flex-col w-[600px] justify-center gap-4">
          <h3>Informed</h3>
          <h3>Decisions</h3>
          <p>All the Info You Need in One Place</p>
        </div>

        <div className="px-4 bg-customblue2 py-4">
          <div clas>
            <div className="flex gap-2 justify-end text-white">
              <XIcon />
              <FacebookIcon />
              <InstagramIcon />
            </div>
            <h5 className="border-b-2 text-customaccent">Next stop</h5>
          </div>
          <div className="flex gap-12 text-addpropertybg my-5">
            <h4> {today}</h4>
            <h4>Lagos</h4>
          </div>

          <div className="flex flex-col gap-5 text-addpropertybg ">
            <h2 className="font-bold text-2xl ">Informed Decisions </h2>
            <p className="font-medium text-base">
              Make smarter choices with access to in-depth reports on
              properties. Get a full understanding of property details, rental
              histories, landlord reputations, and community amenities.{" "}
            </p>
            <div>
              <button className="border-[0.5px] rounded-md text-base font-normal px-8 py-2 bg-[#353E59] text-textcolor border-textcolor ">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WisePopup;
