import React from "react";

function WisePopup() {
  return (
    <div>
      <div className="bg-white w-full h-6"></div>
      <div className="">
        <div className=" flex flex-row ">
          <div className="">
            <h3>Informed</h3>
            <h3>Decisions</h3>
          </div>
          <div>
            <h5 className="border-b">Next stop</h5>

            <div className="flex">
              <h4>Date</h4>
              <h4>Lagos</h4>
            </div>
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
