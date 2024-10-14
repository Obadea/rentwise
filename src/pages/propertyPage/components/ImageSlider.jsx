import React, { useState } from "react";

import image1 from "../../../assets/palor6.jpg";
import image2 from "../../../assets/palor2.jpg";
import image3 from "../../../assets/palor3.jpg";
import image4 from "../../../assets/palor4.jpg";
import image5 from "../../../assets/palor5.jpg";
import image6 from "../../../assets/palor6.jpg";
import image7 from "../../../assets/palor7.jpg";
import ImageMapChanger from "./ImageMapChanger";

const images = [
  image1,
  image2,
  image3, // Add more image paths as needed
  image4,
  image5,
  image6,
  image7,
  image6,
  image7,
];

const ImageSlider = () => {
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

  return (
    <div className="max-w-3xl mx-auto px-2">
      <div className="relative ">
        <div className=" relative w-[180px] top-20 left-[75%]">
          <ImageMapChanger
            className="text-white bg-[#333333] hidden"
            newClassName="hidden lg:flex"
          />
        </div>

        <img
          className="w-full h-auto rounded-lg"
          src={images[currentIndex]}
          alt="Slider"
        />
        <button
          onClick={handlePrev}
          className="absolute text-2xl top-1/2 left-2 transform -translate-y-1/2 bg-white opacity-75 rounded-full px-3 py-1 lg:px-4 lg:py-2  shadow-lg"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute text-2xl top-1/2 right-2 transform -translate-y-1/2  bg-white opacity-75 rounded-full px-3 py-1 lg:px-4 lg:py-2  shadow-lg"
        >
          ❯
        </button>
      </div>
      <div className="flex overflow-x-auto whitespace-nowrap mt-4 px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 ">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-20 h-auto  cursor-pointer transition-opacity duration-300 ${
              currentIndex === index ? "opacity-100" : "opacity-60"
            }`}
            src={image}
            alt="Thumbnail"
            onClick={() => updateSliderImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
