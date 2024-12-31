import React from "react";
import Header from "../../components/Header";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { Button, Form, Input, Textarea } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer";
import { useMutation } from "@tanstack/react-query";
import { openRentSaver } from "../../utils/endpoint";
import { toast } from "react-toastify";
import SuccessPage from "./SuccessPage";

const OpenSaverPage = () => {
  const [action, setAction] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: openRentSaver,
    onSuccess: async (data) => {
      setIsLoading(false);
      toast("Sent Successful", { type: "success", draggable: true });
      // navigate("/");
      setIsSuccess(true);
      console.log(data);
    },

    onError: async (err) => {
      setIsLoading(false);
      toast(err?.response?.data.message, {
        type: "error",
        draggable: true,
      });
      console.log(err);
    },
  });

  return (
    <div className="bg-customPry/30 ">
      <Header />

      <div className="max-w-[62rem] mx-auto mt-8 pb-10">
        <Breadcrumb />
        <div className="text-center mt-10">
          <p className="text-4xl font-bold text-customStreetcolor">
            Get In Touch
          </p>
          <p className="lg:text-lg text-sm text-customStreetcolor font-medium w-[80%] mx-auto mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni
            voluptatibus officia maxime eius ipsa quia harum maiores esse ex,
            alias dolorem iste ipsum mollitia!
          </p>
        </div>
        <div className="p-3 rounded-2xl bg-white grid lg:grid-cols-[0.48fr_1fr] mt-10 max-w-[62rem] mx-auto grid-rows-1">
          <div className="rounded-2xl w-full bg-customSearchblue p-6 text-white">
            <p className="font-semibold text-2xl">Contact Information</p>
            <p className="text-sm text-blue-200 leading-6 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              quasi repellendus soluta incidunt{" "}
            </p>
            <div className="flex flex-col gap-9 mt-6">
              <div className="flex gap-4 items-center">
                <LocalPhoneRoundedIcon />
                <p>+234-805-555-3655</p>
              </div>
              <div className="flex gap-4 items-center">
                <EmailRoundedIcon />
                <p>contactwiseman@rentwise.rentals</p>
              </div>
              <div className="flex gap-4 items-center">
                <LocationOnRoundedIcon />
                <p>
                  3 Clatus Adebu Close, Fidiso Estate, Lekki-Epe road, Lagos,
                  Nigeria
                </p>
              </div>
            </div>
          </div>
          {isSuccess ? (
            <SuccessPage setIsSuccess={setIsSuccess} />
          ) : (
            <div className="lg:p-10 pb-4 pt-4 lg:pt-10 p-0">
              <Form
                className="w-full  flex flex-col gap-4"
                validationBehavior="native"
                onReset={() => setAction("reset")}
                onSubmit={(e) => {
                  e.preventDefault();
                  let data = Object.fromEntries(new FormData(e.currentTarget));
                  setAction(`submit ${JSON.stringify(data)}`);
                  setIsLoading(true);
                  mutation.mutate(data);
                  // console.log(data);
                }}
              >
                <div className="w-full flex gap-6 flex-col lg:flex-row">
                  <Input
                    variant="underlined"
                    label="Your Name"
                    classNames={{ label: "font-medium text-customStreetcolor" }}
                    type="text"
                    color="primary"
                    name="fullName"
                    isRequired
                    isDisabled={isLoading}
                  />
                  <Input
                    isRequired
                    variant="underlined"
                    label="Your Email"
                    classNames={{ label: "font-medium text-customStreetcolor" }}
                    type="email"
                    color="primary"
                    name="email"
                    isDisabled={isLoading}
                  />
                </div>
                <Input
                  isRequired
                  variant="underlined"
                  label="Your Subject"
                  classNames={{ label: "font-medium text-customStreetcolor" }}
                  type="text"
                  color="primary"
                  name="subject"
                  isDisabled={isLoading}
                />
                <Textarea
                  isRequired
                  color="primary"
                  isClearable
                  classNames={{
                    label: "font-medium text-lg text-customStreetcolor",
                  }}
                  label="Message"
                  placeholder="Write here your message"
                  variant="underlined"
                  name="message"
                  isDisabled={isLoading}
                  // eslint-disable-next-line no-console
                />
                <Input
                  isRequired
                  variant="underlined"
                  label="Your Phone Number"
                  classNames={{ label: "font-medium text-customStreetcolor" }}
                  type="number"
                  isDisabled={isLoading}
                  color="primary"
                  name="phoneNumber"
                />
                <div className="flex gap-4 w-full">
                  <Button
                    color="primary"
                    className="mt-4 w-full lg:w-fit"
                    radius="sm"
                    type="submit"
                    isLoading={isLoading}
                  >
                    Send Message
                  </Button>
                  <Button
                    color="primary"
                    variant="bordered"
                    className="mt-4 w-full lg:w-fit"
                    radius="sm"
                    type="reset"
                  >
                    Reset
                  </Button>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OpenSaverPage;
