import React, { useState } from "react";
import DatePickerCustom from "../../../components/DatePickerCustom";
import TimePickerCustom from "../../../components/TimePickerCustom";
import {
  Button,
  Form,
  Input,
  Link,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { scheduleInPerson, scheduleVideo } from "../../../utils/endpoint";
import { toast } from "react-toastify";
import { SvgUserIcon, SvgUserIcon2 } from "../../../utils/SvgIcons";
import { useAuth } from "../../../utils/AuthContext";

function ScheduleATour({ className, newClassName, propertyID }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTIme, setSelectedTime] = useState(null);
  const [action, setAction] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const [inPerson, setInPerson] = useState(true);

  const [isScheduleATour, setIsScheduleATour] = useState(true);

  const { user } = useAuth();

  // console.log(selectedDate);

  const mutation = useMutation({
    mutationFn: scheduleInPerson,
    onSuccess: async (data) => {
      setIsLoading(false);
      toast(data?.message, { type: "success", draggable: true });
      console.log(data);
      // navigate("/");
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

  const videoMutation = useMutation({
    mutationFn: scheduleVideo,
    onSuccess: async (data) => {
      setIsLoading(false);
      toast(data?.message, { type: "success", draggable: true });
      console.log(data);
      window.open(data?.calendlyLink, "_blank");

      // navigate("/");
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
    <div
      className={` lg:flex -top-1 bottom-0 z-10 bg-white py-5 rounded-lg pt-7 flex-col w-full gap-4  px-4 mb-6 ${className}`}
    >
      <div className="flex justify-between gap-2">
        {/* <h4 className="text-customSearchblue text-base font-bold text-center py-3 flex-1">
          Schedule a Tour
        </h4>
        <h4
          className={`${newClassName} text-[#333333] text-base font-bold text-center py-3 bg-textcolor flex-1`}
        >
          Request Info
        </h4> */}
        <Button
          radius="none"
          isDisabled={isScheduleATour}
          className={`w-full ${
            isScheduleATour
              ? "bg-textcolor text-blue-500"
              : "bg-white text-black"
          }`}
          onPress={() => setIsScheduleATour(true)}
        >
          Schedule a Tour
        </Button>
        <Button
          radius="none"
          className={`w-full ${
            !isScheduleATour
              ? "bg-textcolor text-blue-500"
              : "bg-white text-black"
          }`}
          onPress={() => setIsScheduleATour(false)}
          isDisabled={!isScheduleATour}
        >
          Request Info
        </Button>
      </div>
      {isScheduleATour ? (
        <Form
          className="w-full  flex flex-col gap-4"
          validationBehavior="native"
          onReset={() => setAction("reset")}
          onSubmit={(e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.currentTarget));
            setAction(`submit ${JSON.stringify(data)}`);
            setIsLoading(true);
            console.log(data);

            inPerson
              ? mutation.mutate({
                  propertyID: propertyID,
                  userData: {
                    userName: data.userName,
                    phone: data.phone,
                    email: data.email,
                    date: selectedDate,
                    time: data.time,
                    message: data.message,
                  },
                })
              : videoMutation.mutate({
                  propertyID: propertyID,
                  userData: data,
                });
          }}
        >
          {!inPerson ? (
            ""
          ) : (
            <div className="flex justify-evenly ml-1">
              <DatePickerCustom
                label="Select the date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
              />
              <TimePickerCustom
                label="Select time"
                value={selectedTIme}
                onChange={(newValue) => setSelectedTime(newValue)}
              />
            </div>
          )}
          <div className="px-2 w-full mx-auto">
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-base text-[#33333]">Tour type</h3>

              <div className="flex gap-2 ">
                <h4
                  className={`text-base font-bold py-3 cursor-pointer text-center border-2  rounded-md flex-1 ${
                    inPerson
                      ? "border-customSearchblue text-customSearchblue"
                      : "text-[#333333] border-customgray3"
                  }`}
                  onClick={() => setInPerson(true)}
                >
                  In Person
                </h4>
                <h4
                  className={`cursor-pointer text-base font-bold text-center  border-2 rounded-md py-3 flex-1 ${
                    !inPerson
                      ? "border-customSearchblue text-customSearchblue"
                      : "text-[#333333] border-customgray3"
                  }`}
                  onClick={() => setInPerson(false)}
                >
                  Video
                </h4>
              </div>

              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  name="userName"
                  id="name"
                  placeholder="Enter your Name"
                  className="pl-2 py-1 border-2 border-customBlackShade w-[100%]  text-lg rounded-md focus:outline-none focus:border-gray-500"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="pl-2 py-1 border-2 border-customBlackShade w-[100%]  text-lg rounded-md focus:outline-none focus:border-gray-500"
                />
                <input
                  type="number"
                  id="number"
                  name="phone"
                  placeholder="Enter your Number"
                  className="pl-2 py-1 border-2 border-customBlackShade w-[100%]  text-lg rounded-md focus:outline-none focus:border-gray-500"
                />
                <textarea
                  placeholder="Type your text here..."
                  rows="5"
                  name="message"
                  //   cols="30"
                  className="border-2 border-customgray3 w-full p-2"
                ></textarea>
                <h4 className="text-sm font-normal text-[#333333]">
                  By submitting this form I agree to{" "}
                  <span className="cursor-pointer text-customSearchblue">
                    Terms of Use
                  </span>
                </h4>
              </div>
              <div>
                <Button
                  type="submit"
                  className="bg-customSearchblue text-white w-full mt-6 p-3 rounded-lg"
                  isLoading={isLoading}
                >
                  Submit a Tour Request
                </Button>
              </div>
            </div>
          </div>
        </Form>
      ) : (
        <Form>
          <div>
            <div className="flex items-center gap-2">
              <SvgUserIcon2 />
              <p>{user?.email}</p>
            </div>
          </div>
          <Link>View Listings</Link>
          <Input
            variant="underlined"
            className="mt-2"
            label="Name"
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
            label="Phone"
            classNames={{ label: "font-medium text-customStreetcolor" }}
            type="number"
            isDisabled={isLoading}
            color="primary"
            name="phoneNumber"
          />
          <Input
            isRequired
            variant="underlined"
            label="Email"
            classNames={{ label: "font-medium text-customStreetcolor" }}
            type="email"
            color="primary"
            name="email"
            isDisabled={isLoading}
          />
          <Textarea
            isRequired
            isClearable
            name="review"
            minRows={5}
            label="Message"
            labelPlacement="outside"
            placeholder="Write a review..."
            isDisabled={isLoading}
            variant="underlined"
          />
          <Select
            isRequired
            name="select"
            variant="underlined"
            label="Message"
            classNames={{
              label: "font-medium text-[14px] text-customStreetcolor",
            }}
            color="primary"
            defaultSelectedKeys={["Open rentsaver account"]}
          >
            <SelectItem key="Open rentsaver account">
              Open rentsaver account
            </SelectItem>
            <SelectItem key="Know more about Rentwise">
              Know more about Rentwise
            </SelectItem>
          </Select>
          <p className="text-sm">
            By submitting this form I agree to <Link>Terms of Use</Link>
          </p>
          <Button color="primary" className="w-full mt-2">
            Submit a Tour Request
          </Button>
        </Form>
      )}
    </div>
  );
}

export default ScheduleATour;
