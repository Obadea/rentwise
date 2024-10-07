import React from "react";
import contactPhoto from "../../../assets/contact-phto.png";

function ContactInfo() {
  return (
    <div className="px-4 py-6 lg:p-10 flex flex-col  gap-4 mt-16 ">
      <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
        <h4 className=" font-medium text-lg text-customdark">Address</h4>
        <button className="font-medium text-xs bg-customSearchblue px-2 text-white flex justify-center items-center">
          View Listing
        </button>
      </div>
      <div className="flex">
        <div>
          <img src={contactPhoto} alt="" />
        </div>
        <div>
          <h3>Ayomide Jamiu</h3>
          <div>
            <p>08113828282</p>
            <p>08113828282</p>
            <p>Whatsapp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
