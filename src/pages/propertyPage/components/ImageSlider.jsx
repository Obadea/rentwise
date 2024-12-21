// import React, { useEffect, useState } from "react";

// import { Button, Image, Skeleton } from "@nextui-org/react";
// import {
//   Svg360DegIcon,
//   SvgImgcon,
//   SvgLeftIcon,
//   SvgMapIcon,
//   SvgRightIcon,
// } from "../../../utils/SvgIcons";

// const ImageSlider = ({ propertyData, isLoading }) => {
//   const [images, setImages] = useState([]);

//   const [render, setRender] = useState("image");

//   useEffect(() => {
//     if (!isLoading) {
//       console.log(propertyData);
//       setImages(propertyData?.property?.property?.propertyImages?.slice(1, 9));
//     }
//   }, [isLoading]);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const updateSliderImage = (index) => {
//     setCurrentIndex(index);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handelRenderChange = (show) => {
//     setRender(show);
//   };

//   if (isLoading && !images) {
//     return <Skeleton className="w-[97%] h-[400px] rounded-md mb-10" />;
//   }

//   return (
//     <div className="max-w-[96%] relative ">
//       {/* 3 top right icons */}
//       <div className="absolute right-14 top-12 z-[14] space-x-2">
//         <Button
//           isIconOnly
//           size="lg"
//           radius="sm"
//           className={`${
//             render === "image" ? "bg-[#3B68F9]" : "bg-customdark"
//           } opacity-55`}
//           onPress={() => handelRenderChange("image")}
//         >
//           <SvgImgcon />
//         </Button>

//         <Button
//           isIconOnly
//           size="lg"
//           radius="sm"
//           className={`${
//             render === "map" ? "bg-[#3B68F9]" : "bg-customdark"
//           } opacity-55`}
//           onPress={() => handelRenderChange("map")}
//         >
//           <SvgMapIcon />
//         </Button>

//         <Button
//           isIconOnly
//           size="lg"
//           radius="sm"
//           className={`${
//             render === "360deg" ? "bg-[#3B68F9]" : "bg-customdark"
//           } opacity-55`}
//           onPress={() => handelRenderChange("360deg")}
//         >
//           <Svg360DegIcon />
//         </Button>
//       </div>
//       {render === "image" ? (
//         <>
//           <div className="relative w-full">
//             {/* <div className=" relative w-[180px] top-20 left-[75%]"></div> */}
//             <div className="  w-full">
//               <Image
//                 src={images?.length >= 1 ? images[currentIndex] : ""}
//                 alt="Slider"
//                 width="100%"
//                 radius="none"
//                 className="h-[450px] w-full object-cover "
//               />
//             </div>
//             <Button
//               onPress={handlePrev}
//               isIconOnly
//               className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-[#3B68F9] z-10 "
//               size="lg"
//               radius="sm"
//             >
//               <SvgLeftIcon />
//             </Button>
//             <Button
//               onPress={handleNext}
//               isIconOnly
//               className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-[#3B68F9] z-10 "
//               size="lg"
//               radius="sm"
//             >
//               <SvgRightIcon />
//             </Button>
//           </div>
//           <div className="flex overflow-x-auto whitespace-nowrap mt-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 gap-1 ">
//             {images?.map((image, index) => (
//               <Image
//                 key={index}
//                 className={`w-56 h-20  cursor-pointer transition-opacity duration-300 ${
//                   currentIndex === index
//                     ? "border-2 border-blue-700"
//                     : "opacity-60"
//                 }`}
//                 src={image}
//                 alt="Thumbnail"
//                 radius="none"
//                 onClick={() => updateSliderImage(index)}
//               />
//             ))}
//           </div>
//         </>
//       ) : render === "map" ? (
//         <Skeleton className="w-[97%] h-[400px] rounded-md mb-10" />
//       ) : (
//         <Skeleton className="w-[97%] h-[400px] rounded-md mb-10" />
//       )}
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useEffect, useState } from "react";
import { Button, Image, Skeleton } from "@nextui-org/react";
import {
  Svg360DegIcon,
  SvgImgcon,
  SvgLeftIcon,
  SvgMapIcon,
  SvgRightIcon,
} from "../../../utils/SvgIcons";

const ImageSlider = ({ propertyData, isLoading }) => {
  const [images, setImages] = useState([]);
  const [render, setRender] = useState("image");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setImages(propertyData?.property?.property?.propertyImages?.slice(1, 9));
    }
  }, [isLoading]);

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
    return <Skeleton className="w-full h-[400px] rounded-md mb-10" />;
  }

  return (
    <div className="lg:max-w-[96%] w-full ml-0.5 lg:ml-0  relative mx-auto">
      {/* Top Right Buttons */}
      <div className="absolute right-4 top-4 z-[12] flex space-x-2">
        <Button
          isIconOnly
          size="lg"
          radius="sm"
          className={`${
            render === "image" ? "bg-[#3B68F9]" : "bg-gray-600"
          } opacity-90`}
          onPress={() => handelRenderChange("image")}
        >
          <SvgImgcon />
        </Button>
        <Button
          isIconOnly
          size="lg"
          radius="sm"
          className={`${
            render === "map" ? "bg-[#3B68F9]" : "bg-gray-600"
          } opacity-90`}
          onPress={() => handelRenderChange("map")}
        >
          <SvgMapIcon />
        </Button>
        <Button
          isIconOnly
          size="lg"
          radius="sm"
          className={`${
            render === "360deg" ? "bg-[#3B68F9]" : "bg-gray-600"
          } opacity-90`}
          onPress={() => handelRenderChange("360deg")}
        >
          <Svg360DegIcon />
        </Button>
      </div>

      {render === "image" ? (
        <>
          <div className="relative w-full mt-[60px] lg:mt-0">
            <Image
              src={images?.length >= 1 ? images[currentIndex] : ""}
              alt="Slider"
              width="100%"
              className="w-full h-[300px] lg:h-[450px] object-cover z-10"
              radius="none"
            />
            {/* Navigation Buttons */}
            <Button
              onPress={handlePrev}
              isIconOnly
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#3B68F9] z-10"
              size="lg"
              radius="sm"
            >
              <SvgLeftIcon />
            </Button>
            <Button
              onPress={handleNext}
              isIconOnly
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#3B68F9] z-10"
              size="lg"
              radius="sm"
            >
              <SvgRightIcon />
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="flex overflow-x-auto mt-4 gap-2 px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {images?.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Thumbnail"
                className={`h-10 sm:h-20 lg:h-20 w-auto cursor-pointer transition-opacity duration-300 ${
                  currentIndex === index
                    ? "border-2 border-blue-700"
                    : "opacity-60"
                }`}
                radius="none"
                onClick={() => updateSliderImage(index)}
              />
            ))}
          </div>
        </>
      ) : render === "map" ? (
        <Skeleton className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-md mb-10  mt-[60px] lg:mt-0 " />
      ) : (
        <Skeleton className="w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-md mb-10  mt-[60px] lg:mt-0" />
      )}
    </div>
  );
};

export default ImageSlider;
