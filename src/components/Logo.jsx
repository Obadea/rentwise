import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="text-2xl lg:text-4xl text-customblue font-bold">
      rent<span className="text-customyellow">w</span>ise
      <span className="text-customyellow">.</span>
    </Link>
  );
}

export default Logo;
