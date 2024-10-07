import React from "react";
import contactPhoto from "../../../assets/contact-phto.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import ReusableSelect from "../../../components/ReuseableSelect";

const options = [
  { value: "one", label: "1" },
  { value: "two", label: "2" },
  { value: "three", label: "3" },
  { value: "four", label: "4" },
  { value: "five", label: "5" },
  { value: "six", label: "6" },
];
function ContactInfo() {
  return (
    <div className="px-4 py-6 lg:p-10 flex flex-col  gap-4 mt-16 ">
      <div className="flex justify-between py-10 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
        <h4 className=" font-medium text-lg text-customdark">Address</h4>
        <button className="font-medium text-xs bg-customSearchblue px-2 text-white flex justify-center items-center">
          View Listing
        </button>
      </div>
      <div className="flex gap-4">
        <div>
          <img src={contactPhoto} alt="" />
        </div>
        <div className="flex flex-col gap-1 text-sm font-normal text-customStreetcolor">
          <h3 className="flex  items-center">
            <PermIdentityIcon /> Ayomide Jamiu
          </h3>
          <div className="flex">
            <p className="flex  items-center">
              <PhoneIcon /> 08113828282
            </p>
            <p className="flex  items-center">
              <PhoneAndroidIcon />
              08113828282
            </p>
            <p className="flex  items-center">
              {" "}
              <WhatsAppIcon />
              Whatsapp
            </p>
          </div>
          <div className="flex gap-4">
            <FacebookIcon />
            <XIcon />
          </div>
        </div>
      </div>
      <form action="#">
        <div className="flex justify-between py-6 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-lg text-customdark">Address</h4>
        </div>
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone" placeholder="Enter your phone s" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Enter your email" />
          </div>
          <div>
            <ReusableSelect
              options={options}
              placeholder={"Property Type"}
              label={"LOOKING FOR"}
              onChange={(value) => console.log(value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactInfo;
