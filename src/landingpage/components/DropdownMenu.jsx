import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function DropdownMenu(props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex justify-center items-center">
        <button
          type="button"
          className="inline-flex justify-center w-full  py-2 px-3 text-lg hover:text-customyellow  text-customNameBlack focus:outline-none   focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {props.name}
        </button>
        <KeyboardArrowDownIcon />
      </div>

      {hover && (
        <div
          className="origin-top-right absolute right-0  w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-md text-customNameBlack hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              {props.option1}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-md text-customNameBlack hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              {props.option2}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-md text-customNameBlack hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              {props.option3}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
