import React, { useState } from "react";
import PropertiesCard from "../../components/PropertiesCard";
import { useQuery } from "@tanstack/react-query";
import { getAllProperties } from "../../utils/endpoint";
import Header from "../../components/Header";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
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
  Pagination,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import Breadcrumb from "../../components/BreadCrumb";
import {
  propertyPageDropDown,
  searchPageDropDown,
} from "../../utils/constants";
import Footer from "../../components/Footer";
import { toNaira } from "../../utils/helperFunction";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
import NoDataFound from "../../components/NoDataFound";

const PropertiesPage = () => {
  const [compareProperty, setCompareProperty] = useState([]);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [currentPage, setCurrentPage] = React.useState(1);

  const navigate = useNavigate();

  const { status, data, error, isLoading, refetch } = useQuery({
    queryKey: ["properties", currentPage],
    queryFn: () => {
      return getAllProperties(currentPage);
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

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Header newclassName="sticky" />
      <div className="mt-6 w-full xl:w-[1240px] m-auto space-y-10 ">
        <Breadcrumb />
        <div
          className="flex gap-4 flex-col lg:p-0 px-6
        "
        >
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
          <div className="flex flex-wrap gap-4 mt-6 items-end">
            {propertyPageDropDown.map((item, idx) => (
              <Select
                key={idx}
                label={item.title}
                variant="bordered"
                className="w-full md:w-[140px] lg:w-[190px]"
              >
                {item.select.map((option) => (
                  <SelectItem key={option}>{option}</SelectItem>
                ))}
              </Select>
            ))}
          </div>
        </div>
      </div>
      {/* {error && } */}
      <div className="">
        {isLoading ? (
          // <div className="properties-container flex">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-7xl mx-auto h-screen">
            <Skeleton className="h-80 w-full rounded-lg" />
            <Skeleton className="h-80 w-full rounded-lg" />
            <Skeleton className="h-80 w-full rounded-lg" />
            <Skeleton className="h-80 w-full rounded-lg" />
            <Skeleton className="h-80 w-full rounded-lg" />
            <Skeleton className="h-80 w-full rounded-lg" />
            {/* </div> */}
          </div>
        ) : !isLoading && data?.results >= 1 ? (
          <div className="properties-container flex justify-center flex-col items-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-7xl">
              {data?.properties?.map((property) => (
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
          </div>
        ) : (
          <NoDataFound />
        )}
        <Pagination
          className="my-8 mx-auto place-items-center"
          showControls
          initialPage={1}
          size="lg"
          page={currentPage}
          onChange={setCurrentPage}
          total={30}
        />
      </div>
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
      {/* Footer */}
      <Footer />
    </>
  );
};

export default PropertiesPage;
