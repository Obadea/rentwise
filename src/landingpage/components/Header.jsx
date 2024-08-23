// src/components/Navbar.js
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-black ">
      <nav className="container mx-auto p-2 flex items-center justify-between">
        <a href="#" className="text-4xl font-bold">
          rent<span className="text-customyellow">w</span>ise
          <span className="text-customyellow">.</span>
        </a>
        <div className=" hidden flex items-center justify-between md:block">
          {/* location will be automated */}

          <a href="#" className="py-2 px-4 text-lg">
            Home
          </a>
          <a href="#" className="py-2 px-4 text-lg">
            Residents <KeyboardArrowDownIcon />
          </a>
          <a href="#" className="py-2 px-4 text-lg">
            Blogs
          </a>
        </div>
        {/* <div className="block lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16m-7 6h7" 
                />
              )}
            </svg>
          </button>
        </div> */}
        <div
          className={`lg:flex lg:items-center lg:space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="#" className="block py-2 px-4 text-lg">
            Landlords <KeyboardArrowDownIcon />
          </a>
          <a href="#" className="block py-2 px-4 text-lg">
            Sign up
          </a>
          <a
            href="#"
            className="block py-3 px-5 text-lg font-medium bg-addpropertybg rounded-lg"
          >
            Add property
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
