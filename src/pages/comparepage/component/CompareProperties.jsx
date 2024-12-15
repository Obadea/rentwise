import { Image } from '@nextui-org/react';
import React from 'react';
import { toNaira } from '../../../utils/helperFunction';

const CompareProperties = ({ compareData }) => {
  return (
    <div className={`overflow-x-scroll w-full flex`}>
      {compareData?.map((property) => (
        <div className="w-full box-content  whitespace-nowrap items-center justify-center min-w-56 ">
          <Image src={property?.img} className="h-32 ml-3" isZoomed />
          <p className="py-1 pl-3 pr-5 mt-4 bg-addpropertybg">
            {property?.title}
          </p>
          <p className="py-1 pl-3 pr-5 ">{property?.address}</p>
          <p className="py-1 pl-3 pr-5 bg-addpropertybg">{property?.bedroom}</p>
          <p className="py-1 pl-3 pr-5">{property?.bathroom}</p>
          <p className="py-1 pl-3 pr-5 bg-addpropertybg">
            {property?.sittingroom}
          </p>
          <p className="py-1 pl-3 pr-5">{toNaira(property?.amount)}</p>
        </div>
      ))}
    </div>
  );
};

export default CompareProperties;
