import React from "react";
import { Link } from "react-router-dom";

function MultiFooterLink({ header, links }) {
  // console.log(links[0].text);
  return (
    <div className="flex flex-col justify-center items-start ">
      <h3 className="font-bold text-xl pb-2">{header}</h3>

      {links.map((link, index) => (
        <Link to={link.path} key={index} className="pb-1">
          {link.text}
        </Link>
      ))}
    </div>
  );
}

export default MultiFooterLink;
