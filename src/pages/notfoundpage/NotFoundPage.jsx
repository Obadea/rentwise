import React from "react";

function NotFoundPage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen gap-6">
        <h2 className="text-4xl lg:text-6xl font-bold ">404 Not found</h2>
        <p className="text-customStreetcolor text-lg font-normal">
          This page does not exist.
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
