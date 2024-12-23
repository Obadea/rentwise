// import React from "react";
// import { useLocation, Link } from "react-router-dom";
// import { SvgGreaterIcon, SvgHomeIcon } from "../utils/SvgIcons";

// const Breadcrumb = () => {
//   const location = useLocation();
//   const pathParts = location.pathname.split("/").filter((part) => part);

//   return (
//     <nav className="breadcrumb hidden lg:block text-customStreetcolor">
//       <ul className="flex space-x-1.5 items-center ">
//         <li className="flex items-center gap-2">
//           <SvgHomeIcon />
//           <Link to="/" className=" hover:underline">
//             Home
//           </Link>
//           {pathParts.length > 0 && (
//             <span>
//               {" "}
//               <SvgGreaterIcon />{" "}
//             </span>
//           )}
//         </li>
//         {pathParts.map((part, index) => {
//           const path = `/${pathParts.slice(0, index + 1).join("/")}`;
//           return (
//             <li key={index}>
//               <Link to={path} className=" hover:underline font-semibold">
//                 {part.charAt(0).toUpperCase() + part.slice(1)}
//               </Link>
//               {index < pathParts.length - 1 && <span> &gt; </span>}
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Breadcrumb;

import React from "react";
import { useLocation, Link } from "react-router-dom";
import { SvgGreaterIcon, SvgHomeIcon } from "../utils/SvgIcons";

// Utility function to decode URL and replace %20 with spaces
const decodeURLPart = (part) => decodeURIComponent(part).replace(/%20/g, " ");

const Breadcrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter((part) => part);

  return (
    <nav className="breadcrumb hidden lg:block text-customStreetcolor">
      <ul className="flex space-x-1.5 items-center">
        <li className="flex items-center gap-2">
          <SvgHomeIcon />
          <Link to="/" className="hover:underline">
            Home
          </Link>
          {pathParts.length > 0 && (
            <span>
              {" "}
              <SvgGreaterIcon />{" "}
            </span>
          )}
        </li>
        {pathParts.map((part, index) => {
          const path = `/${pathParts.slice(0, index + 1).join("/")}`;
          const decodedPart = decodeURLPart(part); // Decode each part of the path
          return (
            <li key={index}>
              <Link
                to={path}
                className="hover:underline font-semibold capitalize"
              >
                {decodedPart.charAt(0).toUpperCase() + decodedPart.slice(1)}
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
