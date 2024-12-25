import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getAllProperties, getAllShortlet } from "../../utils/endpoint";
import {
  Button,
  Card,
  CardFooter,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Image,
  Skeleton,
  useDisclosure,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import PropertiesCard from "../../components/PropertiesCard";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { toNaira } from "../../utils/helperFunction";

const ShortletCard = () => {
  const [compareProperty, setCompareProperty] = useState([]);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  const { status, data, error, isLoading, refetch } = useQuery({
    queryKey: ["shortlets"],
    queryFn: () => {
      return getAllShortlet("3");
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

  useEffect(() => {
    if (!isLoading) {
      console.log(data);
    }
  }, [isLoading]);

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
          data?.shortlets?.map((property) => (
            <PropertiesCard
              key={property._id}
              img={property?.shortletsImages[6]}
              title={property?.name}
              address={property?.address}
              bedroom={property?.bedrooms}
              bathroom={property?.bathrooms}
              sittingroom={4}
              amount={Number(property?.monthlyPrice)}
              propertyData={property}
              compareData={compareProperty}
              removeProperty={removeImage}
              addProperty={addItem}
              containerClassName="z-0"
              className="z-0"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-7xl mx-auto mt-7 mb-6">
          {data?.shortlets?.map((property) => (
            <PropertiesCard
              key={property.id}
              img={property?.shortletsImages[2]}
              title={property?.name}
              address={property?.address}
              bedroom={property?.bedrooms}
              bathroom={property?.bathrooms}
              sittingroom={4}
              amount={Number(property?.monthlyPrice)}
              propertyData={property}
              compareData={compareProperty}
              removeProperty={removeImage}
              addProperty={addItem}
            />
          ))}
        </div>
      )}
      {/* Compare Drawer */}
      <Drawer
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="transparent"
        shouldBlockScroll={false}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Compare Properties
              </DrawerHeader>
              <DrawerBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {compareProperty?.map((image) => (
                    <Card
                      key={image.id}
                      isFooterBlurred
                      className="border-none"
                      radius="lg"
                    >
                      <Button
                        onPress={() => removeImage(image.id)}
                        isIconOnly
                        size="sm"
                        radius="full"
                        className="absolute top-2 z-50 right-2 bg-transparent backdrop-blur-sm"
                      >
                        <RemoveCircleOutlineIcon
                          className="text-[17px]"
                          fontSize="17px"
                        />
                      </Button>
                      <Image
                        boxSize="10px"
                        objectFit="cover"
                        borderRadius="8px"
                        className="object-cover"
                        src={image.propertyImages[6]}
                      />
                      <CardFooter className="flex gap-1  bg-white/20  border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 shadow-small z-10 w-[calc(100%_-_8px)] ml-1 py-2">
                        <p className="text-xs text-black truncate">
                          {image.name}
                        </p>
                        <p className="text-black text-tiny ml-auto">
                          {toNaira(image.price)}
                        </p>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button color=".danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    onClose();
                    navigate("/compare", { state: compareProperty });
                  }}
                >
                  Compare
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ShortletCard;
