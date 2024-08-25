import React from "react";

function Enquiry() {
  return (
    <div>
      <div>
        <div className="flex flex-col lg:flex ">
          <h2>Want to add your property to our list?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent nunc.
            Sed aliquam mi at urna. Condimentum mi lorem aliquam mattis.
            Consequat est phasellus velit nisl justo dui. Faucibus dictum
            habitasse sed vel at nisl non. Nisi placerat purus sed varius
            euismod. Risus etiam purus donec neque.{" "}
          </p>
        </div>
        <div className="flex flex-col bg-red-300 px-8 py-6 w-[514px] h-[813px]">
          <h3 className="3xl font-bold text-customNameBlack">
            rentwise Enquiry Form
          </h3>
          <p className="font-normal text-customNameBlack">
            Fill out this enquiry form and expect a response from our team soon
          </p>
          <form action="#" className="  flex flex-col">
            <label htmlFor="inquiry" className="text-customNameBlack">
              Inquiry
            </label>
            <select className="" name="Inquiry Type" id="inquiry">
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

            <label htmlFor="inquiry" className="text-customNameBlack">
              Information
            </label>
            <select className="block" name="Inquiry Type" id="inquiry">
              <option
                value=""
                className="hidden  text-customBlackShade font-normal"
              >
                I am a
              </option>
              <option value="propertyOwner">Property Owner</option>
              <option value="RealEstateAgent">Real Estate Agent</option>
            </select>

            <div>
              <input type="text" placeholder="First Name" />

              <input type="text" placeholder="Last Name" />
            </div>
            <div>
              <input type="text" placeholder="Email Address" />
            </div>
            <label htmlFor="location">Location</label>
            <select className="" name="location Type" id="location">
              <option value="" className="hidden">
                Select
              </option>
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

            <label htmlFor="property">Property</label>
            <select className="" name="property Type" id="property">
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
                <option
                  value="office"
                  className="text-dropDowmcolor font-normal"
                >
                  Office
                </option>
                <option value="shop" className="text-dropDowmcolor font-normal">
                  Shop
                </option>
              </optgroup>
              <optgroup
                label="Resedential"
                className="text-dropDowmcolor font-normal"
              >
                <option value="apartment">Apartment</option>
                <option value="singleFamilyHome">Single Family Home</option>
                <option value="multiFamilyHome">Multi Family Home</option>
              </optgroup>
            </select>

            <div>
              <input type="text" placeholder="Max Price" />
              <input type="text" placeholder="Minimum size (Sq Ft)" />
            </div>
            <div>
              <input type="text" placeholder="Number of beds" />
              <input type="text" placeholder="Number of baths" />
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
