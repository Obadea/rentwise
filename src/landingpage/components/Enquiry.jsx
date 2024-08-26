import React from "react";

function Enquiry() {
  return (
    <div>
      <div>
        <div className="flex flex-col ">
          <div>
            <h2 className="font-bold text-[40px]">
              Why rentwise Is The Perfect Choice?
            </h2>
            <div>
              <h2 className="font-bold text-5xl">02.</h2>
              <h3 className="text-3xl">Suitable for Landlords and Tenants</h3>
              <p className="">
                Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent
                nunc. Sed aliquam mi at urna. Condimentum mi lorem aliquam
                mattis. Consequat est phasellus velit nisl justo dui. ius
              </p>
            </div>
            <div>
              <div>
                <h2 className="font-bold text-5xl"> 01.</h2>
                <h3 className="text-3x">Suitable for Landlords and Tenants</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent
                  nunc. Sed aliquam mi at urna. Condimentum mi lorem aliquam
                  mattis. Consequat est phasellus velit nisl justo dui. ius
                </p>
              </div>
              <div>
                <h2 className="font-bold text-5xl"> 03.</h2>
                <h3 className="text-3x">Suitable for Landlords and Tenants</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent
                  nunc. Sed aliquam mi at urna. Condimentum mi lorem aliquam
                  mattis. Consequat est phasellus velit nisl justo dui. ius
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-red-300 px-8 py-6 w-[514px] h-[813px] ">
          <h3 className="text-3xl font-bold text-customNameBlack">
            rentwise Enquiry Form
          </h3>
          <p className="font-normal text-customNameBlack">
            Fill out this enquiry form and expect a response from our team soon
          </p>
          <form action="#" className="  flex flex-col gap-4 mt-3">
            <div className="flex flex-col  gap-1 ">
              <label
                htmlFor="inquiry"
                className="font-medium text-customNameBlack"
              >
                Inquiry
              </label>
              <select
                className="h-[42px] font-normal"
                name="Inquiry Type"
                id="inquiry"
              >
                <option
                  value=""
                  className="hidden text-customBlackShade font-normal"
                >
                  Property Type
                </option>
                <option value="purchase">Purchase</option>
                <option value="rent">Rent</option>
                <option value="sell">Sell</option>
                <option value="mortage">Mortage</option>
                <option value="evaluation">Evaluation</option>
              </select>
            </div>

            <div className="flex flex-col  w-[450px] h-[72px] gap-1">
              <label htmlFor="inquiry" className="text-customNameBlack">
                Information
              </label>
              <select
                className="font-normal h-[42px] "
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
                className="h-[42px] w-[217.5px] pl-4"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="h-[42px] w-[217.5px] pl-4"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full h-[42px] pl-4"
              />
            </div>
            <div className="flex flex-col w-[450px] h-[72px] gap-1">
              <label htmlFor="location">Location</label>
              <select
                className="h-[42px] font-normal"
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
              <label htmlFor="property">Property</label>
              <select
                className="font-normal h-[42px]"
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
                className="h-[42px] w-[217.5px] pl-4"
              />
              <input
                type="text"
                placeholder="Minimum size (Sq Ft)"
                className="h-[42px] w-[217.5px] pl-4"
              />
            </div>
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="Number of beds"
                className="h-[42px] w-[217.5px] pl-4"
              />
              <input
                type="text"
                placeholder="Number of baths"
                className="h-[42px] w-[217.5px] pl-4"
              />
            </div>

            <button className="h-full bg-customSearchblue p-5 rounded-lg text-textcolor font-bold text-xl mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
