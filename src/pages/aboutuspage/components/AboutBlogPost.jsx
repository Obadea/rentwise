import React from "react";
import AboutBlogPostCard from "./AboutBlogPostCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../landingpage/components/TopProperties";

function AboutBlogPost({ forShortletPage }) {
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
          arrows: false,
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
          arrows: false,
          // prevArrow:
          //   '<button type="button" class="slick-prev">Previous</button>',
          // nextArrow: '<button type="button" class="slick-next">Next</button>',
        },
      },
    ],
  };
  return (
    <div className={`${forShortletPage ? "" : "px-4 lg:px-24 py-12"}`}>
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-col gap-2">
          <h3 className="font-normal text-3xl text-[#000000] ">
            Read From Our Blog
          </h3>
          <p className="font-normal text-base text-customStreetcolor">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
        </div>
        <div className="hidden lg:flex justify-between">
          <AboutBlogPostCard />
          <AboutBlogPostCard />
          <AboutBlogPostCard />
          <AboutBlogPostCard />
        </div>
        <div className=" pb-12  lg:hidden">
          <div>
            <div className="slider-container px-10 mt-8 ">
              <Slider {...settings} className="">
                <AboutBlogPostCard className="w-full" />
                <AboutBlogPostCard className="w-full" />
                <AboutBlogPostCard className="w-full" />
                <AboutBlogPostCard className="w-full" />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBlogPost;
