import React, { useState } from "react";
import DatePickerCustom from "../../../components/DatePickerCustom";
import TimePickerCustom from "../../../components/TimePickerCustom";
import { Button, Form } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { scheduleInPerson, scheduleVideo } from "../../../utils/endpoint";
import { toast } from "react-toastify";

function ScheduleATour({ className, newClassName, propertyID }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTIme, setSelectedTime] = useState(null);
  const [action, setAction] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const [inPerson, setInPerson] = useState(true);

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
      <div className="flex ">
        <h4 className="text-customSearchblue text-base font-bold text-center py-3 flex-1">
          Schedule a Tour
        </h4>
        <h4
          className={`${newClassName} text-[#333333] text-base font-bold text-center py-3 bg-textcolor flex-1`}
        >
          Request Info
        </h4>
      </div>
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
    </div>
  );
}

export default ScheduleATour;
