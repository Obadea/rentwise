// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { getAuthData } from "../utils/helperFunction";
import { useAuth } from "../utils/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { logOut } from "../utils/endpoint";
import { toast } from "react-toastify";
import { Button } from "@nextui-org/react";

const Header = ({ className, newclassName }) => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: logOut,
    onSuccess: async (data) => {
      logout();
      navigate("/");
      toast(data.message, { type: "success", draggable: true });
    },
    onError: async (err) => {
      toast(err.message, { type: "error", draggable: true });
      console.log(err);
    },
  });

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

          <Link
            to="/"
            className="py-2 px-4 text-lg text-customNameBlack hover:text-customyellow"
          >
            Home
          </Link>

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
            dropdown={(options = ["Manage Rentals", "Quick Services"])}
          />

          <a
            href="/shortlet"
            className="py-2 px-4 text-lg hover:text-customyellow"
          >
            Shortlet
          </a>
          <a
            href="/properties"
            className="py-2 px-4 text-lg hover:text-customyellow"
          >
            Properties
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
                "blog",
                "contact us",
              ])
            }
          />

          {token ? (
            <Button
              radius="none"
              className="block h-16 px-5 text-lg font-medium text-textcolor bg-customNameBlack hover:text-customResultqueryGrey hover:bg-customaddproperty"
              // logout
              onPress={() => {
                // mutation.mutate(token);
                navigate("/dashboard");
              }}
            >
              Add Property
            </Button>
          ) : (
            <>
              <Link
                to="/signin"
                className="block py-2 px-4 text-lg
          hover:text-customyellow"
              >
                Sign In
              </Link>
              <Link
                to="/accessId"
                className="block py-5 px-5 text-lg font-medium text-textcolor bg-customNameBlack hover:text-customResultqueryGrey hover:bg-customaddproperty"
              >
                Add Property
              </Link>
            </>
          )}
          {/* <Link
            to="accessId"
            className="block py-5 px-5 text-lg font-medium text-textcolor bg-customNameBlack hover:text-customResultqueryGrey hover:bg-customaddproperty"
          >
            Add property
          </Link> */}
        </div>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Header;
