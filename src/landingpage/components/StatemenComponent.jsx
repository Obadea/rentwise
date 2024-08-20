import React from "react";
import bayo from "../../assets/bayo.png";
import chioma from "../../assets/chioma.png";
import funke from "../../assets/funke.png";

function StatemenComponent() {
  return (
    <div className="flex justify-center pt-12">
      <div>
        <h2 className="text-center text-3xl">Meet Our Statemen</h2>
        <p className="text-center text-base">
          Our expert agents are here to guide you in finding the perfect
          property with personalized, professional service.
        </p>
        <div className="flex justify-around px-20 gap-1 py-6">
          <div className="flex flex-col justify-center items-center text-center px-2 py-4">
            <div>
              <img src={bayo} alt="" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Adebayo Adekunle</h3>
              <p className="text-sm">Senior Property Consultant</p>
              <p className="text-base">
                With over 6 years of experience in the real estate industry,
                Adebayo brings a wealth of knowledge and a passion for helping
                clients achieve their goals. Specializing in....
              </p>
              <button className="px-4 py-2 my-4 border text-blue-500">
                View profile
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center px-2 py-4">
            <div>
              <img src={chioma} alt="" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Chioma Okafor</h3>
              <p className="text-sm">Residential Specialist</p>
              <p className="text-base">
                Known for her approachable demeanor and meticulous attention to
                detail, Chioma has a proven track record of matching clients
                with their ideal homes. She believes in building....
              </p>
              <button className="px-4 py-2 my-4 border text-blue-500">
                View profile
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center px-2 py-4">
            <div>
              <img src={funke} alt="" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Funke Adeyemi</h3>
              <p className="text-sm">Commercial Property Advisor</p>
              <p className="text-base">
                Funke specializes in commercial real estate, helping businesses
                find the perfect location to thrive. With a strategic approach
                and a deep understanding of the commercial market,
              </p>
              <button className="px-4 py-2 my-4 border text-blue-500">
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
