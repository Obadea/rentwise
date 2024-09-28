import React from "react";
import Header from "../landingpage/components/Header";
import Breadcrumb from "../../components/BreadCrumb";

function PropertyPage() {
  return (
    <div>
      <Header />
      <div>{/* Horizontal navbar for each vertical component */}</div>
      <div className="px-8">
        <div className=" ml-4 mt-24">
          <Breadcrumb />
          <h3></h3>
        </div>
        <h3>hello</h3>
      </div>
    </div>
  );
}

export default PropertyPage;
