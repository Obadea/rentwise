import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopProperties.css";
import palor from "../../assets/palor.png";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import AdjustIcon from "@mui/icons-material/Adjust";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function TopProperties() {
  const settings = {
    lazyLoad: "ondemand",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="h-[593px] pt-24">
      <div>
        <h2 className="text-center text-2xl">
          Explore Top Properties{" "}
          <span className="text-customaccent ">Around You!</span>
        </h2>
        <p className="text-center text-base ">
          There’s a home for everyone. Find the home that suits you best
        </p>
        <div className="slider-container px-10 mt-8">
          <Slider {...settings}>
            <div className=" px-2">
              <div className="h-56 w-full">
                <img src={palor} alt="kitchen " className="  h-full w-full" />
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h4 className="text-base">Selewa Albeni Estate</h4>
                  <div className="flex justify-between gap-1">
                    <OpenInFullIcon fontSize="small" />
                    <AdjustIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                  </div>
                </div>
                <div className="flex justify-start ">
                  <LocationOnOutlinedIcon />
                  <p>14, Asiriabo street, Isolo, Lagos.</p>
                </div>
                <div className="flex justify-start gap-2">
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                </div>
                <div className="flex justify-between">
                  <h3>
                    $2,500,000/ <span className="text-sm">annum</span>
                  </h3>
                  <button className="text-blue-500 text-sm">
                    Download WiseReport
                  </button>
                </div>
              </div>
            </div>
            <div className=" px-2">
              <div className="h-56 w-full">
                <img src={palor} alt="kitchen " className="  h-full w-full" />
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h4 className="text-base">Selewa Albeni Estate</h4>
                  <div className="flex justify-between gap-1">
                    <OpenInFullIcon fontSize="small" />
                    <AdjustIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                  </div>
                </div>
                <div className="flex justify-start ">
                  <LocationOnOutlinedIcon />
                  <p>14, Asiriabo street, Isolo, Lagos.</p>
                </div>
                <div className="flex justify-start gap-2">
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                </div>
                <div className="flex justify-between">
                  <h3>
                    $2,500,000/ <span className="text-sm">annum</span>
                  </h3>
                  <button className="text-blue-500 text-sm">
                    Download WiseReport
                  </button>
                </div>
              </div>
            </div>
            <div className=" px-2">
              <div className="h-56 w-full">
                <img src={palor} alt="kitchen " className="  h-full w-full" />
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h4 className="text-base">Selewa Albeni Estate</h4>
                  <div className="flex justify-between gap-1">
                    <OpenInFullIcon fontSize="small" />
                    <AdjustIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                  </div>
                </div>
                <div className="flex justify-start ">
                  <LocationOnOutlinedIcon />
                  <p>14, Asiriabo street, Isolo, Lagos.</p>
                </div>
                <div className="flex justify-start gap-2">
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                </div>
                <div className="flex justify-between">
                  <h3>
                    $2,500,000/ <span className="text-sm">annum</span>
                  </h3>
                  <button className="text-blue-500 text-sm">
                    Download WiseReport
                  </button>
                </div>
              </div>
            </div>
            <div className=" px-2">
              <div className="h-56 w-full">
                <img src={palor} alt="kitchen " className="  h-full w-full" />
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h4 className="text-base">Selewa Albeni Estate</h4>
                  <div className="flex justify-between gap-1">
                    <OpenInFullIcon fontSize="small" />
                    <AdjustIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                  </div>
                </div>
                <div className="flex justify-start ">
                  <LocationOnOutlinedIcon />
                  <p>14, Asiriabo street, Isolo, Lagos.</p>
                </div>
                <div className="flex justify-start gap-2">
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                </div>
                <div className="flex justify-between">
                  <h3>
                    $2,500,000/ <span className="text-sm">annum</span>
                  </h3>
                  <button className="text-blue-500 text-sm">
                    Download WiseReport
                  </button>
                </div>
              </div>
            </div>
            <div className=" px-2">
              <div className="h-56 w-full">
                <img src={palor} alt="kitchen " className="  h-full w-full" />
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h4 className="text-base">Selewa Albeni Estate</h4>
                  <div className="flex justify-between gap-1">
                    <OpenInFullIcon fontSize="small" />
                    <AdjustIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                  </div>
                </div>
                <div className="flex justify-start ">
                  <LocationOnOutlinedIcon />
                  <p>14, Asiriabo street, Isolo, Lagos.</p>
                </div>
                <div className="flex justify-start gap-2">
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                </div>
                <div className="flex justify-between">
                  <h3>
                    $2,500,000/ <span className="text-sm">annum</span>
                  </h3>
                  <button className="text-blue-500 text-sm">
                    Download WiseReport
                  </button>
                </div>
              </div>
            </div>
            <div className=" px-2">
              <div className="h-56 w-full">
                <img src={palor} alt="kitchen " className="  h-full w-full" />
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div className="flex justify-between">
                  <h4 className="text-base">Selewa Albeni Estate</h4>
                  <div className="flex justify-between gap-1">
                    <OpenInFullIcon fontSize="small" />
                    <AdjustIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                  </div>
                </div>
                <div className="flex justify-start ">
                  <LocationOnOutlinedIcon />
                  <p>14, Asiriabo street, Isolo, Lagos.</p>
                </div>
                <div className="flex justify-start gap-2">
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                  <p>
                    <LocationOnOutlinedIcon fontSize="small" />
                    2bed
                  </p>
                </div>
                <div className="flex justify-between">
                  <h3>
                    $2,500,000/ <span className="text-sm">annum</span>
                  </h3>
                  <button className="text-blue-500 text-sm">
                    Download WiseReport
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopProperties;
