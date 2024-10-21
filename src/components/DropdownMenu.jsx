import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

function DropdownMenu(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex justify-center ">
        <button
          type="button"
          className="inline-flex justify-center w-full items-center  py-2 px-3 text-lg hover:text-customyellow  text-customNameBlack focus:outline-none   focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {props.name}
          <KeyboardArrowDownIcon />
        </button>
      </div>

      {hover && (
        <div
          className="origin-top-right absolute left-0  w-auto  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {props.dropdown.map((option, index) => (
              <Link
                to={option}
                className="block px-4 py-2 text-md text-customNameBlack whitespace-nowrap hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                key={index}
              >
                {option}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
