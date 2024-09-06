import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopProperties.css";
import ArrowBack from "@mui/icons-material/ArrowBackIos";
import ArrowForward from "@mui/icons-material/ArrowForwardIos";
import Slidercard from "./Slidercard";

function TopProperties() {
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`backward custom-arrow border border-customStreetcolor `}
        onClick={onClick}
      >
        <ArrowBack
          className="text-customStreetcolor   pl-2 "
          style={{ fontSize: 32 }}
        />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className={` forward  custom-arrow border border-customSearchblue  bg-customSearchblue`}
        onClick={onClick}
      >
        <ArrowForward className="text-white bg-customSearchblue " style={{}} />
      </div>
    );
  };
  const settings = {
    lazyLoad: "ondemand",
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // arrows: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // dots: true,
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
          // dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          // prevArrow:
          //   '<button type="button" class="slick-prev">Previous</button>',
          // nextArrow: '<button type="button" class="slick-next">Next</button>',
        },
      },
    ],
  };
  return (
    <div className=" py-24  bg-gray-100 bg-opacity-25">
      <div>
        <h2 className="text-center text-2xl font-bold ">
          Explore Top Properties
          <span className="text-customaccent "> Around You!</span>
        </h2>
        <p className="text-center text-base font-normal ">
          There’s a home for everyone. Find the home that suits you best
        </p>
        <div className="slider-container md:max-w-[800px] mt-8 mx-auto lg:max-w-[1300px] px-6 pb-12">
          <Slider
            // prevArrow={<button className="slick-prev">Previous</button>}
            // nextArrow={<button className="slick-prev">Previous</button>}
            {...settings}
            className="mx-auto "
          >
            <Slidercard />
            <Slidercard />
            <Slidercard />
            <Slidercard />
            <Slidercard />
            <Slidercard />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopProperties;
