import React from "react";
import MapIcon from "@mui/icons-material/Map";

function Address() {
  return (
    <div className="px-4 py-6 lg:p-10 flex flex-col gap-4 mt-20">
      <div>
        <h4 className=" font-medium text-lg text-customdark">Address</h4>
        <p className="font-bold text-xs">
          {" "}
          <MapIcon /> Open on Google Maps
        </p>
      </div>
    </div>
  );
}

export default Address;
