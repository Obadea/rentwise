// src/components/Navbar.js
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-black ">
      <nav className="container mx-auto p-2 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-customblue">
          rent<span className="text-yellow-400">w</span>ise
        </a>
        <div className=" hidden flex items-center justify-between md:block">
          {/* location will be automated */}
          <a href="#" className="py-2 px-4 text-lg">
            Location
          </a>
          <a href="#" className="py-2 px-4 text-lg">
            Home
          </a>
          <a href="#" className="py-2 px-4 text-lg">
            Manage rentals
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
            Sign in
          </a>
          <a href="#" className="block py-2 px-4 text-lg">
            Sign up
          </a>
          <a href="#" className="block py-2 px-4 text-lg">
            Add property
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;