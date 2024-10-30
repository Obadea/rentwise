import React from "react";
import Header from "../../components/Header";

function ContactUsPage() {
  return (
    <div className="bg-textcolor">
      <Header newclassName="sticky" className="bg-textcolor" />
      <div className="h-[200px] bg-slate-700 flex items-end pb-12  lg:px-24">
        <h3 className="font-bold text-white text-3xl">About Us</h3>
      </div>
    </div>
  );
}

export default ContactUsPage;
