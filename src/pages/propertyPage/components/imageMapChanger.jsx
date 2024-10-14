import React from "react";
import PhotoIcon from "@mui/icons-material/Photo";
import MapIcon from "@mui/icons-material/Map";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";

function ImageMapChanger() {
  return (
    <div className="flex gap-2 text-customStreetcolor">
      <PhotoIcon
        style={{
          fontSize: 26,
          border: "1px solid #666666",
          padding: "3px",
        }}
      />
      <MapIcon
        style={{
          fontSize: 26,
          border: "1px solid #666666",
          padding: "3px",
        }}
      />
      <ThreeSixtyIcon
        style={{
          fontSize: 26,
          border: "1px solid #666666",
          padding: "3px",
        }}
      />
    </div>
  );
}

export default ImageMapChanger;
