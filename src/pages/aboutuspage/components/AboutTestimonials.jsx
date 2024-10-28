import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../landingpage/components/TopProperties";
import TestimonialCard from "./TestimonialCard";

function AboutTestimonials() {
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
    <div className="px-4 lg:px-24 py-12 bg-white ">
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-col text-center gap-2">
          <h3 className="font-normal text-4xl text-[#666666] ">TESTIMONIALS</h3>
          <p className="font-normal text-lg text-[#5C6970]">
            What others says about us
          </p>
        </div>
        {/* <div className="hidden lg:flex flex-row gap-4 justify-between flex-wrap ">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div> */}
        <div className=" pb-12  lg:hidden">
          <div>
            <div className="slider-container px-10 mt-8 ">
              <Slider {...settings} className="">
                <TestimonialCard className="w-full" />
                {/* <TestimonialCard className="w-full" />
                <TestimonialCard className="w-full" />
                <TestimonialCard className="w-full" /> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTestimonials;
