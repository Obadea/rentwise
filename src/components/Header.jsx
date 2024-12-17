// src/components/Navbar.js
import React from "react";
import DropdownMenu from "./DropdownMenu";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = ({ className, newclassName }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  let options;
  return (
    <header
      className={` ${newclassName}  bg-white  text-black relative z-30 top-0 w-full  `}
    >
      <nav
        className={` ${className} pl-4 lg:pl-20 py-2 flex items-center w-full justify-between  lg:py-0 `}
      >
        <Logo />
        <div className=" hidden lg:flex items-center gap-3 justify-between ">
          {/* location will be automated */}

          <a
            href="#q"
            className="py-2 px-4 text-lg text-customNameBlack hover:text-customyellow"
          >
            Home
          </a>

          <DropdownMenu
            name="Residents"
            dropdown={
              (options = [
                "Quick services",
                "Rent affordability calculator",
                "RentSaver account",
                "WiseReport",
                "search",
              ])
            }
          />

          <DropdownMenu
            name="Landlords"
            dropdown={(options = ["Rental Management", "Quick Services"])}
          />

          <a
            href="/shortlet"
            className="py-2 px-4 text-lg hover:text-customyellow"
          >
            Shortlet
          </a>

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
          <Link
            to="accessId"
            className="block py-5 px-5 text-lg font-medium text-textcolor bg-customNameBlack hover:text-customResultqueryGrey hover:bg-customaddproperty"
          >
            Add property
          </Link>
        </div>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Header;
