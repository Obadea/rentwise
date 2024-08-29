import React, { useState } from "react";

function LocationSearch() {
  // State to track the selected button
  const [selectedButton, setSelectedButton] = useState(1);

  // Function to handle button click
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="flex justify-center  ">
      <form className="text-black flex justify-evenly bg-gray-100 px-8 py-4 gap-6 rounded-lg">
        <div>
          <h3>LOOKING FOR</h3>
          <select name="cars" id="cars" className="w-44 p-2 border-black ">
            <option value="" className="text-dropDowmcolor font-normal">
              Property Type
            </option>
            <optgroup
              label="Commercial"
              className="text-dropDowmcolor font-normal"
            >
              <option value="office" className="text-dropDowmcolor font-normal">
                Office
              </option>
              <option value="shop" className="text-dropDowmcolor font-normal">
                Shop
              </option>
            </optgroup>
            <optgroup
              label="Resedential"
              className="text-dropDowmcolor font-normal"
            >
              <option value="apartment">Apartment</option>
              <option value="singleFamilyHome">Single Family Home</option>
              <option value="multiFamilyHome">Multi Family Home</option>
            </optgroup>
          </select>
        </div>
        <div>
          <h3 className="text-customblack">LOCATION</h3>
          <select
            name="cars"
            id="cars"
            className="w-44 p-2 border-black text-dropDowmcolor "
          >
            <option value="">All Cities in Lagos</option>
            <option value="lagosIsland">Lagos Island</option>
            <option value="victoriaIsland">Victoria Island</option>
            <option value="lekki">Lekki</option>
            <option value="ajah">Ajah</option>
            <option value="surulere">Surulere</option>
          </select>
        </div>
        <div>
          <h3 className="text-customblack">PROPERTY SIZE</h3>
          <select
            name="cars"
            id="cars"
            className="w-44 p-2 border-black text-dropDowmcolor"
          >
            <option value="">Bedroom</option>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="five">5</option>
            <option value="six">6</option>
          </select>
        </div>
        <div>
          <h3 className="text-customblack">HOUSEHOLD INCOME</h3>
          <select
            name="cars"
            id="cars"
            className="w-44 p-2 border-black text-dropDowmcolor "
          >
            <option value="">Max. Range</option>
            <option value="30000">Less than $30,000</option>
            <option value="50000">$30,000 to $50,000</option>
            <option value="100000">$50,000 - $100,000</option>
            <option value="max">Max Price</option>
          </select>
        </div>
        <button className=" h-10 bg-customSearchblue text-textcolor font-bold w-44 rounded-lg mt-6">
          Search
        </button>
      </form>
    </div>
  );
}

export default LocationSearch;
