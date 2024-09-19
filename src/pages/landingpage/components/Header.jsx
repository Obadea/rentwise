// src/components/Navbar.js
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Hamburger from "./Hamburger";
import Logo from "../../../components/Logo";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  let options;
  return (
    <header className="bg-white  text-black fixed z-20 top-0 w-full ">
      <nav className=" pl-8 py-2 flex items-center w-full justify-between bg-white lg:py-0  ">
        <Logo />
        <div className=" hidden lg:flex items-center gap-4 justify-between ">
          {/* location will be automated */}

          <a href="#" className="py-2 px-8 text-lg hover:text-customyellow">
            Home
          </a>

          <DropdownMenu
            name="Residents"
            dropdown={
              (options = [
                "Quick services",
                "Rent affordability calculator",
                "RentSaver account",
                "Short let",
                "WiseReport",
                "Compare apartment",
              ])
            }
          />

          <DropdownMenu
            name="Landlords"
            dropdown={(options = ["Rental Management", "Quick Services"])}
          />

          <DropdownMenu
            name="Company"
            dropdown={
              (options = [
                "About us",
                "Our Services",
                "Products",
                "Leadership",
                "Partners",
              ])
            }
          />

          <Link
            to="/signin"
            className="block py-2 px-4 text-lg
            hover:text-customyellow"
          >
            {" "}
            Sign In
          </Link>
          <a
            href="#"
            className="block py-5 px-5 text-lg font-medium text-textcolor bg-customNameBlack hover:text-customResultqueryGrey hover:bg-customaddproperty"
          >
            Add property
          </a>
        </div>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Header;
