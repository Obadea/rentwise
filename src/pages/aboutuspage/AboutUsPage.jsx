import React from "react";
import Header from "../../components/Header";

function AboutUsPage() {
  return (
    <div className="bg-textcolor">
      <Header newclassName="sticky" className="bg-textcolor" />
      <div className="h-[200px] px-24">
        <h3 className="font-bold text-white text-3xl">About Us</h3>
      </div>
      <div className="flex flex-col px-2 py-4 lg:px-24 lg:py-10 lg:flex-row gap-4 lg:gap-8">
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-2xl text-customStreetcolor">
            Welcome to RentWise, where renting meets wisdom.
          </h4>
          <p className="font-normal text-lg text-customStreetcolor">
            At RentWise, we believe that finding a home should be simple,
            transparent, and stress-free. Whether you're a first-time renter, a
            busy professional, or a growing family, our mission is to transform
            the way you search for and secure your next home in Lagos, Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
