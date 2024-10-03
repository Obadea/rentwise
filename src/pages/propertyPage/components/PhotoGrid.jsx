import React from "react";
import palor1 from "../../../assets/palor1.jpg";
import palor2 from "../../../assets/palor2.jpg";
import palor3 from "../../../assets/palor3.jpg";
import palor4 from "../../../assets/palor4.jpg";
import palor5 from "../../../assets/palor5.jpg";
import palor6 from "../../../assets/palor6.jpg";
import palor7 from "../../../assets/palor7.jpg";
function PhotoGrid() {
  return (
    <div className=" flex justify-center px-6 ">
      <div>
        <div className="flex flex-wrap ">
          <div className="w-[33.3%] h-28 lg:h-60  ">
            <img src={palor1} alt="" className="w-full h-full" />
          </div>
          <div className=" h-28 w-[33.3%] lg:h-60">
            <img src={palor2} alt="" className="w-full h-full" />
          </div>
          <div className=" h-28 w-[33.3%] lg:h-60">
            <img src={palor3} alt="" className="w-full h-full " />
          </div>
          <div className="h-28 w-[33.3%] lg:h-60">
            <img src={palor4} alt="" className="w-full  h-full" />
          </div>
          <div className="h-28 w-[33.3%] lg:h-60">
            <img src={palor5} alt="" className="w-full  h-full " />
          </div>
          <div className="h-28 w-[33.3%] lg:h-60">
            <img src={palor6} alt="" className="w-full  h-full " />
          </div>
          <div className="h-28 w-[33.3%] lg:h-60">
            <img src={palor7} alt="" className="w-full  h-full " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGrid;
