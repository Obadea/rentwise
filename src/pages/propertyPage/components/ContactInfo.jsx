import React from "react";
import contactPhoto from "../../../assets/contact-phto.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import MUISelect from "../../../components/MUISelect";
import {
  Avatar,
  Button,
  Form,
  Input,
  Link,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { SvgSortIcon } from "../../../utils/SvgIcons";
import { useMutation } from "@tanstack/react-query";
import { enquiryPropertyForm } from "../../../utils/endpoint";
import { toast } from "react-toastify";

function ContactInfo({ id, propertyData, forShortlet }) {
  const [action, setAction] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const options = [
    { key: "tenant", label: "Tenant" },
    { key: "agent", label: "Agent" },
    { key: "buyer", label: "Buyer" },
    { key: "other", label: "Other" },
  ];

  const mutation = useMutation({
    mutationFn: enquiryPropertyForm,
    onSuccess: async (data) => {
      setIsLoading(false);
      toast(data?.message, { type: "success", draggable: true });
    },

    onError: async (err) => {
      setIsLoading(false);
      toast(err?.response?.data.error.message, {
        type: "error",
        draggable: true,
      });
      console.log(err);
    },
  });

  return (
    <div
      id={id}
      className="px-4 py-6 lg:p-10 flex flex-col bg-white gap-4 mt-16 "
    >
      <div className="flex justify-between pt-10 pb-6 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
        <h4 className=" font-medium text-lg text-customdark">
          Contact Information
        </h4>
        <button className="font-medium text-xs bg-customSearchblue px-2 text-white flex justify-center items-center">
          View Listing
        </button>
      </div>
      <div className="flex gap-4">
        <div>
          {/* <img src={contactPhoto} alt="" /> */}
          <Avatar
            src={propertyData?.property?.property?.wiseman?.photo}
            size="lg"
            className="w-20 h-20 text-large"
            radius="sm"
          />
        </div>
        <div className="flex flex-col gap-1 text-sm font-normal text-customStreetcolor">
          <h3 className="flex  gap-2 items-center">
            <PermIdentityIcon />{" "}
            {propertyData?.property?.property?.wiseman?.fullName
              ? propertyData?.property?.property?.wiseman?.fullName
              : forShortlet
              ? propertyData?.shortlet?.wiseman
              : "Loading..."}
          </h3>
          <div className="flex gap-4 flex-wrap">
            <p className="flex gap-1  items-center">
              <PhoneIcon />{" "}
              {propertyData?.property?.property?.wiseman?.phoneNumber
                ? propertyData?.property?.property?.wiseman?.phoneNumber
                : "Loading..."}
            </p>
            <p className="flex gap-1 items-center">
              <PhoneAndroidIcon />
              {propertyData?.property?.property?.wiseman?.phoneNumber
                ? propertyData?.property?.property?.wiseman?.phoneNumber
                : "Loading..."}
            </p>
            <p className="flex gap-1 items-center">
              {" "}
              <WhatsAppIcon />
              <Link
                className="text-customStreetcolor"
                href={propertyData?.property?.property?.wiseman?.whatsApp}
                isExternal
                showAnchorIcon
              >
                Whatsapp
              </Link>
            </p>
          </div>
          <div className="flex  items-center gap-4">
            <Link
              href={propertyData?.property?.property?.wiseman?.facebook}
              isExternal
            >
              <FacebookIcon style={{ fontSize: "30px" }} />
            </Link>

            <Link
              className="text-black"
              href={propertyData?.property?.property?.wiseman?.twitter}
              isExternal
            >
              <XIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* Enquire component */}
      <div>
        <div className="flex justify-between py-6 pb-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
          <h4 className=" font-medium text-lg text-customdark">
            Enquire About This Property
          </h4>
        </div>

        <Form
          className="w-full  flex flex-col gap-4"
          validationBehavior="native"
          onReset={() => setAction("reset")}
          autoComplete="on"
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));
            setAction(`submit ${JSON.stringify(data)}`);
            setIsLoading(true);
            mutation.mutate({
              formData: data,
              propertyID: propertyData?.property?.property?.id,
            });
          }}
        >
          <div className="flex items-center justify-between w-full gap-11 mt-6 flex-col lg:flex-row">
            <Input
              isRequired
              variant="bordered"
              errorMessage="Please enter your name"
              label="Name"
              labelPlacement="outside"
              name="name"
              placeholder="Enter your name"
              type="text"
              isDisabled={isLoading}
            />
            <Input
              isRequired
              variant="bordered"
              errorMessage="Please enter your phone number"
              label="Phone"
              labelPlacement="outside"
              name="phoneNumber"
              placeholder="Enter your phone number"
              type="number"
              isDisabled={isLoading}
            />
          </div>
          <div className="flex items-center justify-between mt-2 w-full gap-11  flex-col lg:flex-row">
            <Input
              isRequired
              variant="bordered"
              errorMessage="Please enter a valid email"
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
              isDisabled={isLoading}
            />

            <Select
              name="iAm"
              variant="bordered"
              label="I'm a"
              labelPlacement="outside"
              isRequired
              selectorIcon={<SvgSortIcon />}
              placeholder="Select"
              isLoading={isLoading}
              isDisabled={isLoading}
            >
              {options.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}
            </Select>
          </div>
          <Textarea
            name="message"
            variant="bordered"
            className="mt-2"
            minRows={5}
            labelPlacement="outside"
            label="Message"
            placeholder="Enter your message..."
            isDisabled={isLoading}
            isRequired
            isClearable
          />
          <p>
            By submitting this form I agree to{" "}
            <Link className="cursor-pointer"> Terms of Use</Link>
          </p>
          <div className="flex gap-6 w-full  flex-col lg:flex-row">
            <Button
              color="primary"
              type="submit"
              className="w-full"
              isLoading={isLoading}
            >
              Request Information
            </Button>
            <Button
              variant="bordered"
              color="primary"
              type="reset"
              className="w-full"
            >
              Reset
            </Button>
          </div>
        </Form>
      </div>
      {/* <form action="#" className="flex flex-col gap-8">
          <div className="flex justify-between py-6 pb-3 border-b-2 border-[#D9D9D9] flex-1 min-w-[45%]">
            <h4 className=" font-medium text-lg text-customdark">
              Enquire About This Property
            </h4>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex flex-col flex-1 gap-2 ">
              <label
                htmlFor="name"
                className="font-bold text-base text-customNameBlack"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="pl-2 py-1 border-2 border-customBlackShade text-lg rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label
                htmlFor="phone"
                className="font-bold text-base text-customNameBlack"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                placeholder="Enter your phone"
                className="pl-2 py-1 border-2 border-customBlackShade w-[100%]  text-lg rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6">
            <div className="flex flex-col flex-1 gap-2 ">
              <label
                htmlFor="email"
                className="font-bold text-base text-customNameBlack"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="pl-2 py-1 border-2 border-customBlackShade  text-lg rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="flex-1">
              <MUISelect options={options} />
            </div>
          </div>
          <div>
            <div className="flex flex-col ">
              <label htmlFor="" className="font-bold text-base text-[#222222]">
                Message
              </label>
              <textarea
                placeholder="Type your text here..."
                rows="5"
                cols="30"
                className="border-2 border-customgray3 p-2"
              >
                Hello, I am interested in..
              </textarea>
            </div>
          </div>
          <div>
            <h4>
              By submitting this form I agree to{" "}
              <button className="text-customSearchblue">Terms of Use</button>
            </h4>
          </div>
          <div>
            <button className="text-white bg-customSearchblue px-4 py-3 rounded-lg">
              Request Information
            </button>
          </div>
        </form> */}
    </div>
  );
}

export default ContactInfo;
