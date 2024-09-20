import React from "react";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function WisePopup() {
  return (
    <div className="w-[720px] relative left-10 ">
      <div className="bg-white w-full h-12"></div>
      <div className="flex flex-row  h-[390px]">
        <div className="flex flex-col w-[600px] justify-center gap-4">
          <h3>Informed</h3>
          <h3>Decisions</h3>
          <p>All the Info You Need in One Place</p>
        </div>

        <div>
          <div>
            <div>
              <XIcon />
              <FacebookIcon />
              <InstagramIcon />
            </div>
            <h5 className="border-b">Next stop</h5>
          </div>
          <div className="flex">
            <h4>Date</h4>
            <h4>Lagos</h4>
          </div>

          <div>
            <h2>Informed Decisions </h2>
            <p>
              Make smarter choices with access to in-depth reports on
              properties. Get a full understanding of property details, rental
              histories, landlord reputations, and community amenities.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WisePopup;
