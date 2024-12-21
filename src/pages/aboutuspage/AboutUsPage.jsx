import React from "react";
import Header from "../../components/Header";
import AboutTextContent from "./components/AboutTextContent";
import AboutPhotoCard from "./components/AboutPhotoCard";
import AboutServicePhotoCard from "./components/AboutServicePhotoCard";
import AboutBlogPost from "./components/AboutBlogPost";
import AboutTestimonials from "./components/AboutTestimonials";
import Footer from "../../components/Footer";
import imageInbackground from "../../assets/interior-workspace_inspired_by_technology.jpg";

import minstrel from "../../assets/minstrel_lg.jpeg";
import longCard1 from "../../assets/max-room.jpg";
import card2 from "../../assets/palor5.jpg";
import card3 from "../../assets/palor7.jpg";
import card4 from "../../assets/palor6.jpg";

function AboutUsPage() {
  return (
    <div className="bg-textcolor">
      <Header newclassName="sticky" className="bg-textcolor" />
      <div
        className={` px-4 bg-cover bg-center h-[240px] flex items-end pb-12 lg:px-24`}
        style={{
          backgroundImage: `url(${imageInbackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "240px",
        }}
      >
        <h3 className="font-bold text-white text-3xl">About Us</h3>
      </div>
      <div className="flex flex-col px-2 py-4 lg:px-24 lg:py-10 lg:flex-row flex-wrap gap-10 lg:gap-8 mt-10 bg-white">
        <AboutTextContent
          header="Welcome to RentWise, where renting meets wisdom."
          paragraph="At RentWise, we believe that finding a home should be simple,
        transparent, and stress-free. Whether you're a first-time renter, a busy
        professional, or a growing family, our mission is to transform the way
        you search for and secure your next home in Lagos, Nigeria."
        />
        <AboutTextContent
          className="hidden lg:flex"
          paragraph="Our team of real estate experts, tech enthusiasts, and customer service professionals is committed to bringing you a smarter and more efficient rental experience. We combine cutting-edge technology with local expertise to empower renters to make the best decisions for themselves and their families."
        />

        <AboutTextContent
          header="Who We Are"
          paragraph="RentWise was created with a clear vision: to eliminate the frustrations and uncertainties often associated with the rental process. Lagos is a vibrant and dynamic city, but finding a trustworthy landlord, a safe neighborhood, and a home that fits your budget can be a daunting task. We are here to change that."
          paragraph1="Our team of real estate experts, tech enthusiasts, and customer service professionals is committed to bringing you a smarter and more efficient rental experience. We combine cutting-edge technology with local expertise to empower renters to make the best decisions for themselves and their families."
        />
        <AboutTextContent
          header="Our Vision"
          paragraph="We envision a world where finding a home is as simple as making a few clicks. A world where every renter feels empowered to make informed choices and where every rental transaction is built on transparency and trust. With RentWise, that vision is becoming a reality, one rental at a time."
        />
      </div>

      <div className="px-24 py-12">
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-2">
            <h3 className="font-normal text-3xl text-[#000000] ">
              Meet our Team
            </h3>
            <p className="font-normal text-base text-customStreetcolor">
              Discover the passionate individuals behind our success.
            </p>
          </div>
          <div className="flex  justify-evenly flex-wrap gap-4 lg:gap-6 md:flex-row  lg:flex-nowrap">
            <AboutPhotoCard teamImg={minstrel} teamName="Minstrel Nwachukwu" />
            <AboutPhotoCard teamImg={minstrel} />
            <AboutPhotoCard teamImg={minstrel} />
            <AboutPhotoCard teamImg={minstrel} />
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="px-4 lg:px-24 py-12">
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col gap-2">
            <h3 className="font-normal text-3xl text-[#000000] ">Services</h3>
            <p className="font-normal text-base text-customStreetcolor">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>
          </div>
          <div className="flex flex-col lg:flex-row  gap-5">
            {/* small squares */}
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-5 lg:flex-1 ">
              <AboutServicePhotoCard
                className="  w-full h-[40vw] lg:min-w-[45%] lg:h-[260px] rounded-lg"
                paragraph="Rentwise Report"
              />
              <AboutServicePhotoCard
                className="  w-full h-[40vw] lg:min-w-[45%] lg:h-[260px] rounded-lg"
                paragraph="3D Virtual Tour"
                img={card2}
              />
              <AboutServicePhotoCard
                className=" w-full h-[50vw] lg:min-w-[45%] lg:h-[260px] rounded-lg"
                paragraph="Rent Saver"
                img={card3}
              />
              <AboutServicePhotoCard
                className=" w-full h-[50vw] lg:min-w-[45%] lg:h-[260px] rounded-lg"
                paragraph="Quick Services"
                img={card4}
              />
            </div>
            {/* big rectangless */}
            <div className="flex flex-col lg:flex-row lg:justify-between  gap-5 flex-1">
              <AboutServicePhotoCard
                className=" w-full h-[80vw] lg:max-w-full  lg:w-full lg:h-[540px]"
                paragraph="Rent Calculator"
                img={longCard1}
              />
              <AboutServicePhotoCard
                className=" w-full h-[80vw] lg:max-w-full  lg:w-full lg:h-[540px]"
                paragraph="Recover Asset Value"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog */}
      <AboutBlogPost />

      {/* Testimonials */}
      <AboutTestimonials />
      <Footer />
    </div>
  );
}

export default AboutUsPage;
