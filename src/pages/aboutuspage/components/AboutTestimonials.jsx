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
        breakpoint: 750,
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
        breakpoint: 500,
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
        <div className="hidden lg:flex flex-row gap-4 justify-between ">
          <TestimonialCard
            text={
              "RentWise made my house-hunting so much easier! I was able to find the perfect apartment that fit my budget, thanks to their income-based recommendations. No more wasting time on homes I couldn’t afford. I felt like they really understood my needs!"
            }
            name="Chinedu A."
            location="Lekki, Lagos"
          />
          <TestimonialCard
            text="Before using RentWise, I was always nervous about renting in Lagos because of all the hidden details. The WiseReport changed everything! I knew all about the landlord and neighborhood before I even visited. I felt confident and informed, which made my decision stress-free"
            name="Sarah K."
            location="Victoria Island"
          />
          <TestimonialCard
            text="I have a busy schedule, and I was dreading the time-consuming process of visiting properties. RentWise’s virtual tours were a game-changer. I could explore homes from my couch, narrowing down my choices before visiting in person. It saved me so much time!"
            name="Emeka O."
            location="Yaba, Lagos"
          />
        </div>
        <div className=" pb-12  lg:hidden">
          <div>
            <div className="slider-container px-10 mt-8 ">
              <Slider {...settings} className="">
                <TestimonialCard
                  text={
                    "RentWise made my house-hunting so much easier! I was able to find the perfect apartment that fit my budget, thanks to their income-based recommendations. No more wasting time on homes I couldn’t afford. I felt like they really understood my needs!"
                  }
                  className="w-full"
                />
                <TestimonialCard
                  text="Before using RentWise, I was always nervous about renting in Lagos because of all the hidden details. The WiseReport changed everything! I knew all about the landlord and neighborhood before I even visited. I felt confident and informed, which made my decision stress-free"
                  className="w-full"
                />
                <TestimonialCard
                  text="I have a busy schedule, and I was dreading the time-consuming process of visiting properties. RentWise’s virtual tours were a game-changer. I could explore homes from my couch, narrowing down my choices before visiting in person. It saved me so much time!"
                  className="w-full"
                />
                <TestimonialCard
                  text="I have a busy schedule, and I was dreading the time-consuming process of visiting properties. RentWise’s virtual tours were a game-changer. I could explore homes from my couch, narrowing down my choices before visiting in person. It saved me so much time!"
                  className="w-full"
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTestimonials;
