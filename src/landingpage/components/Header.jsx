// src/components/Navbar.js
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Hamburger from "./Hamburger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-black fixed z-20 -mt-16  w-full">
      <nav className="container mx-auto p-2 flex items-center w-full justify-between bg-white ">
        <a href="#" className="text-2xl lg:text-4xl font-bold">
          rent<span className="text-customyellow">w</span>ise
          <span className="text-customyellow">.</span>
        </a>
        <div className=" hidden lg:flex items-center justify-between md:flex">
          {/* location will be automated */}

          <a href="#" className="py-2 px-8 text-lg hover:text-customyellow">
            Home
          </a>

          <DropdownMenu
            name="Residents"
            option1="Rent budget calculator"
            option2="Favourites"
            option3="Save for rent"
          />

          <DropdownMenu
            name="Landlords"
            option1="Apartment for sell"
            option2="Apartment for rent"
            option3="Sustainability records"
          />
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
        <div className=" hidden  lg:items-center lg:space-x-4 lg:flex">
          <a
            href="#"
            className="block py-2 px-4 text-lg hover:text-customyellow"
          >
            Sign up
          </a>
          <a
            href="#"
            className="block py-3 px-5 text-lg font-medium bg-addpropertybg rounded-lg hover:bg-customaddproperty"
          >
            Add property
          </a>
        </div>
        <Hamburger />
      </nav>
    </header>
  );
};

export default Header;
