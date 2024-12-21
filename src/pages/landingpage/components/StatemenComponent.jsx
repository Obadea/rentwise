import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopProperties.css";
// import Slidercard from "./Slidercard";
import bayo from "../../../assets/bayo.png";
import minstreln from "../../../assets/minstrel.png";
import chioma from "../../../assets/chioma.png";
import funke from "../../../assets/funke.png";
import StatemenCard from "./StatemenCard";

function StatemenComponent() {
  // Mobile view setup
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
    <div className=" flex flex-col justify-center pt-14 bg-customaccent100 pb-10">
      <div>
        <h2 className="text-center font-bold text-xl lg:text-3xl  ">
          Meet Our Wise-men
        </h2>
        <p className="text-center text-small lg:text-base font-thin text-customStreetcolor">
          Our expert agents are here to guide you in finding the perfect
          property with personalized, professional service.
        </p>

        {/* Slider for mobile view */}
        <div className="  lg:hidden ">
          <div>
            <div className="slider-container bg-customaccent100 px-10 mt-8 ">
              <Slider {...settings} className="">
                <StatemenCard
                  bayo={bayo}
                  name="Minstrel Nwachukwu"
                  level="Senior Property Consultant"
                  about="With over 6 years of experience in the real estate industry, Adebayo
          brings a wealth of knowledge and a passion for helping clients achieve
          their goals. Specializing in...."
                />
                <StatemenCard
                  bayo={chioma}
                  name="Chioma Okafor"
                  level="Senior Property Consultant"
                  about="Known for her approachable demeanor and meticulous attention to
                detail, Chioma has a proven track record of matching clients
                with their ideal homes. She believes in building...."
                />
                <StatemenCard
                  bayo={funke}
                  name="Funke Adeyemi"
                  level="Commercial Property Advisor"
                  about="Funke specializes in commercial real estate, helping businesses
                find the perfect location to thrive. With a strategic approach
                and a deep understanding of the commercial market,"
                />
                <StatemenCard
                  bayo={bayo}
                  name="Funke Adeyemi"
                  level="Commercial Property Advisor"
                  about="Funke specializes in commercial real estate, helping businesses
                find the perfect location to thrive. With a strategic approach
                and a deep understanding of the commercial market,"
                />
              </Slider>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-row justify-around px-24 gap-2 py-6  ">
          <StatemenCard
            bayo={minstreln}
            name="Minstrel Nwachukwu"
            level="Senior Property Consultant"
            about="With over 6 years of experience in the real estate industry, Adebayo
          brings a wealth of knowledge and a passion for helping clients achieve
          their goals. Specializing in...."
          />
          <StatemenCard
            bayo={chioma}
            name="Chioma Okafor"
            level="Senior Property Consultant"
            about="Known for her approachable demeanor and meticulous attention to
                detail, Chioma has a proven track record of matching clients
                with their ideal homes. She believes in building...."
          />
          <StatemenCard
            bayo={funke}
            name="Funke Adeyemi"
            level="Commercial Property Advisor"
            about="Funke specializes in commercial real estate, helping businesses
                find the perfect location to thrive. With a strategic approach
                and a deep understanding of the commercial market,"
          />
          <StatemenCard
            bayo={bayo}
            name="Funke Adeyemi"
            level="Commercial Property Advisor"
            about="Funke specializes in commercial real estate, helping businesses
                find the perfect location to thrive. With a strategic approach
                and a deep understanding of the commercial market,"
          />
        </div>
      </div>
    </div>
  );
}

export default StatemenComponent;
