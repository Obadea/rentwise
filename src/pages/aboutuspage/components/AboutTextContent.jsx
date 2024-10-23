import React from "react";

function AboutTextContent({ header, paragraph }) {
  return (
    <div className="flex flex-col gap-3 fex-1 lg:w-[45%]">
      <h4 className="font-bold text-2xl text-customStreetcolor">{header}</h4>
      <p className="font-normal text-lg text-customStreetcolor">{paragraph}</p>
    </div>
  );
}

export default AboutTextContent;
