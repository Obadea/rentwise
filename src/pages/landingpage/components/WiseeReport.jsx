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
    <div className=" bg-[linear-gradient(180deg,_rgba(217,217,217,0.62)_9%,_#D9D9D9_41.5%,_rgba(115,115,115,0.31)_100%)] py-7">
      <div className="max-w-[630px] mx-auto  flex flex-col gap-14 px-2  lg:px-0">
        <div className="text-center flex flex-col gap-1 ">
          <h2 className=" text-xl font-bold lg:text-3xl text-customBlackShade1 ">
            Just Before you Make that Payment Get a copy of the WiseReport
          </h2>
          <p className="text-xs font-normal text-customBlackShade1">
            A comprehensive report and data-driven guide that provides
            prospective tenants with detailed property information, landlord
            profiles, and neighborhood insights
          </p>
        </div>

        <div className="flex flex-col gap-3 px-2 ">
          {/* First component */}
          <div className="flex flex-col items-center lg:flex-row gap-2 flex-wrap   ">
            <div className="flex flex-row items-center gap-12 rounded-lg  bg-textcolor lg:h-[195px] py-2 px-4  max-w-[420px]">
              <div className="flex flex-col justify-between h-full flex-1">
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
                  <button className="font-bold text-customResultqueryGrey text-[10px] flex items-center hover:text-customSearchblue">
                    More about informed decision{" "}
                    <ArrowForwardIcon sx={{ fontSize: 20 }} />
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <img src={manrun} alt="" className="w-full" />
              </div>
            </div>

            <div className="flex flex-row items-center lg:flex-row gap-2 ">
              <div className="rounded-lg bg-textcolor py-2 px-4 flex flex-col gap-7 h-[195px] lg:w-[180px]">
                <h4 className="font-normal text-xs text-customStreetcolor">
                  Real tenant reviews
                </h4>
                <div className="">
                  <div className="flex justify-center">
                    <img src={searchDoc} alt="" />
                  </div>

                  <h3 className="font-normal text-sm text-customblack">
                    Transparency
                  </h3>
                  <h4 className="font-medium text-xs text-customResultqueryGrey">
                    Real tenant reviews......
                  </h4>
                  <button className="font-bold text-customResultqueryGrey text-[10px]  flex items-center hover:text-customSearchblue">
                    More about transparency{" "}
                    <ArrowForwardIcon sx={{ fontSize: 20 }} />
                  </button>
                </div>
              </div>

              <div className="rounded-lg bg-textcolor py-2 px-4 flex flex-col gap-7 lg:w-[200px] h-[195px] lg:hidden">
                <h4 className="font-normal text-xs text-customStreetcolor">
                  Explore Properties
                </h4>
                <div>
                  <div className="flex justify-center">
                    <img src={mandive} alt="" />
                  </div>

                  <h3 className="font-normal text-sm text-customblack">
                    Virtual Tours
                  </h3>
                  <h4 className="font-medium text-xs text-customResultqueryGrey">
                    Explore homes from the .....
                  </h4>
                  <button className="font-bold text-customResultqueryGrey text-[10px] flex items-center hover:text-customSearchblue">
                    More about virtual tours{" "}
                    <ArrowForwardIcon sx={{ fontSize: 20 }} />
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-textcolor py-2 px-4  flex-col gap-7 h-[195px] w-[180px] hidden lg:flex">
              <h4 className="font-normal text-xs text-customStreetcolor">
                Explore Properties
              </h4>
              <div>
                <div className="flex justify-center">
                  <img src={mandive} alt="" />
                </div>

                <h3 className="font-normal text-sm text-customblack">
                  Virtual Tours
                </h3>
                <h4 className="font-medium text-xs text-customResultqueryGrey">
                  Explore homes from the .....
                </h4>
                <button className="font-bold text-customResultqueryGrey text-[10px] flex items-center hover:text-customSearchblue">
                  More about virtual tours{" "}
                  <ArrowForwardIcon sx={{ fontSize: 20 }} />
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center gap-12 rounded-lg bg-textcolor py-2 px-4 max-w-[420px] h-[195px] ">
              <div className="flex flex-col justify-between h-full flex-1">
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
                  <button className="font-bold text-customResultqueryGrey text-[10px] flex items-center hover:text-customSearchblue">
                    More about smart recommendations{" "}
                    <ArrowForwardIcon sx={{ fontSize: 20 }} />
                  </button>
                </div>
              </div>
              <div>
                <img src={manthink} alt="" />
              </div>
            </div>
          </div>

          {/* Second level of components */}
          {/* <div className="flex gap-2 "></div> */}
          {/* third Component */}
          <div className="flex flex-col items-center lg:flex-row gap-2 ">
            <div className="flex flex-row max-w-[420px]  gap-12 rounded-lg bg-textcolor py-2 px-4  h-[195px] ">
              <div className="flex flex-col justify-between ">
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
                  <button className="font-bold text-customResultqueryGrey text-[10px] flex items-center hover:text-customSearchblue">
                    More about ilandlord reliability{" "}
                    <ArrowForwardIcon sx={{ fontSize: 20 }} />
                  </button>
                </div>
              </div>
              <div className="flex items-center">
                <img src={manoffice} alt="" className="" />
              </div>
            </div>

            <div className="rounded-lg bg-textcolor py-2 px-4 flex flex-col h-[195px] w-[180px] gap-7">
              <h4 className="font-normal text-xs text-customStreetcolor">
                Detailed Insights
              </h4>
              <div className="w-[150px]">
                <div className="flex justify-center">
                  <img src={manteach} alt="" />
                </div>

                <h3 className="font-normal text-sm text-customblack">
                  Neigbourhood Safety
                </h3>
                <h4 className="font-medium text-xs text-customResultqueryGrey">
                  Get detailed insights into ....
                </h4>
                <button className="font-bold text-customResultqueryGrey text-[10px] flex items-center hover:text-customSearchblue">
                  More about neigbourhood{" "}
                  <ArrowForwardIcon sx={{ fontSize: 20 }} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center">
          <button className="text-textcolor bg-customSearchblue p-4 font-bold text-base rounded-2xl ">
            Download 21 Abraham Niyi, Street Orchid Wise Report ( SAMPLE)
          </button>
        </div>
      </div>
    </div>
  );
}

export default WiseeReport;
