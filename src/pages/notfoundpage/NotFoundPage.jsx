import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { Button } from "@nextui-org/react";
import Header from "../../components/Header";

function NotFoundPage() {
  return (
    <div>
      <Header className="fixed bg-white" />
      <div className="flex flex-col justify-center items-center h-screen gap-6">
        <ErrorIcon sx={{ fontSize: "60px" }} className="text-red-600" />
        <h2 className="text-4xl lg:text-6xl font-bold ">404 Not found</h2>
        <p className="text-customStreetcolor text-lg font-normal">
          This page does not exist.
        </p>
        <a href="/">
          <button className="bg-customSearchblue text-white px-6 py-3 rounded-md ">
            Home
          </button>
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
