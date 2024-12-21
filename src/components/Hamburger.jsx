import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./NewHeader.css"; // Import your CSS file for custom styles
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { logOut } from "../utils/endpoint";
import { toast } from "react-toastify";

const Hamburger = () => {
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
        {token ? (
          <>
            <a
              className="menu-item text-bold"
              onClick={() => mutation.mutate(token)}
            >
              Log out
            </a>{" "}
            <a className="menu-item text-bold block mt-4" href="/search">
              Add property
            </a>
          </>
        ) : (
          <>
            <a href="/signin" className="menu-item  pl-1 mt-34 block">
              Sign in
            </a>
            <a href="/signup" className="menu-item pl-1 mt-4 block">
              Sign up
            </a>
            <a
              className="menu-item text-bold pl-1 mt-4 block "
              href="/accessId"
            >
              Add property
            </a>
          </>
        )}
        {/* // <Link to="/signup" className="menu-item">
        //   Sign up
        // </Link>
        // <a className="menu-item text-bold" href="/contact">
        //   Add property
        // </a> */}
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
