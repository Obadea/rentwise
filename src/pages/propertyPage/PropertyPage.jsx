import React from "react";
import Header from "../landingpage/components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import RoomIcon from "@mui/icons-material/Room";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";

function PropertyPage() {
  return (
    <div>
      <Header />
      <div>{/* Horizontal navbar for each vertical component */}</div>
      <div className="flex flex-row justify-between px-8">
        <div className=" ml-4 mt-24">
          <Breadcrumb className="hidden lg:block" />
          <h3>Design apartment</h3>
          <div className="flex">
            <p>DOWNLOAD WISEREPORT </p>
            <p>FOR SALE</p>
          </div>
          <div className="flex">
            <RoomIcon />
            <p>Allen Avenue, Lagos</p>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <FavoriteBorderIcon />
            <ShareIcon />
            <PrintIcon />
          </div>
          <p>$876,000</p>
          <p>$7,600/sq ft</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyPage;
