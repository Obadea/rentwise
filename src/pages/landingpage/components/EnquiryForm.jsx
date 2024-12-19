import React from "react";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { sendEnquiry } from "../../../utils/endpoint";
import { toast } from "react-toastify";

function EnquiryForm() {
  const formik = useFormik({
    initialValues: {
      inquiryType: "",
      infoTitle: "",
      firstName: "",
      lastName: "",
      email: "",
      Location: "",
      propertyType: "",
      maxPrice: "",
      MinSize: "",
      numberOfBeds: "",
      numberOfBaths: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (values) {
        mutation.mutate(values);
      }
      resetForm();
    },
  });

  const mutation = useMutation({
    mutationFn: sendEnquiry,
    onSuccess: async () => {
      console.log("Enquiry sent!");
      toast("Enquiry Sent", { type: "success", draggable: true });
    },
    onError: async (err) => {
      toast("Enquiry Failed", { type: "error", draggable: true });
      console.log(err);
    },
  });

  return (
    <div className="flex flex-col mx-auto w-[90%] lg:mx-0 bg-white px-4 lg:px-8 py-6 lg:w-[450px]  lg:h-[813px] ">
      <h3 className=" text-base lg:text-3xl font-bold text-customNameBlack">
        rentwise Enquiry Form
      </h3>
      <p className="font-small lg:font-normal text-customNameBlack">
        Fill out this enquiry form and expect a response from our team soon
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
        className=" relative flex flex-col gap-4 mt-3"
      >
        <div className="flex flex-col  gap-1 ">
          <label
            htmlFor="inquiry"
            className="text-base font-medium text-customNameBlack"
          >
            Inquiry
          </label>
          <select
            className="h-[38px] lg:h-[42px] font-normal pl-2 w-full border rounded-lg   border-customBlackShade"
            id="inquiry"
            name="inquiryType"
            onChange={formik.handleChange}
            // value={formik.values.inquiryType.toUpperCase()}
          >
            {/* <option
              value=""
              className="hidden  text-customBlackShade font-normal w-full"
            >
              Property Type
            </option> */}
            <option value="purchase" className="w-24">
              Purchase
            </option>
            <option value="Rent">Rent</option>
            <option value="Sell">Sell</option>
            <option value="Mortage">Mortage</option>
            <option value="Evaluation">Evaluation</option>
          </select>
        </div>

        <div className="flex flex-col  gap-1">
          <label
            htmlFor="infoTitle"
            className="font-medium text-customNameBlack"
          >
            Information
          </label>
          <select
            className="font-normal h-[38px] pl-2 lg:h-[42px] border rounded-lg w-full  border-customBlackShade"
            id="infoTitle"
            name="infoTitle"
            onChange={formik.handleChange}
            // value={formik.values.infoTitle.toUpperCase()}
          >
            <option value="" className="hidden w-full text-red-500 font-normal">
              I am a
            </option>
            <option value="PropertyOwner">Property Owner</option>
            <option value="RealEstateAgent">Real Estate Agent</option>
          </select>
        </div>

        <div className="flex justify-between gap-2 lg:gap-6">
          <input
            type="text"
            placeholder="First Name"
            className="h-[38px] w-[127px] flex-grow md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-base border-customBlackShade"
            name="firstName"
            onChange={formik.handleChange}
            // value={formik.values.firstName.toUpperCase()}
          />

          <input
            type="text"
            placeholder="Last Name"
            className="h-[38px] w-[127px] flex-grow md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-base border-customBlackShade"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName.toUpperCase()}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email Address"
            className="w-full h-[38px] lg:h-[42px] pl-4 border rounded-lg text-sm lg:text-base border-customBlackShade"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
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
            name="Location"
            id="location"
            // value={formik.values.Location.toUpperCase()}
            onChange={formik.handleChange}
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
            name="propertyType"
            id="property"
            // value={formik.values.propertyType.toUpperCase()}
            onChange={formik.handleChange}
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
            name="maxPrice"
            onChange={formik.handleChange}
            value={formik.values.maxPrice}
          />
          <input
            type="text"
            placeholder="Minimum size (Sq Ft)"
            className="h-[38px] w-[127px] flex-grow md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-bases border-customBlackShade"
            name="MinSize"
            onChange={formik.handleChange}
            value={formik.values.MinSize}
          />
        </div>
        <div className="flex justify-between gap-2 lg:gap-6">
          <input
            type="text"
            placeholder="Number of beds"
            className="h-[38px] w-[127px] flex-grow md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-bases border-customBlackShade"
            name="numberOfBeds"
            onChange={formik.handleChange}
            value={formik.values.numberOfBeds}
          />
          <input
            type="text"
            placeholder="Number of baths"
            className="h-[38px] w-[127px] flex-grow md:h-[42px] md:w-[217.5px] pl-4 border rounded-lg text-sm lg:text-bases border-customBlackShade"
            name="numberOfBaths"
            onChange={formik.handleChange}
            value={formik.values.numberOfBaths}
          />
        </div>

        <button
          type="submit"
          className="h-full px-4 py-3  bg-customSearchblue  rounded-lg text-textcolor font-bold text-xl mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EnquiryForm;
