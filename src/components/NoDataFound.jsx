import React from "react";
import PropTypes from "prop-types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NoDataFound = ({ className = "", message = "No data available." }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 bg-gray-100 border border-dashed border-gray-300 rounded-md text-gray-600 max-w-[1240px] h-[70vh] mx-auto mt-8 ${className}`}
    >
      <ErrorOutlineIcon className="text-gray-400 text-6xl mb-4" />
      <p className="text-base font-medium text-center">{message}</p>
    </div>
  );
};

NoDataFound.propTypes = {
  className: PropTypes.string, // Allows custom styles
  message: PropTypes.string, // Optional custom message
};

export default NoDataFound;
