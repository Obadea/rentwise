import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter((part) => part);

  return (
    <nav className="breadcrumb hidden lg:block">
      <ul className="flex space-x-2">
        <li>
          <Link to="/" className="text-blue-500 hover:underline">
            Home
          </Link>
          {pathParts.length > 0 && <span> &gt; </span>}
        </li>
        {pathParts.map((part, index) => {
          const path = `/${pathParts.slice(0, index + 1).join("/")}`;
          return (
            <li key={index}>
              <Link to={path} className="text-blue-500 hover:underline">
                {part.charAt(0).toUpperCase() + part.slice(1)}
              </Link>
              {index < pathParts.length - 1 && <span> &gt; </span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
