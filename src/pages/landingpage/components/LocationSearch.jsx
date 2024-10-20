import React, { useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import SearchIcon from "@mui/icons-material/Search";
import MultiIncomeAdd from "./MultiIncomeAdd";
import TotalIncome from "./TotalIncome";
import SearchBetter from "./SearchBetter";

import ReusableSelect from "../../../components/ReuseableSelect";
// import SelectDropdown from "./SelectDropdown";

const propertyOptions = [
  {
    label: "Commercial",
    options: [
      { label: "Office", value: "office" },
      { label: "Shop", value: "shop" },
      { label: "Short Let", value: "shortLet" },
      { label: "Event Centre", value: "eventCentre" },
    ],
  },
  {
    label: "Residential",
    options: [
      { label: "Apartment", value: "apartment" },
      { label: "Single Family Home", value: "singeFamilyHome" },
      { label: "Multi Family Home", value: "multiFamilyHome" },
    ],
  },
];

const locationOptions = [
  { value: "lagosIsland", label: "Lagos Island" },
  { value: "victoriaIsland", label: "Victoria Island" },
  { value: "lekki", label: "Lekki" },
  { value: "ajah", label: "Ajah" },
  { value: "surulere", label: "Surulere" },
];

const sizeOptions = [
  { value: "one", label: "1" },
  { value: "two", label: "2" },
  { value: "three", label: "3" },
  { value: "four", label: "4" },
  { value: "five", label: "5" },
  { value: "six", label: "6" },
];

const incomeOptions = [
  { value: "30000", label: "Less than ₦30,000" },
  { value: "50000", label: "₦30,000 - ₦50,000" },
  { value: "100000", label: "₦50,000 - ₦100,000" },
  { value: "500000", label: "₦100,000 - ₦500,000" },
  { value: "max", label: "Max. Price" },
];

function LocationSearch() {
  const [filter, setFilter] = useState(false);

  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [num3, setNum3] = useState(null);
  const [total, setTotal] = useState(null);

  // const [amount, setAmount] = useState({
  //   num1: 0,
  //   num2: 0,
  //   num3: 0,
  // });

  // function setField(field, value) {`
  //   setAmount((prev) => ({ ...prev, [field]: value }));
  // }

  // (e) => setField("num2", e.target.value);

  const [activePopup, setActivePopup] = useState("");

  const addTotalValue = () => {
    const totalValue = num1 + num2 + num3;
    console.log(totalValue);
    setTotal(totalValue);
  };

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
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <ReusableSelect
            options={propertyOptions}
            placeholder={"Property Type"}
            label={"LOOKING FOR"}
            onChange={(value) => console.log(value)}
          />
          <ReusableSelect
            options={locationOptions}
            placeholder={"All Cities in Lagos"}
            label={"LOCATION"}
            onChange={(value) => console.log(value)}
          />
          <ReusableSelect
            options={sizeOptions}
            placeholder={"Bedroom"}
            label={"PROPERTY SIZE"}
            onChange={(value) => console.log(value)}
          />
          <ReusableSelect
            options={incomeOptions}
            placeholder={"Max. Range"}
            label={"HOUSEHOLD INCOME"}
            onChange={(value) => console.log(value)}
          />

          <button
            type="submit"
            className="mx-auto h-10 bg-customSearchblue text-textcolor font-bold w-44 rounded-lg mt-6"
            onClick={() => setActivePopup("pop1")}
          >
            Search
          </button>
        </form>
      </div>
      {activePopup === "pop1" ? (
        <SearchBetter
          activePopup={activePopup}
          setActivePopup={setActivePopup}
        />
      ) : activePopup === "pop2" ? (
        <MultiIncomeAdd
          activePopup={activePopup}
          setActivePopup={setActivePopup}
          num1={num1}
          setNum1={setNum1}
          num2={num2}
          setNum2={setNum2}
          setNum3={setNum3}
          total={total}
          addTotalValue={addTotalValue}
        />
      ) : activePopup === "pop3" ? (
        <TotalIncome
          total={total}
          activePopup={activePopup}
          setActivePopup={setActivePopup}
        />
      ) : null}
    </div>
  );
}

export default LocationSearch;
