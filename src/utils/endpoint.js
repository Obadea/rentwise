import axios from "axios";
import { capitalizeFirstLetter } from "./helperFunction";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL, //  API's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Send Enquiry
export const sendEnquiry = async (enquiryData) => {
  if (enquiryData) {
    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/inquiry`,
      {
        inquiryType: capitalizeFirstLetter(enquiryData.inquiryType),
        infoTitle: capitalizeFirstLetter(enquiryData.infoTitle),
        firstName: capitalizeFirstLetter(enquiryData.firstName),
        lastName: capitalizeFirstLetter(enquiryData.lastName),
        email: enquiryData.email,
        Location: capitalizeFirstLetter(enquiryData.Location),
        propertyType: capitalizeFirstLetter(enquiryData.propertyType),
        maxPrice: enquiryData.maxPrice,
        MinSize: enquiryData.MinSize,
        numberOfBeds: enquiryData.numberOfBeds,
        numberOfBaths: enquiryData.numberOfBaths,
      }
    );
    return response.data;
  }
};

// Get All Properties
export const getAllProperties = async (propertyNumber) => {
  const response = await apiClient.get(
    `${process.env.REACT_APP_API_URL}/api/v1/property?q=${propertyNumber}`
  );
  return response.data;
};

// Get a Sinle Properties
export const getSingleProperty = async (propertyID) => {
  const response = await apiClient.get(
    `${process.env.REACT_APP_API_URL}/api/v1/property/${
      propertyID ? propertyID : ""
    }`
  );
  return response.data;
};

export const houseHoldIncome = async (incomeData) => {
  if (incomeData) {
    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/recommendations/income`,
      incomeData
    );
    return response.data;
  }

  // return console.log(incomeData);
};
