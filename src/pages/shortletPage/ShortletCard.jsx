import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllProperties } from "../../utils/endpoint";
import { Skeleton, useDisclosure } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import PropertiesCard from "../../components/PropertiesCard";

const ShortletCard = () => {
  const [compareProperty, setCompareProperty] = useState([]);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  const { status, data, error, isLoading, refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: () => {
      return getAllProperties(20);
    },
  });
  const addItem = (newItem) => {
    if (newItem) {
      setCompareProperty([...compareProperty, newItem]);
    }
  };

  const removeImage = (id) => {
    setCompareProperty(compareProperty.filter((image) => image.id !== id));
  };

  return (
    <div className="mt-24">
      <h2 className="text-center lg:text-4xl font-bold mb-2 text-xl">
        Explore Top Shortlets
        <span className="text-customaccent "> Around You!</span>
      </h2>
      <p className=" w-[80%] text-center m-auto text-base font-normal text-customStreetcolor">
        There’s a home for everyone. Find the home that suits you best
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-7xl mx-auto mt-7">
        {!isLoading &&
          data?.properties
            ?.slice(0, 3)
            ?.map((property) => (
              <PropertiesCard
                key={property.id}
                img={property?.propertyImages[6]}
                title={property?.name}
                address={property?.address}
                bedroom={property?.bedrooms}
                bathroom={property?.bathrooms}
                sittingroom={4}
                amount={Number(property?.price)}
                propertyData={property}
                compareData={compareProperty}
                removeProperty={removeImage}
                addProperty={addItem}
              />
            ))}
      </div>
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w- max-w-7xl mx-auto mt-7">
          <Skeleton className="h-80 w-full rounded-lg" />
          <Skeleton className="h-80 w-full rounded-lg" />
          <Skeleton className="h-80 w-full rounded-lg" />
        </div>
      )}

      <h2 className="text-center lg:text-4xl font-bold mb-2 text-xl mt-10">
        View More Shortlets in
        <span className="text-customaccent "> Allen Avenue</span>
      </h2>
      <p className=" w-[80%] text-center m-auto text-base font-normal text-customStreetcolor">
        There’s a home for everyone. Find the home that suits you best
      </p>
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w- max-w-7xl mx-auto mt-7 mb-6">
          <Skeleton className="h-80 w-full rounded-lg" />
          <Skeleton className="h-80 w-full rounded-lg" />
          <Skeleton className="h-80 w-full rounded-lg" />
          <Skeleton className="h-80 w-full rounded-lg" />
          <Skeleton className="h-80 w-full rounded-lg" />
          <Skeleton className="h-80 w-full rounded-lg" />
        </div>
      ) : (
        data?.properties?.map((property) => (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-7xl mx-auto mt-7 mb-6">
            <PropertiesCard
              key={property.id}
              img={property?.propertyImages[6]}
              title={property?.name}
              address={property?.address}
              bedroom={property?.bedrooms}
              bathroom={property?.bathrooms}
              sittingroom={4}
              amount={Number(property?.price)}
              propertyData={property}
              compareData={compareProperty}
              removeProperty={removeImage}
              addProperty={addItem}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ShortletCard;
