import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./NewHeader.css"; // Import your CSS file for custom styles
import { Link } from "react-router-dom";

const Hamburger = () => {
  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <Menu right>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/about">
          Residents
        </a>
        <a className="menu-item" href="/services">
          Landlords
        </a>
        <Link to="/signup" className="menu-item">
          Sign up
        </Link>
        <a className="menu-item text-bold" href="/contact">
          Add property
        </a>
      </Menu>

      {/* This div is for the hamburger button */}
      <div className="fixed top-4 right-4 z-50 ">
        <Menu right>
          <div className="bm-burger-button">
            <div className="bm-burger-bars" />
            <div className="bm-burger-bars" />
            <div className="bm-burger-bars" />
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Hamburger;
