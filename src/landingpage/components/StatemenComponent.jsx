import React from "react";
import bayo from "../../assets/bayo.png";
import chioma from "../../assets/chioma.png";
import funke from "../../assets/funke.png";

function StatemenComponent() {
  return (
    <div className="flex justify-center pt-12 bg-customaccent100">
      <div>
        <h2 className="text-center text-3xl font-bold ">Meet Our Statemen</h2>
        <p className="text-center text-base font-normal">
          Our expert agents are here to guide you in finding the perfect
          property with personalized, professional service.
        </p>
        <div className="flex justify-around px-24 gap-2 py-6 ">
          <div className="flex flex-col justify-center items-center text-center px-2 py-8 bg-white hover:shadow-[8px_4px_20px_0px_rgba(0,0,0,0.1)] border border-cardBorder">
            <div>
              <img src={bayo} alt="" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-customNameBlack">
                Adebayo Adekunle
              </h3>
              <p className="text-sm font-normal text-customStreetcolor">
                Senior Property Consultant
              </p>
              <p className="text-sm font-normal text-customBlackShade">
                With over 6 years of experience in the real estate industry,
                Adebayo brings a wealth of knowledge and a passion for helping
                clients achieve their goals. Specializing in....
              </p>
              <button className="px-4 py-2 my-2 text-xs font-bold text-customProfileblue hover:text-DownloadHover">
                View profile
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center px-2 py-4 bg-white hover:shadow-[8px_4px_20px_0px_rgba(0,0,0,0.1)] border border-cardBorder">
            <div>
              <img src={chioma} alt="" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-customNameBlack">
                Chioma Okafor
              </h3>
              <p className="text-sm font-normal text-customStreetcolor">
                Residential Specialist
              </p>
              <p className="text-sm font-normal text-customBlackShade">
                Known for her approachable demeanor and meticulous attention to
                detail, Chioma has a proven track record of matching clients
                with their ideal homes. She believes in building....
              </p>
              <button className="px-4 py-2 my-2 text-xs font-bold text-customProfileblue hover:text-DownloadHover">
                View profile
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center px-2 py-4 bg-white hover:shadow-[8px_4px_20px_0px_rgba(0,0,0,0.1)] border border-cardBorder">
            <div>
              <img src={funke} alt="" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-customNameBlack">
                Funke Adeyemi
              </h3>
              <p className="text-sm font-normal text-customStreetcolor">
                Commercial Property Advisor
              </p>
              <p className="text-sm font-normal text-customBlackShade ">
                Funke specializes in commercial real estate, helping businesses
                find the perfect location to thrive. With a strategic approach
                and a deep understanding of the commercial market,
              </p>
              <button className="px-4 py-2 my-2 text-xs font-bold text-customProfileblue hover:text-DownloadHover">
                View profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatemenComponent;
