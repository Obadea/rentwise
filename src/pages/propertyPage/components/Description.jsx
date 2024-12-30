import { IsoOutlined } from "@mui/icons-material";
import { Skeleton } from "@nextui-org/react";
import React from "react";

function Description({ id, propertyData, forShortlet, isLoading }) {
  return (
    <div
      id={id}
      className="px-4 py-6 lg:p-10 flex flex-col gap-4 mt-16 bg-white"
    >
      <div className=" border-b-2 pb-8 border-[#DCE0E0] font-medium text-lg text-customNameBlack ">
        Description
      </div>

      {!isLoading && !forShortlet ? (
        <div className="font-normal text-sm text-customStreetcolor">
          {propertyData?.property?.description}
        </div>
      ) : !isLoading && forShortlet ? (
        <div className="font-normal text-sm text-customStreetcolor">
          {propertyData?.shortlet?.description}
        </div>
      ) : (
        <Skeleton className="w-full h-60 rounded-md" />
      )}
      {/* <div className="font-normal text-sm text-customStreetcolor">
        About Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent
        nunc. Sed aliquam mi at urna. Condimentum mi lorem aliquam mattis.
        Consequat est phasellus velit nisl justo dui. Faucibus dictum habitasse
        sed vel at nisl non. Nisi placerat purus sed varius euismod. Risus etiam
        purus donec neque. Non id mi maecenas quam convallis ut varius feugiat
        iaculis. Quis porttitor urna malesuada Lorem ipsum dolor sit amet
        consectetur. Gravida id ut praesent nunc. Sed aliquam mi at urna.
        Condimentum mi lorem aliquam mattis. Consequat est phasellus velit nisl
        justo dui. Faucibus dictum habitasse sed vel at nisl non. Nisi placerat
        purus sed varius euismod. Risus etiam purus donec neque. Non id mi
        maecenas quam convallis ut varius feugiat iaculis. Quis porttitor urna
        malesuada
      </div> */}
    </div>
  );
}

export default Description;
