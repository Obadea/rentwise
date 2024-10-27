import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";

function SearchResultpage() {
  return (
    <div>
      <Header />
      <div>
        <Breadcrumb />
      </div>
      <div>
        <div>
          <h3 className="font-bold text-2xl text-customdark ">Search</h3>
          <p className="font-normal text-base text-customgray4">
            Search shortlets around you
          </p>
        </div>
        <div>
          {/* location and search */}
          <div></div>

          {/* selects for price etc */}
          <div className="flex "></div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultpage;
