import React, { useState } from "react";
import image1 from "../../assets/palor1.jpg";
import image2 from "../../assets/palor2.jpg";
import image3 from "../../assets/palor3.jpg";
import image4 from "../../assets/palor4.jpg";
import image5 from "../../assets/palor5.jpg";
import image6 from "../../assets/palor6.jpg";
import image7 from "../../assets/palor7.jpg";

const images = [
  image1,
  image2,
  image3, // Add more image paths as needed
  image4,
  image5,
  image6,
  image7,
  image7,
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
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <img
          className="w-full h-auto rounded-lg"
          src={images[currentIndex]}
          alt="Slider"
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          ❯
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            className={`w-20 h-auto rounded-lg cursor-pointer transition-opacity duration-300 ${
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
