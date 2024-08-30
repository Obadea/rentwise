import React from "react";

import "./Enquiry.css";
function Enquiry() {
  return (
    <div
      className="background-imagee lg:py-24 lg:px-8"
      style={{
        backgroundImage: `url(${require("../../assets/chair_table.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="flex flex-col py-12  lg:px-0 lg:py-0 lg:flex lg:flex-row lg:gap-6">
        <div className=" text-white mx-6 lg:mx-0 lg:flex lg:gap-20">
          <div className="flex flex-col gap-8 mb-10 lg:mb-0 lg:gap-28">
            <div>
              <h2 className="font-bold text-3xl lg:text-[40px] pt-2 h-[150px] mb-6 lg:mb-0 lg:h-[234px]">
                Why rentwise Is The Perfect Choice?
              </h2>
              <div className=" hidden lg:w-48 border lg:border-borderbottom"></div>
            </div>

            <div className="flex flex-col lg:h-[369px] lg:gap-4">
              <h2 className="font-bold text-5xl mb-3"> 01.</h2>
              <h3 className="text-3xl">Suitable for Landlords and Tenants</h3>
              <p className="font-medium ">
                Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent
                nunc. Sed aliquam mi at urna. Condimentum mi lorem aliquam
                mattis. Consequat est phasellus velit nisl justo dui. ius
              </p>
              <div className="w-48 border mt-8 border-borderbottom"></div>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            <div>
              <div className=" flex flex-col gap-4 mb-8 lg:mb-0 lg:h-[330px]">
                <h2 className="font-bold text-5xl mb-3">02.</h2>

                <h3 className="text-3xl">Suitable for Landlords and Tenants</h3>
                <p className="font-normal">
                  Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent
                  nunc. Sed aliquam mi at urna. Condimentum mi lorem aliquam
                  mattis. Consequat est phasellus velit nisl justo dui. ius
                </p>
              </div>
              <div className="w-48 border mb-3 border-borderbottom"></div>
            </div>

            <div className="flex flex-col gap-3 mb-12 lg:mb-0 lg:gap-4 ">
              <h2 className="font-bold text-5xl mb-3"> 03.</h2>
              <h3 className="text-3xl">Suitable for Landlords and Tenants</h3>
              <p className="font-medium ">
                Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent
                nunc. Sed aliquam mi at urna. Condimentum mi lorem aliquam
                mattis. Consequat est phasellus velit nisl justo dui. ius
              </p>
              <div className="w-48 border mt-8 border-borderbottom"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mx-auto lg:mx-0 bg-white px-4 lg:px-8 py-6 lg:h-[813px] ">
          <h3 className=" text-base lg:text-3xl font-bold text-customNameBlack">
            rentwise Enquiry Form
          </h3>
          <p className="font-small lg:font-normal text-customNameBlack">
            Fill out this enquiry form and expect a response from our team soon
          </p>
          <form action="#" className=" relative flex flex-col gap-4 mt-3">
            <div className="flex flex-col  gap-1 ">
              <label
                htmlFor="inquiry"
                className="text-base font-medium text-customNameBlack"
              >
                Inquiry
              </label>
              <select
                className="h-[38px] lg:h-[42px] font-normal w-full border rounded-lg text-customBlackShade  border-customBlackShade"
                name="Inquiry Type"
                id="inquiry"
              >
                <option
                  value=""
                  className="hidden text-customBlackShade font-normal w-full"
                >
                  Property Type
                </option>
                <option value="purchase" className="w-24">
                  Purchase
                </option>
                <option value="rent">Rent</option>
                <option value="sell">Sell</option>
                <option value="mortage">Mortage</option>
                <option value="evaluation">Evaluation</option>
              </select>
            </div>

            <div className="flex flex-col  w-[450px] h-[72px] gap-1">
              <label
                htmlFor="inquiry"
                className="font-medium text-customNameBlack"
              >
                Information
              </label>
              <select
                className="font-normal h-[42px] border rounded-lg  text-customBlackShade border-customBlackShade"
                name="Inquiry Type"
                id="inquiry"
              >
                <option value="" className="hidden  text-red-500 font-normal">
                  I am a
                </option>
                <option value="propertyOwner">Property Owner</option>
                <option value="RealEstateAgent">Real Estate Agent</option>
              </select>
            </div>

            <div className="flex justify-between">
              <input
                type="text"
                placeholder="First Name"
                className="h-[42px] w-[217.5px] pl-4 border rounded-lg  border-customBlackShade"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="h-[42px] w-[217.5px] pl-4 border rounded-lg  border-customBlackShade"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full h-[42px] pl-4 border rounded-lg  border-customBlackShade"
              />
            </div>
            <div className="flex flex-col w-[450px] h-[72px] gap-1">
              <label
                htmlFor="location"
                className="font-medium text-customNameBlack"
              >
                Location
              </label>
              <select
                className="h-[42px] font-normal border rounded-lg text-customBlackShade border-customBlackShade"
                name="location Type"
                id="location"
              >
                <option
                  value=""
                  className="hidden text-customBlackShade font-normal"
                >
                  All Cities in Lagos
                </option>
                <option value="lagosIsland">Lagos Island</option>
                <option value="victoriaIsland">Victoria Island</option>
                <option value="lekki">Lekki</option>
                <option value="ajah">Ajah</option>
                <option value="surulere">Surulere</option>
              </select>
            </div>

            <div className="flex flex-col w-[450px] h-[72px] gap-1">
              <label
                htmlFor="property"
                className=" font-medium text-customNameBlack"
              >
                Property
              </label>
              <select
                className="font-normal h-[42px] border rounded-lg text-customBlackShade border-customBlackShade"
                name="property Type"
                id="property"
              >
                <option
                  value=""
                  className="hidden text-customBlackShade font-normal"
                >
                  Property Type
                </option>
                <optgroup
                  label="Commercial"
                  className="text-dropDowmcolor font-normal"
                >
                  <option value="office">Office</option>
                  <option
                    value="shop"
                    className="text-dropDowmcolor font-normal"
                  >
                    Shop
                  </option>
                </optgroup>
                <optgroup label="Resedential" className="">
                  <option value="apartment">Apartment</option>
                  <option value="singleFamilyHome">Single Family Home</option>
                  <option value="multiFamilyHome">Multi Family Home</option>
                </optgroup>
              </select>
            </div>

            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Max Price"
                className="h-[42px] w-[217.5px] pl-4 border rounded-lg  border-customBlackShade"
              />
              <input
                type="text"
                placeholder="Minimum size (Sq Ft)"
                className="h-[42px] w-[217.5px] pl-4 border rounded-lg  border-customBlackShade"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Number of beds"
                className="h-[42px] w-[217.5px] pl-4 border rounded-lg  border-customBlackShades"
              />
              <input
                type="text"
                placeholder="Number of baths"
                className="h-[42px] w-[217.5px] pl-4 border rounded-lg  border-customBlackShades"
              />
            </div>

            <button className="h-full bg-customSearchblue p-4 rounded-lg text-textcolor font-bold text-xl mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
