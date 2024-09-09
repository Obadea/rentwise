import React from "react";

function EnquiryForm() {
  return (
    <div className="flex flex-col mx-auto w-[90%] lg:mx-0 bg-white px-4 lg:px-8 py-6 lg:w-[450px]  lg:h-[813px] ">
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
            className="h-[38px] lg:h-[42px] font-normal pl-2 w-full border rounded-lg   border-customBlackShade"
            name="Inquiry Type"
            id="inquiry"
          >
            <option
              value=""
              className="hidden  text-customBlackShade font-normal w-full"
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

        <div className="flex flex-col  gap-1">
          <label htmlFor="inquiry" className="font-medium text-customNameBlack">
            Information
          </label>
          <select
            className="font-normal h-[38px] pl-2 lg:h-[42px] border rounded-lg w-full  border-customBlackShade"
            name="Inquiry Type"
            id="inquiry"
          >
            <option value="" className="hidden w-full text-red-500 font-normal">
              I am a
            </option>
            <option value="propertyOwner">Property Owner</option>
            <option value="RealEstateAgent">Real Estate Agent</option>
          </select>
        </div>

        <div className="flex justify-between gap-2 lg:gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="h-[38px] w-[127px] flex-grow md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-base border-customBlackShade"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="h-[38px] w-[127px] flex-grow md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-bases border-customBlackShade"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            className="w-full h-[38px] lg:h-[42px] pl-4 border rounded-lg text-sm lg:text-base border-customBlackShade"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="location"
            className="font-medium text-customNameBlack"
          >
            Location
          </label>
          <select
            className="h-[38px] w-full md:h-[42px] pl-2 font-normal border rounded-lg  border-customBlackShade"
            name="location Type"
            id="location"
          >
            <option
              value=""
              className="hidden text-customBlackShade  font-normal"
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

        <div className="flex flex-col  gap-1">
          <label
            htmlFor="property"
            className=" font-medium text-customNameBlack"
          >
            Property
          </label>
          <select
            className="font-normal h-[38px] pl-2 lg:h-[42px] border rounded-lg w-full  border-customBlackShade"
            name="property Type"
            id="property"
          >
            <option
              value=""
              className="hidden w-full text-customBlackShade font-normal"
            >
              Property Type
            </option>
            <optgroup
              label="Commercial"
              className="text-dropDowmcolor font-normal"
            >
              <option value="office">Office</option>
              <option value="shop" className="text-dropDowmcolor font-normal">
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

        <div className="flex justify-between gap-2 lg:gap-6">
          <input
            type="text"
            placeholder="Max Price"
            className="h-[38px] w-[127px] flex-grow md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-bases border-customBlackShade"
          />
          <input
            type="text"
            placeholder="Minimum size (Sq Ft)"
            className="h-[38px] w-[127px] flex-grow md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-bases border-customBlackShade"
          />
        </div>
        <div className="flex justify-between gap-2 lg:gap-6">
          <input
            type="text"
            placeholder="Number of beds"
            className="h-[38px] w-[127px] flex-grow md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-bases border-customBlackShade"
          />
          <input
            type="text"
            placeholder="Number of baths"
            className="h-[38px] w-[127px] flex-grow md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-bases border-customBlackShade"
          />
        </div>

        <button className="h-full px-4 py-3  bg-customSearchblue  rounded-lg text-textcolor font-bold text-xl mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EnquiryForm;