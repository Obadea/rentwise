import React from "react";
import palor1 from "../../../assets/palor1.jpg";
import palor2 from "../../../assets/palor2.jpg";
import palor3 from "../../../assets/palor3.jpg";
import palor4 from "../../../assets/palor4.jpg";
import palor5 from "../../../assets/palor5.jpg";
import palor6 from "../../../assets/palor6.jpg";
import palor7 from "../../../assets/palor7.jpg";
import { Image, Skeleton } from "@nextui-org/react";
function PhotoGrid({ propertyData }) {
  if (!propertyData?.property?.property?.propertyImages) {
    return <Skeleton className="w-[92%] m-auto h-52 rounded-md" />;
  }

  return (
    <div className=" flex justify-center px-6  lg:px-10">
      <div>
        <div className="grid lg:grid-cols-3">
          {propertyData?.property?.property?.propertyImages
            ?.slice(1, 10)
            ?.map((item) => (
              // <div className="w-[220px]  h-[220px] lg:h-60 ">
              <Image
                src={item}
                alt="Property Image"
                className="w-[501px]  h-[213px]"
                radius="none"
              />
              // </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoGrid;
