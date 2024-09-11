import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import manrun from "../../../assets/man-run.png";

function WiseeReport() {
  return (
    <div>
      <div>
        <h2 className="font-bold text-3xl text-customBlackShade1 ">
          Just Before you Make that Payment Get a copy of the WiseReport
        </h2>
        <p className="text-xs font-normal text-customBlackShade1">
          A comprehensive report and data-driven guide that provides prospective
          tenants with detailed property information, landlord profiles, and
          neighborhood insights
        </p>
        <div>
          <div>
            <div>
              <h4 className="font-normal text-xs text-customStreetcolor">
                Comprehensive report
              </h4>
              <div>
                <h3 className="font-normal text-sm text-customblack">
                  Informed Decisions
                </h3>
                <h4 className="font-medium text-xs text-customResultqueryGrey">
                  Access Comprehensive reports on properties, .....
                </h4>
                <button className="font-bold text-customResultqueryGrey">
                  More about informed decision <ArrowForwardIcon />
                </button>
              </div>
              <div>
                <img src={manrun} alt="" />
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default WiseeReport;
