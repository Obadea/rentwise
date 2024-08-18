import React from "react";

function LocationSearch() {
  return (
    <div className="flex justify-center  ">
      <form className="text-black flex justify-evenly bg-gray-100 px-8 py-4 gap-6 rounded-lg">
        <div>
          <h3>LOOKING FOR</h3>
          <select name="cars" id="cars" className="w-44 p-2 border-black ">
            <option value="">Property Type</option>
            <option value="saab">Type 1</option>
          </select>
        </div>
        <div>
          <h3>LOCATION</h3>
          <select name="cars" id="cars" className="w-44 p-2 border-black ">
            <option value="">All Cities in Lagos</option>
            <option value="saab">Type 1</option>
          </select>
        </div>
        <div>
          <h3>PROPERTY SIZE</h3>
          <select name="cars" id="cars" className="w-44 p-2 border-black ">
            <option value="">Bedroom</option>
            <option value="saab">Type 1</option>
          </select>
        </div>
        <div>
          <h3>HOUSEHOLD INCOME</h3>
          <select name="cars" id="cars" className="w-44 p-2 border-black ">
            <option value="">Max. Range</option>
            <option value="saab">Type 1</option>
          </select>
        </div>
        <button className=" h-10 bg-blue-500 w-44 rounded-lg mt-6">
          Search
        </button>
      </form>
    </div>
  );
}

export default LocationSearch;
