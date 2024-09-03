import React, { useState } from "react";

function LocationTest() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseOver = () => {
    setShowTooltip(true);
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="relative inline-block"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      dldldl
      <i className="fas fa-heart text-lg text-red-500"></i>
      {showTooltip && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded py-1 px-2 text-sm text-gray-600">
          Click to add to favorite
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-l border-r border-b border-gray-200 w-0 h-0"></div>
        </div>
      )}
    </div>
  );
}

export default LocationTest;
