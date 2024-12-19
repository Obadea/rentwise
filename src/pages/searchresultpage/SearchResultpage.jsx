import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";
import { useNavigate } from "react-router-dom";
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
  Input,
  Select,
  SelectItem,
  Skeleton,
  useDisclosure,
} from "@nextui-org/react";
import { propertyData, searchPageDropDown } from "../../utils/constants";
import PropertiesCard from "../../components/PropertiesCard";
import { toNaira } from "../../utils/helperFunction";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AdvanceSearchModal from "./components/AdvanceSearchModal";
import Footer from "../../components/Footer";
import { useQuery } from "@tanstack/react-query";
import { getAllProperties } from "../../utils/endpoint";

function SearchResultpage({ forShortlet }) {
  const [compareProperty, setCompareProperty] = useState([]);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const navigate = useNavigate();

  const addItem = (newItem) => {
    if (newItem) {
      setCompareProperty([...compareProperty, newItem]);
    }
  };

  const { status, data, error, isLoading, refetch } = useQuery({
    queryKey: ["properties"],
    queryFn: () => {
      return getAllProperties(20);
    },
  });

  const [renderProperty, setRenderProperty] = useState(data?.properties);

  useEffect(() => {
    if (!isLoading) {
      setRenderProperty(data?.properties);
    }
  }, [isLoading]);

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

  return (
    <div>
      <Header />
      <div className="px-4 md:px-10 lg:px-20  ">
        <div className="mb-8 mt-4">
          <Breadcrumb />
        </div>
        <div>
          <h3 className="font-bold text-2xl text-customdark mb-4">Search</h3>
          <p className="font-normal text-base text-customgray4">
            {forShortlet
              ? "Searh shortlets around you"
              : "Search properties and places around you"}
          </p>
          {/* Search Input */}
          <div className="mt-6 w-full max-w-[783px]">
            <Input
              placeholder="Search..."
              variant="bordered"
              classNames={{ inputWrapper: "py-[26px] pr-[7px]" }}
              endContent={
                <Button
                  className="w-[120px] lg:w-[200px] text-sm text-white"
                  color="primary"
                >
                  Search
                </Button>
              }
            />
          </div>

          {/* Dropdowns */}
          <div className="flex flex-wrap gap-4 mt-6 items-end">
            {searchPageDropDown.map((item, idx) => (
              <Select
                key={idx}
                label={item.title}
                variant="bordered"
                className="w-full md:w-[180px] lg:w-[150px]"
              >
                {item.select.map((option) => (
                  <SelectItem key={option}>{option}</SelectItem>
                ))}
              </Select>
            ))}
            {forShortlet ? (
              ""
            ) : (
              <AdvanceSearchModal
                initialData={data}
                setRenderProperty={setRenderProperty}
                refetchInitalData={refetch}
              />
            )}
          </div>

          {/* Properties */}
          <div className="mt-10 gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mb-6">
            {renderProperty ? (
              renderProperty?.map((item) => (
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
                />
              ))
            ) : (
              <>
                <Skeleton className="w-full h-80 rounded-lg" />
                <Skeleton className="w-full h-80 rounded-lg" />
                <Skeleton className="w-full h-80 rounded-lg" />
                <Skeleton className="w-full h-80 rounded-lg" />
                <Skeleton className="w-full h-80 rounded-lg" />
                <Skeleton className="w-full h-80 rounded-lg" />
                <Skeleton className="w-full h-80 rounded-lg" />
                <Skeleton className="w-full h-80 rounded-lg" />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Drawer */}
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
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SearchResultpage;
