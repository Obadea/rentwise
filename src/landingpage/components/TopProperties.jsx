import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopProperties.css";
import kitchen from "../../assets/kitchen-view.png";
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        <div className="slider-container">
          <Slider {...settings}>
            <div className="w-full px-2  bg-red-500">
              <div className="">
                <img src={kitchen} alt="kitchen " className="w-full h-full" />
              </div>

              <div className="flex justify-between">
                <h4>Selewa Albeni Estate</h4>
                <div>
                  <OpenInFullIcon />
                  <AdjustIcon />
                  <FavoriteBorderIcon />
                </div>
              </div>
              <div>
                <LocationOnOutlinedIcon />
                <p>14, Asiriabo street, Isolo, Lagos.</p>
              </div>
              <div className="flex justify-around">
                <p>
                  <LocationOnOutlinedIcon /> 2bed
                </p>
                <p>
                  <LocationOnOutlinedIcon /> 2bed
                </p>
                <p>
                  <LocationOnOutlinedIcon /> 2bed
                </p>
              </div>
              <div className="flex justify-between">
                <h3>
                  $2,500,000/ <span>annum</span>
                </h3>
                <h4>Download WiseReport</h4>
              </div>
            </div>
            <div className="w-full h-48 bg-red-700">
              <h3>2</h3>
            </div>
            <div className="w-full h-48 bg-red-600">
              <h3>3</h3>
            </div>
            <div className="w-full h-48 bg-red-800">
              <h3>4</h3>
            </div>
            <div className="w-full h-48 bg-red-500">
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopProperties;
