import React from "react";
import Header from "../../components/Header";
import AboutTextContent from "./components/AboutTextContent";
import AboutPhotoCard from "./components/AboutPhotoCard";

function AboutUsPage() {
  return (
    <div className="bg-textcolor">
      <Header newclassName="sticky" className="bg-textcolor" />
      <div className="h-[200px] px-24">
        <h3 className="font-bold text-white text-3xl">About Us</h3>
      </div>
      <div className="flex flex-col px-2 py-4 lg:px-24 lg:py-10 lg:flex-row gap-4 lg:gap-8">
        <AboutTextContent
          header="Welcome to RentWise, where renting meets wisdom."
          paragraph="At RentWise, we believe that finding a home should be simple,
        transparent, and stress-free. Whether you're a first-time renter, a busy
        professional, or a growing family, our mission is to transform the way
        you search for and secure your next home in Lagos, Nigeria."
        />
        <AboutTextContent
          header="Who We Are"
          paragraph="RentWise was created with a clear vision: to eliminate the frustrations and uncertainties often associated with the rental process. Lagos is a vibrant and dynamic city, but finding a trustworthy landlord, a safe neighborhood, and a home that fits your budget can be a daunting task. We are here to change that."
        />
        <AboutTextContent paragraph="Our team of real estate experts, tech enthusiasts, and customer service professionals is committed to bringing you a smarter and more efficient rental experience. We combine cutting-edge technology with local expertise to empower renters to make the best decisions for themselves and their families." />
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <AboutPhotoCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
