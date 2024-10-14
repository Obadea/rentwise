import React from "react";
import PhotoIcon from "@mui/icons-material/Photo";
import MapIcon from "@mui/icons-material/Map";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";

function ImageMapChanger({ className, newClassName }) {
  return (
    <div className={`flex gap-2 text-customStreetcolor ${newClassName} `}>
      <PhotoIcon
        className={`${className} cursor-pointer`}
        sx={{ fontSize: { xs: "24px", sm: "32px", md: "40px" } }}
        style={{
          //   fontSize: 36,
          border: "1px solid #666666",
          padding: "2px",
        }}
      />
      <MapIcon
        className={`${className} cursor-pointer`}
        sx={{ fontSize: { xs: "24px", sm: "32px", md: "40px" } }}
        style={{
          //   fontSize: 26,
          border: "1px solid #666666",
          padding: "3px",
        }}
      />
      <ThreeSixtyIcon
        className={`${className} cursor-pointer`}
        sx={{ fontSize: { xs: "24px", sm: "32px", md: "40px" } }}
        style={{
          //   fontSize: 26,
          border: "1px solid #666666",
          padding: "3px",
        }}
      />
    </div>
  );
}

export default ImageMapChanger;
