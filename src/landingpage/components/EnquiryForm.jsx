import React from "react";

function EnquiryForm() {
  return (
    <div className="flex flex-col mx-auto lg:mx-0 bg-white px-4 lg:px-8 py-6 w-[330px] h-auto lg:w-auto  lg:h-[813px] ">
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

        <div className="flex flex-col  md:w-[450px] md:h-[72px] gap-1">
          <label htmlFor="inquiry" className="font-medium text-customNameBlack">
            Information
          </label>
          <select
            className="font-normal h-[38px] lg:h-[42px] border rounded-lg  text-customBlackShade border-customBlackShade"
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
            className="h-[38px] w-[127px] md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg  border-customBlackShade"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="h-[38px] w-[127px] md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg  border-customBlackShade"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            className="w-full h-[38px] lg:h-[42px] pl-4 border rounded-lg  border-customBlackShade"
          />
        </div>
        <div className="flex flex-col lg:w-[450px] h-[72px] gap-1">
          <label
            htmlFor="location"
            className="font-medium text-customNameBlack"
          >
            Location
          </label>
          <select
            className="h-[38px] w-full md:h-[42px] font-normal border rounded-lg text-customBlackShade border-customBlackShade"
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

        <div className="flex flex-col w-auto lg:w-[450px] h-[72px] gap-1">
          <label
            htmlFor="property"
            className=" font-medium text-customNameBlack"
          >
            Property
          </label>
          <select
            className="font-normal h-[38px] md:h-[42px] border rounded-lg text-customBlackShade border-customBlackShade"
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

        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Max Price"
            className="h-[38px] w-[140px] md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-base border-customBlackShade"
          />
          <input
            type="text"
            placeholder="Minimum size (Sq Ft)"
            className="h-[38px] w-[140px] md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-base border-customBlackShade"
          />
        </div>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Number of beds"
            className="h-[38px] w-[140px] md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-base border-customBlackShades"
          />
          <input
            type="text"
            placeholder="Number of baths"
            className="h-[38px] w-[140px] md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-base border-customBlackShades"
          />
        </div>

        <button className="h-full bg-customSearchblue p-4 rounded-lg text-textcolor font-bold text-xl mt-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EnquiryForm;
