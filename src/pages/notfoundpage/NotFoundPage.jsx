import React from "react";

function NotFoundPage() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-bold text-customStreetcolor">
          404 Not found
        </h2>
        <p className="text-customStreetcolor text-base font-normal">
          This page does not exist
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
