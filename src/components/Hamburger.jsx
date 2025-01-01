import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./NewHeader.css"; // Import your CSS file for custom styles
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { useMutation } from "@tanstack/react-query";
import { logOut } from "../utils/endpoint";
import { toast } from "react-toastify";
import { Accordion, AccordionItem, Button, Link } from "@nextui-org/react";

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
    <div className="lg:hidden fixed top-12 ">
      {/* Hamburger Button */}
      <Menu right>
        <a className="menu-item" href="/">
          Home
        </a>
        {/* <a className="menu-item" href="/about">
          Residents
        </a> */}
        <Accordion
          itemClasses={{ trigger: " p-0 m-0", title: "text-lg" }}
          showDivider={false}
        >
          <AccordionItem
            key="1"
            aria-label="Residents"
            title="Residents"
            className=" pb-5 pt-0"
            classNames={{ content: "pl-2 " }}
          >
            <div className=" flex flex-col gap-3">
              <a href="/Quick-services">
                <p>Quick services</p>
              </a>
              <a href="/Rent-affordability-calculator">
                <p>Rent affordability calculator</p>
              </a>
              <a href="/RentSaver-account">
                <p>RentSaver account</p>
              </a>
              <a href="/WiseReport">
                <p>WiseReport</p>
              </a>
              <a href="/search">
                <p>Search</p>
              </a>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="landlords"
            title="Landlords"
            className=" pb-5"
            classNames={{ content: "pl-2 " }}
          >
            <div className=" flex flex-col gap-3">
              <a href="/rental-management">
                <p>Rental Management</p>
              </a>
              <a href="/Quick-services">
                <p>Quick Services</p>
              </a>
            </div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="company"
            title="Company"
            className=" "
            classNames={{ content: "pl-2 " }}
          >
            <div className=" flex flex-col gap-3 capitalize">
              <a href="/About-us">
                <p>About us</p>
              </a>
              <a href="/Our-Services">
                <p>Our Services</p>
              </a>
              <a href="/Products">
                <p>Products</p>
              </a>
              <a href="/Leadership">
                <p>Leadership</p>
              </a>
              <a href="/Partners">
                <p>Partners</p>
              </a>
              <a href="/blog">
                <p>blog</p>
              </a>
              <a href="/contact-us">
                <p>contact us</p>
              </a>
            </div>
          </AccordionItem>
        </Accordion>
        <a className="menu-item" href="/shortlet">
          Shortlet
        </a>
        <a className="menu-item mb-0" href="/properties">
          Properties
        </a>
        {token ? (
          <>
            {/* <a
              className="menu-item text-bold"
              onClick={() => mutation.mutate(token)}
            >
              Log out
            </a>{" "} */}
            <Button
              className="w-full"
              color="primary"
              onPress={() => navigate("/search")}
            >
              Add property
            </Button>
          </>
        ) : (
          <div className="relative right-2">
            <a href="/signin" className="mb-8 ml-2 block">
              <p>Sign in</p>
            </a>
            {/* <p>Add property</p> */}
            <Button
              className="w-full ml-2"
              color="primary"
              onPress={() => navigate("/accessId")}
            >
              Add property
            </Button>
          </div>
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
