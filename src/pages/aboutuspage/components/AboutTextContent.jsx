import React from "react";

function AboutTextContent({ header, paragraph, paragraph1, className }) {
  return (
    <div className={`${className} flex flex-col gap-3 fex-1 lg:w-[45%]`}>
      <h4 className={`font-bold text-2xl text-customStreetcolor`}>{header}</h4>
      <p className="font-normal text-lg text-customStreetcolor">{paragraph}</p>
      <p className={`font-normal text-lg text-customStreetcolor lg:hidden`}>
        {paragraph1}
      </p>
    </div>
  );
}

export default AboutTextContent;
