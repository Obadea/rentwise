import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import manrun from "../../../assets/man-run.png";
import searchDoc from "../../../assets/search-icon.png";
import manoffice from "../../../assets/man-office.png";
import manteach from "../../../assets/man-teach.png";
import mandive from "../../../assets/man-dive.png";
import manthink from "../../../assets/man-think.png";

function WiseeReport() {
  return (
    <div className=" bg-[linear-gradient(180deg,_rgba(217,217,217,0.62)_9%,_#D9D9D9_41.5%,_rgba(115,115,115,0.31)_100%)]">
      <div className="w-[630px] mx-auto">
        <div className="text-center  gap-1 ">
          <h2 className="font-bold text-3xl text-customBlackShade1 ">
            Just Before you Make that Payment Get a copy of the WiseReport
          </h2>
          <p className="text-xs font-normal text-customBlackShade1">
            A comprehensive report and data-driven guide that provides
            prospective tenants with detailed property information, landlord
            profiles, and neighborhood insights
          </p>
        </div>
        <div>
          <div>
            <div>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <h4 className="font-normal text-xs text-customStreetcolor">
                    Comprehensive report
                  </h4>
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
            <div>
              <h4 className="font-normal text-xs text-customStreetcolor">
                Real tenant reviews
              </h4>
              <div>
                <img src={searchDoc} alt="" />
                <h3 className="font-normal text-sm text-customblack">
                  Transparency
                </h3>
                <h4 className="font-medium text-xs text-customResultqueryGrey">
                  Real tenant reviews......
                </h4>
                <button className="font-bold text-customResultqueryGrey">
                  More about transparency <ArrowForwardIcon />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h4 className="font-normal text-xs text-customStreetcolor">
                Explore Properties
              </h4>
              <div>
                <img src={mandive} alt="" />
                <h3 className="font-normal text-sm text-customblack">
                  Virtual Tours
                </h3>
                <h4 className="font-medium text-xs text-customResultqueryGrey">
                  Explore homes from the .....
                </h4>
                <button className="font-bold text-customResultqueryGrey">
                  More about virtual tours <ArrowForwardIcon />
                </button>
              </div>
            </div>

            <div>
              <div>
                <h4 className="font-normal text-xs text-customStreetcolor">
                  Property Suggestions{" "}
                </h4>
                <div>
                  <h3 className="font-normal text-sm text-customblack">
                    Smart Recommendations
                  </h3>
                  <h4 className="font-medium text-xs text-customResultqueryGrey">
                    Tailored property suggestions based on your household......
                  </h4>
                  <button className="font-bold text-customResultqueryGrey">
                    More about smart recommendations <ArrowForwardIcon />
                  </button>
                </div>
                <div>
                  <img src={manthink} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h4 className="font-normal text-xs text-customStreetcolor">
                  Landlord’s Record
                </h4>
                <div>
                  <h3 className="font-normal text-sm text-customblack">
                    Landlord Reliability
                  </h3>
                  <h4 className="font-medium text-xs text-customResultqueryGrey">
                    Know your landlord's track record and legal compliance
                    before .....
                  </h4>
                  <button className="font-bold text-customResultqueryGrey">
                    More about ilandlord reliability <ArrowForwardIcon />
                  </button>
                </div>
                <div>
                  <img src={manoffice} alt="" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-normal text-xs text-customStreetcolor">
                Detailed Insights
              </h4>
              <div>
                <img src={manteach} alt="" />
                <h3 className="font-normal text-sm text-customblack">
                  Neigbourhood Safety
                </h3>
                <h4 className="font-medium text-xs text-customResultqueryGrey">
                  Get detailed insights into ....
                </h4>
                <button className="font-bold text-customResultqueryGrey">
                  More about neigbourhood <ArrowForwardIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WiseeReport;
