import { Image } from "@nextui-org/react";
import React from "react";
import { toNaira } from "../../../utils/helperFunction";
import { SvgCheckIcon } from "../../../utils/SvgIcons";

const CompareProperties = ({ compareData }) => {
  const dummyArray = Array.from({ length: 15 }, (_, index) => index + 1);

  return (
    <div className={`overflow-x-scroll w-full flex`}>
      {compareData?.map((property) => (
        <div className="w-full box-content bg-white whitespace-nowrap items-center justify-center min-w-56 ">
          <div className="px-2">
            <Image
              src={property?.propertyImages[6]}
              className="h-32 lg:h-44"
              width="100%"
              isZoomed
            />
          </div>
          <p className="py-1 pl-3 pr-5 mt-4 bg-addpropertybg overflow-x-scroll">
            {property?.name}
          </p>
          <p className="py-1 pl-3 pr-5 ">{toNaira(property?.price)}</p>
          <p className="py-1 pl-3 pr-5 bg-addpropertybg">
            {property?.propertyType}
          </p>
          <p className="py-1 pl-3 pr-5 text-clip overflow-x-scroll w-full">
            {property?.address}
          </p>
          <p className="py-1 pl-3 pr-5 bg-addpropertybg">{property?.city}</p>
          <p className="py-1 pl-3 pr-5">{property?.state}</p>
          <p className="py-1 pl-3 pr-5 bg-addpropertybg">{property?.zipCode}</p>
          <p className="py-1 pl-3 pr-5">{property?.country}</p>
          <p className="py-1 pl-3 pr-5 bg-addpropertybg">
            {`${property?.poolSize}Sq Ft`}
          </p>
          <p className="py-1 pl-3 pr-5">{property?.propertyId}</p>
          <p className="py-1 pl-3 pr-5 bg-addpropertybg">
            {`${property?.bedrooms}`}
          </p>
          <p className="py-1 pl-3 pr-5">{property?.bathrooms}</p>
          <p className="py-1 pl-3 pr-5 bg-addpropertybg">
            {`${property?.garage}`}
          </p>
          {dummyArray.map((item, index) => (
            <div
              key={index}
              className={`${
                index % 2 !== 0 ? "bg-addpropertybg" : ""
              } pl-3 pr-4 py-2 `}
            >
              <SvgCheckIcon />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CompareProperties;
