import React, { useEffect, useState } from "react";
import Propertycard from "../../landingpage/components/Propertycard";
import { getAllProperties } from "../../../utils/endpoint";
import { useQuery } from "@tanstack/react-query";
import PropertiesCard from "../../../components/PropertiesCard";
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
  useDisclosure,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { toNaira } from "../../../utils/helperFunction";

function SimilarListing({ id }) {
  const [compareProperty, setCompareProperty] = useState([]);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  const addItem = (newItem) => {
    if (newItem) {
      setCompareProperty([...compareProperty, newItem]);
    }
  };

  useEffect(() => {
    if (compareProperty.length >= 2) {
      onOpen();
    } else {
      onClose();
    }
  }, [compareProperty]);

  const removeImage = (id) => {
    setCompareProperty(compareProperty.filter((image) => image.id !== id));
  };

  const { status, data, error, isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: () => {
      return getAllProperties(20);
    },
  });
  return (
    <div id={id} className="px-4 py-6 lg:p-10 flex flex-col bg-white gap-4 ">
      <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9]  ">
        <h4 className=" font-medium text-lg text-customdark">
          Similar Listings
        </h4>
      </div>
      {/* <div className="flex flex-wrap justify-evenly gap-y-3 gap-x-2 "> */}
      {/* <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"> */}
      {/* <Propertycard className="flex-1 lg:w-[30%] lg:mx-1 lg:min-w-[240px] " /> */}
      <div class="flex flex-wrap gap-6">
        {" "}
        {data?.properties ? (
          data?.properties.map((item) => (
            <PropertiesCard
              key={item?.id}
              img={item?.propertyImages[6]}
              title={item?.name}
              address={item?.address}
              bedroom={item?.bedrooms}
              bathroom={item?.bathrooms}
              sittingroom={4}
              amount={Number(item?.price)}
              addProperty={addItem}
              propertyData={item}
              compareData={compareProperty}
              removeProperty={removeImage}
              containerClassName="flex-1 min-w-[320px]"
            />
          ))
        ) : (
          <p className="m-auto font-bold text-lg">Loading...</p>
        )}
      </div>

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
                  {compareProperty.map((image) => (
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
                        src={image?.propertyImages[6]}
                      />
                      <CardFooter className="flex gap-1  bg-white/20  border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 shadow-small z-10 w-[calc(100%_-_8px)] ml-1 py-2">
                        <p className="text-xs text-black truncate">
                          {image?.name}
                        </p>
                        <p className="text-black text-tiny ml-auto">
                          {toNaira(Number(image?.price))}
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
}

export default SimilarListing;
