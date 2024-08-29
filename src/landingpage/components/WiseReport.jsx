import React from "react";
import reportCard from "../../assets/iPhone 13 mini - 3.png";
function WiseReport() {
  return (
    <div>
      <div className="px-12 pt-16">
        <h2 className="text-center font-bold text-xl lg:text-4xl ">
          Heard about the
          <span className="text-customaccent"> Wise Report??</span>
        </h2>
        <div className=" lg:flex justify-between mt-12 gap-12">
          <div className="flex flex-col gap-[52px] lg:mt-24 min-w-[450px]">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-3xl text-customNameBlack">
                Just before you make that payment,
                <a href="#" className="text-customSearchblue">
                  {" "}
                  Download the wise report!
                </a>
              </h3>
              <p className="text-lg font-normal text-customNameBlack">
                Your trusted gateway to seamless and stress free home rentals in
                Lagos
              </p>
            </div>

            <h4 className="text-xl font-normal  text-customStreetcolor">
              The Wise Report offers a comprehensive resource that equips both
              landlords and prospective tenants with vital information—from
              detailed property insights and landlord profiles to neighborhood
              analysis, agent details, and reviews from previous tenants. This
              empowers landlords to attract well-informed tenants while helping
              tenants make confident, informed decisions.
            </h4>
            <button className=" text-textcolor text-xl font-medium py-4 rounded-2xl  bg-customSearchblue  w-[295px]">
              Download WiseReport
            </button>
          </div>
          <div className="lg:w-[600px] min-w-[300px] lg:min-w-[450px] flex-grow">
            <img src={reportCard} alt="report card" className="w-full h-full" />
          </div>
          {/* <div> Incase the words are needed
            <div>
              <h3>THE WISE REPORT</h3>
              <h3>AUG 2024</h3>
            </div>
            <div>
              <h3>INTRODUCTION</h3>
              <div>
                <div>
                  <p>
                    Wise Report provides a comprehensive report that includes
                    property details, landlord information, neighbourhood
                    insights, agent information, and previous tenant reviews,
                    empowering you to make informed decisions.
                  </p>
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div>
              <h3>REPORT STRUCTURE</h3>
              <div>
                <div>
                  <p>
                    Wise Report provides a comprehensive report that includes
                    property details, landlord information, neighbourhood
                    insights, agent information, and previous tenant reviews,
                    empowering you to make informed decisions.
                  </p>
                </div>
                <div>
                  <p>
                    Wise Report provides a comprehensive report that includes
                    property details, landlord information, neighbourhood
                    insights, agent information, and previous{" "}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3>REPORT FEATURES</h3>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default WiseReport;
