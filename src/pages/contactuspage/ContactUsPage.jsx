import React from "react";
import Header from "../../components/Header";
import Breadcrumb from "../../components/BreadCrumb";

function ContactUsPage() {
  return (
    <div className="bg-textcolor">
      <Header newclassName="sticky" className="bg-textcolor" />
      <div className="h-[200px] bg-slate-700 flex items-end pb-12  lg:px-24">
        <h3 className="font-bold text-white text-3xl">About Us</h3>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between px-2 lg:px-20">
        <div className="flex flex-col lg:gap-10 lg:py-4 lg:px-8 bg-white ">
          <h4 className="font-normal text-lg text-customStreetcolor">
            Our support team is available around the clock to address any
            concerns or queries you may have.
          </h4>
          <form className="flex">
            <div className="flex flex-col lg:flex-row"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
