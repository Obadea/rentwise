import React, { useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import SearchIcon from "@mui/icons-material/Search";
import MultiIncomeAdd from "./MultiIncomeAdd";
import TotalIncome from "./TotalIncome";

function LocationSearch() {
  const [filter, setFilter] = useState(false);

  const handleClick = () => {
    setFilter(!filter);
  };
  return (
    <div>
      <div className=" flex  lg:flex justify-center lg:overflow-hidden  ">
        <div className="max-w-[600px] flex lg:hidden justify-between items-center   gap-2 absolute -bottom-5 ">
          <div className="bg-customsearchinput min-w-[294px] h-[52px] flex flex-grow justify-center rounded-lg py-2 shadow-[0px_4px_4px_0px] shadow-custompurple">
            <input
              type="text"
              placeholder="Search"
              className=" ml-4 w-[80%] h-[38px] text-2xl focus:outline-none"
            />
            <SearchIcon
              className="text-customBlackShade"
              sx={{ fontSize: 38 }}
            />
          </div>
          <SortIcon
            onClick={handleClick}
            className=" bg-customsearchinput rounded-lg text-customBlackShade shadow-[0px_4px_4px_0px] shadow-custompurple cursor-pointer"
            sx={{ fontSize: 50 }}
          />
        </div>
        <form
          className={`${
            filter ? "flex flex-col relative top-32 w-[80%] z-20" : "hidden"
          }  text-black lg:flex flex-shrink justify-evenly bg-gray-100 px-6 py-4 gap-6 rounded-lg`}
        >
          <div>
            <h3>LOOKING FOR</h3>
            <select
              name="cars"
              id="cars"
              className="w-[100%] lg:w-44 p-2 border-black "
            >
              <option value="" className="text-dropDowmcolor font-normal">
                Property Type
              </option>
              <optgroup
                label="Commercial"
                className="text-dropDowmcolor font-normal"
              >
                <option
                  value="office"
                  className="text-dropDowmcolor font-normal"
                >
                  Office
                </option>
                <option value="shop" className="text-dropDowmcolor font-normal">
                  Shop
                </option>
              </optgroup>
              <optgroup
                label="Residential"
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
              className="w-[100%] lg:w-44 p-2 border-black text-dropDowmcolor "
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
              className="w-[100%] lg:w-44 p-2 border-black text-dropDowmcolor"
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
              className="w-[100%] lg:w-44 p-2 border-black text-dropDowmcolor "
            >
              <option value="">Max. Range</option>
              <option value="30000">Less than $30,000</option>
              <option value="50000">$30,000 to $50,000</option>
              <option value="100000">$50,000 - $100,000</option>
              <option value="max">Max Price</option>
            </select>
          </div>
          <button className="mx-auto h-10 bg-customSearchblue text-textcolor font-bold w-44 rounded-lg mt-6">
            Search
          </button>
        </form>
      </div>
      <MultiIncomeAdd />
      <TotalIncome />
    </div>
  );
}

export default LocationSearch;
