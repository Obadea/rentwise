import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopProperties.css";
import ArrowBack from "@mui/icons-material/ArrowBackIos";
import ArrowForward from "@mui/icons-material/ArrowForwardIos";
import Propertycard from "./Propertycard";
import { useQuery } from "@tanstack/react-query";
import { getAllProperties } from "../../../utils/endpoint";
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
import PropertiesCard from "../../../components/PropertiesCard";
import { useNavigate } from "react-router-dom";
import { toNaira } from "../../../utils/helperFunction";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

function TopProperties() {
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

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`backward custom-arrow border border-customStreetcolor `}
        onClick={onClick}
      >
        <ArrowBack
          className="text-customStreetcolor   pl-2 "
          style={{ fontSize: 32 }}
        />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={` forward  custom-arrow border border-customSearchblue  bg-customSearchblue`}
        onClick={onClick}
      >
        <ArrowForward className="text-white bg-customSearchblue " style={{}} />
      </div>
    );
  };
  const settings = {
    // lazyLoad: "ondemand",
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // arrows: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          // prevArrow:
          //   '<button type="button" class="slick-prev">Previous</button>',
          // nextArrow: '<button type="button" class="slick-next">Next</button>',
        },
      },
    ],
  };

  const emptyArray = new Array(4);

  return (
    <div className=" py-24  bg-gray-100 bg-opacity-25">
      <div>
        <h2 className="text-center text-2xl font-bold ">
          Explore Top Properties
          <span className="text-customaccent "> Around You!</span>
        </h2>
        <p className="text-center text-base font-normal ">
          There’s a home for everyone. Find the home that suits you best
        </p>
        <div className="slider-container md:max-w-[800px] mt-8 mx-auto lg:max-w-[1300px] px-6 pb-12">
          {isLoading ? (
            <Slider {...settings} className="space-x-3 ">
              <div>
                <Skeleton className=" rounded-md h-96 ml-12" />
              </div>
              <div>
                <Skeleton className=" rounded-md h-96 mx-6" />
              </div>
              <div>
                <Skeleton className=" rounded-md h-96 mr-12" />
              </div>
            </Slider>
          ) : (
            <Slider {...settings} className=" ">
              {data?.properties.map((item) => (
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
                  className="max-w-96"
                />
              ))}
            </Slider>
          )}
        </div>
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

export default TopProperties;
