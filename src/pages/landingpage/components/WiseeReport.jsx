import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import manrun from "../../../assets/man-run.png";
import searchDoc from "../../../assets/search-icon.png";
import manoffice from "../../../assets/man-office.png";
import manteach from "../../../assets/man-teach.png";
import mandive from "../../../assets/man-dive.png";
import manthink from "../../../assets/man-think.png";
import WisePopup from "./WisePopup";
import { Button } from "@nextui-org/react";

function WiseeReport() {
  const [wisePopup, setwisePopup] = useState("");

  const popupContent = {
    pop1: {
      header1: "Informed",
      header2: "Decisions",
      info: "All the Info You Need in One Place",
      details:
        "Make smarter choices with access to in-depth reports on properties. Get a full understanding of property details, rental histories, landlord reputations, and community amenities",
    },
    pop2: {
      header1: "Transparency",
      header2: "",
      info: "Real Tenant Reviews and Sustainability Scores",
      details:
        "Get the full picture when renting. Real tenant reviews offer honest insights into living conditions, landlord responsiveness, and community vibe. Pair that with sustainability scores, and you'll know if a property is eco-friendly and energy-efficient.",
    },
    pop3: {
      header1: "Virtual Tours",
      header2: "",
      info: "Explore Homes from Anywhere",
      details:
        "Why wait? With virtual tours, you can explore homes right from your current space. Get a detailed look at properties, room by room, without stepping outside. It’s a convenient way to find your next home on your schedule!",
    },
    pop4: {
      header1: "Smart",
      header2: "Recommend",
      info: "Find Homes That Fit Your Budget",
      details:
        "Get personalized property suggestions with Smart Recommendations. By considering your household income, we tailor options that match your budget, making it easier to find the perfect home without overspending. House hunting has never been this simple!",
    },
    pop5: {
      header1: "Landlord",
      header2: "Reliability",
      info: "Check Before You Commit",
      details:
        "Make sure your landlord has a solid track record. Review their history and legal compliance to ensure a hassle-free rental experience. Knowing you can trust your landlord gives peace of mind before you sign the lease.",
    },
    pop6: {
      header1: "Neighborhood ",
      header2: "Safety",
      info: "Know Before You Move",
      details:
        "Stay informed with detailed insights into neighborhood safety. From crime rates to walkability and nearby amenities, we provide the key details to help you choose a safe and convenient place to live. Make your move with confidence!",
    },
  };

  const handleClick = (popNum) => {
    setwisePopup(popNum);
  };

  const handleClose = () => {
    setwisePopup("none");
  };

  const renderPopup = () => {
    const content = popupContent[wisePopup];
    if (!content) return null;

    return (
      <WisePopup
        header1={content.header1}
        header2={content.header2}
        info={content.info}
        details={content.details}
        wisePopup={wisePopup}
        onClose={handleClose}
      />
    );
  };
  // This can replace the above
  // const handlePopup = () => {
  //   return popupContent[wisePopup] && (
  //     <WisePopup
  //       header1={popupContent[wisePopup].header1}
  //       header2={popupContent[wisePopup].header2}
  //       info={popupContent[wisePopup].info}
  //       details={popupContent[wisePopup].details}
  //     />
  //   );
  // };

  return (
    <div className=" bg-[linear-gradient(180deg,_rgba(217,217,217,0.62)_9%,_#D9D9D9_41.5%,_rgba(115,115,115,0.31)_100%)] py-7">
      <div className="max-w-[630px] mx-auto  flex flex-col gap-14 px-2  lg:px-0">
        <div className="text-center flex flex-col gap-1 ">
          <h2 className=" text-xl font-bold lg:text-3xl m-auto lg:max-w-[500px] text-center text-customBlackShade1 ">
            Get a copy of the WiseReport
          </h2>
          <p className="text-xs font-normal text-customBlackShade1">
            A comprehensive report and data-driven guide that provides
            prospective tenants with detailed property information, landlord
            profiles, and neighborhood insights
          </p>
        </div>
        <div>
          {/* <iframe
            width="100%"
            height="470"
            src="https://www.youtube.com/watch?v=EmDSCY8Zw-Y&embeds_referring_euri=https%3A%2F%2Fwww.equidam.com%2F&source_ve_path=MjM4NTE"
            // src="https://www.youtube.com/embed/y9j-BL5ocW8?si=Xx4jbXA5YF-271fb&amp;start=28"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}

          <iframe
            className="rounded-xl"
            width="100%"
            height="470"
            src="https://www.youtube.com/embed/qJcq7HYaSwE?si=nLeBr21DirmA3nxK"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        {/* <div className="flex flex-col gap-3 px-2 ">
          <div className="flex flex-col items-center lg:flex-row gap-2 flex-wrap   ">
            <div
              className="flex flex-row items-center gap-12 rounded-lg  bg-textcolor lg:h-[195px] py-2 px-4 h-[195px] lg:max-w-[420px] transition-transform duration-300 lg:hover:scale-[102%] hover:shadow-lg cursor-pointer"
              onClick={() => {
                handleClick("pop1");
              }}
            >
              <div className="flex flex-col justify-between h-full flex-1">
                <h4 className="font-normal text-xs text-customStreetcolor">
                  Comprehensive report
                </h4>
                <div>
                  <h3 className="font-semibold text-sm text-customblack ">
                    Informed Decisions
                  </h3>
                  <h4 className="font-medium text-xs text-customResultqueryGrey">
                    Access Comprehensive reports on properties, .....
                  </h4>
                </div>
              </div>
              <div className="flex-1">
                <img src={manrun} alt="" className="w-full" />
              </div>
            </div>
            <div className="flex flex-row w-full lg:w-auto items-center lg:flex-row gap-2  ">
              <div
                className="rounded-lg bg-textcolor py-2 px-4 flex flex-1 flex-col gap-7 h-[195px] lg:w-[180px] transition-transform duration-300 lg:hover:scale-[102%] hover:shadow-lg cursor-pointer"
                onClick={() => {
                  handleClick("pop2");
                }}
              >
                <h4 className="font-normal text-xs text-customStreetcolor">
                  Real tenant reviews
                </h4>
                <div className="">
                  <div className="flex justify-center">
                    <img src={searchDoc} alt="" />
                  </div>

                  <h3 className=" text-sm text-customblack  font-semibold">
                    Transparency
                  </h3>
                  <h4 className="font-medium text-xs text-customResultqueryGrey">
                    Real tenant reviews......
                  </h4>
                </div>
              </div>

              <div
                className="rounded-lg bg-textcolor py-2 px-4 flex flex-col flex-1 gap-7 lg:w-[200px] h-[195px] lg:hidden"
                onClick={() => {
                  handleClick("pop3");
                }}
              >
                <h4 className="font-normal text-xs text-customStreetcolor">
                  Explore Properties
                </h4>
                <div>
                  <div className="flex justify-center">
                    <img src={mandive} alt="" />
                  </div>

                  <h3 className=" text-sm text-customblack font-semibold">
                    Virtual Tours
                  </h3>
                  <h4 className="font-medium text-xs text-customResultqueryGrey">
                    Explore homes from the .....
                  </h4>

                </div>
              </div>
            </div>
            <div
              className="rounded-lg bg-textcolor py-2 px-4  flex-col gap-7 h-[195px] w-[180px] hidden lg:flex transition-transform duration-300 lg:hover:scale-[102%] hover:shadow-lg cursor-pointer"
              onClick={() => {
                handleClick("pop3");
              }}
            >
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

              </div>
            </div>

            <div
              className="flex flex-row items-center gap-12 rounded-lg bg-textcolor py-2 px-4 lg:max-w-[420px] h-[195px] transition-transform duration-300 lg:hover:scale-[102%] hover:shadow-lg cursor-pointer"
              onClick={() => {
                handleClick("pop4");
              }}
            >
              <div className="flex flex-col justify-between h-full flex-1">
                <h4 className="font-normal text-xs text-customStreetcolor">
                  Property Suggestions{" "}
                </h4>
                <div>
                  <h3 className=" text-sm text-customblack font-semibold">
                    Smart Recommendations
                  </h3>
                  <h4 className="font-medium text-xs text-customResultqueryGrey">
                    Tailored property suggestions based on your household......
                  </h4>
                </div>
              </div>
              <div>
                <img src={manthink} alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row gap-2  ">
            <div
              className="flex flex-row w-full lg:max-w-[420px]  gap-12 rounded-lg bg-textcolor py-2 px-4  h-[195px] transition-transform duration-300 lg:hover:scale-[102%] hover:shadow-lg cursor-pointer"
              onClick={() => {
                handleClick("pop5");
              }}
            >
              <div className="flex flex-col justify-between ">
                <h4 className="font-normal text-xs text-customStreetcolor">
                  Landlord’s Record
                </h4>
                <div>
                  <h3 className=" text-sm text-customblack font-semibold">
                    Landlord Reliability
                  </h3>
                  <h4 className="font-medium text-xs text-customResultqueryGrey">
                    Know your landlord's track record and legal compliance
                    before .....
                  </h4>
                </div>
              </div>
              <div className="flex items-center">
                <img src={manoffice} alt="" className="" />
              </div>
            </div>

            <div className="rounded-lg bg-textcolor py-2 px-4 flex flex-row lg:flex-col h-[195px] justify-between lg:w-auto w-full  transition-transform duration-300 lg:hover:scale-[102%] hover:shadow-lg cursor-pointer">
              <div
                className="flex flex-col lg:justify-normal lg:h-full gap-7 justify-between"
                onClick={() => {
                  handleClick("pop6");
                }}
              >
                <h4 className="font-normal text-xs text-customStreetcolor">
                  Detailed Insights
                </h4>
                <div className="w-[200px] lg:w-[150px]">
                  <div className="hidden lg:flex justify-center">
                    <img src={manteach} alt="" />
                  </div>

                  <h3 className=" text-sm text-customblack font-semibold">
                    Neigbourhood Safety
                  </h3>
                  <h4 className="font-medium text-xs text-customResultqueryGrey">
                    Get detailed insights into ....
                  </h4>
                </div>
              </div>

              <div className="flex lg:hidden justify-center items-center w-[150px]">
                <img src={manteach} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div> */}

        <div className=" flex lg:flex justify-center">
          <Button className="text-textcolor bg-customSearchblue p-4 h-12  lg:font-bold lg:text-base rounded-2xl font-medium text-xs ">
            Download 21 Abraham Niyi, Street Orchid Wise Report (SAMPLE)
          </Button>
        </div>
        {renderPopup()}
      </div>
    </div>
  );
}

export default WiseeReport;
