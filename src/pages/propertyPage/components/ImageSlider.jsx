import React, { useEffect, useState } from "react";

import image1 from "../../../assets/palor6.jpg";
import image2 from "../../../assets/palor2.jpg";
import image3 from "../../../assets/palor3.jpg";
import image4 from "../../../assets/palor4.jpg";
import image5 from "../../../assets/palor5.jpg";
import image6 from "../../../assets/palor6.jpg";
import image7 from "../../../assets/palor7.jpg";
import { Button, Image, Skeleton } from "@nextui-org/react";
import {
  Svg360DegIcon,
  SvgImgcon,
  SvgLeftIcon,
  SvgMapIcon,
  SvgRightIcon,
} from "../../../utils/SvgIcons";
// import ImageMapChanger from "./ImageMapChanger";

// const images = [
//   image1,
//   image2,
//   image3, // Add more image paths as needed
//   image4,
//   image5,
//   image6,
//   image7,
//   image6,
//   image7,
// ];

const ImageSlider = ({ propertyData, isLoading }) => {
  const [images, setImages] = useState([]);

  const [render, setRender] = useState("image");

  useEffect(() => {
    if (!isLoading) {
      console.log(propertyData);
      setImages(propertyData?.property?.property?.propertyImages?.slice(1, 9));
    }
  }, [isLoading]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const updateSliderImage = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handelRenderChange = (show) => {
    setRender(show);
  };

  if (isLoading && !images) {
    return <Skeleton className="w-[97%] h-[400px] rounded-md mb-10" />;
  }

  return (
    <div className="max-w-[96%] relative ">
      {/* 3 top right icons */}
      <div className="absolute right-14 top-12 z-[14] space-x-2">
        <Button
          isIconOnly
          size="lg"
          radius="sm"
          className={`${
            render === "image" ? "bg-[#3B68F9]" : "bg-customdark"
          } opacity-55`}
          onPress={() => handelRenderChange("image")}
        >
          <SvgImgcon />
        </Button>

        <Button
          isIconOnly
          size="lg"
          radius="sm"
          className={`${
            render === "map" ? "bg-[#3B68F9]" : "bg-customdark"
          } opacity-55`}
          onPress={() => handelRenderChange("map")}
        >
          <SvgMapIcon />
        </Button>

        <Button
          isIconOnly
          size="lg"
          radius="sm"
          className={`${
            render === "360deg" ? "bg-[#3B68F9]" : "bg-customdark"
          } opacity-55`}
          onPress={() => handelRenderChange("360deg")}
        >
          <Svg360DegIcon />
        </Button>
      </div>
      {render === "image" ? (
        <>
          <div className="relative ">
            <div className=" relative w-[180px] top-20 left-[75%]"></div>

            <Image
              src={images?.length >= 1 ? images[currentIndex] : ""}
              alt="Slider"
              width="100%"
              // height={330}
              radius="none"
              className="h-[440px]"
            />
            <Button
              onPress={handlePrev}
              isIconOnly
              className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-[#3B68F9] z-10 "
              size="lg"
              radius="sm"
            >
              <SvgLeftIcon />
            </Button>
            <Button
              onPress={handleNext}
              isIconOnly
              className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-[#3B68F9] z-10 "
              size="lg"
              radius="sm"
            >
              <SvgRightIcon />
            </Button>
          </div>
          <div className="flex overflow-x-auto whitespace-nowrap mt-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 gap-1 ">
            {images?.map((image, index) => (
              <Image
                key={index}
                className={`w-56 h-20  cursor-pointer transition-opacity duration-300 ${
                  currentIndex === index
                    ? "border-2 border-blue-700"
                    : "opacity-60"
                }`}
                src={image}
                alt="Thumbnail"
                radius="none"
                onClick={() => updateSliderImage(index)}
              />
            ))}
          </div>
        </>
      ) : render === "map" ? (
        <Skeleton className="w-[97%] h-[400px] rounded-md mb-10" />
      ) : (
        <Skeleton className="w-[97%] h-[400px] rounded-md mb-10" />
      )}
    </div>
  );
};

export default ImageSlider;
