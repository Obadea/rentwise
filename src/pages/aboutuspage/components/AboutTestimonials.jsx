import React from "react";
import AboutBlogPostCard from "./AboutBlogPostCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../landingpage/components/TopProperties";
import quote from "../../../assets/Open-Quote--Streamline-Ultimate.png.png";

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
    <div className="px-4 lg:px-24 py-12">
      <div className="flex flex-col gap-6 ">
        <div className="flex flex-col text-center gap-2">
          <h3 className="font-normal text-4xl text-[#666666] ">TESTIMONIALS</h3>
          <p className="font-normal text-lg text-[#5C6970]">
            What others says about us
          </p>
        </div>
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-col  bg-[#FAFBFF]">
            <img src={quote} alt="" className="w-[10%]" />
            <h5 className="font-normal text-base text-[#454F54]">
              RentWise made my house-hunting so much easier! I was able to find
              the perfect apartment that fit my budget, thanks to their
              income-based recommendations. No more wasting time on homes I
              couldn’t afford. I felt like they really understood my needs!
            </h5>
            <div className="flex justify-between">
              <img src="" alt="" />
              <div className="flex flex-col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTestimonials;
