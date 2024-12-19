import axios from "axios";
import { capitalizeFirstLetter } from "./helperFunction";
import { useAuth } from "./AuthContext";

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
};

export const userSignUp = async (userData) => {
  if (userData) {
    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/signup`,
      userData
    );
    return response.data;
  }
};

// Confirm OTP after signIn\
export const confirmOTP = async (userOTP) => {
  if (userOTP) {
    const userData = {
      otp: userOTP.otp,
    };

    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/confirm-mail`,
      userData, // send the OTP in the request body
      {
        headers: {
          Authorization: `Bearer ${userOTP.token}`,
        },
      }
    );
    return response.data;
  }
};

export const logOut = async (token) => {
  if (token) {
    const response = await apiClient.get(
      `${process.env.REACT_APP_API_URL}/api/v1/users/logout`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
};

export const signInApi = async (userData) => {
  if (userData) {
    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/signin`,
      userData
    );
    return response.data;
  }
};

export const signInForLandLord = async (accessID) => {
  if (accessID) {
    const userData = { accessId: accessID };
    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/wisemen/landlord/signin`,
      userData
    );
    return response.data;
  }
};

export const signInForWisemen = async (accessID) => {
  if (accessID) {
    const userData = {
      accessId: accessID,
    };
    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/wisemen/landlord/signin`,
      userData
    );
    return response.data;
  }
};

export const postReview = async (data) => {
  if (data) {
    const { propertyID, userData, token } = data;
    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/property-review/${propertyID}/create`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
};

export const resendOtp = async (data) => {
  const { userEmail, token } = data;

  if (data) {
    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/resend-otp`,
      { email: userEmail },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
};

export const enquiryPropertyForm = async (data) => {
  const { formData, propertyID } = data;

  if (data) {
    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/property-inquiry/${propertyID}`,
      formData
    );
    return response.data;
  }
};

export const propertyRecommendation = async (data) => {
  if (data) {
    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/recommendations/`,
      {
        max_annual_rent: data,
      }
    );
    return response.data;
  }
};

export const passWordResetOtp = async (email) => {
  if (email) {
    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/forgot-password`,
      email
    );
    return response.data;
  }
};
export const forgotPassWordVerifyOtp = async (otp) => {
  if (otp) {
    const response = await apiClient.post(
      `${process.env.REACT_APP_API_URL}/api/v1/users/verify-otp`,
      {
        otp: otp.otp,
      },
      {
        headers: {
          Authorization: `Bearer ${otp.token}`,
        },
      }
    );
    return response.data;
  }
};
