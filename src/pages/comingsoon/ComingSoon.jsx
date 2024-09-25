import React, { useState, useEffect } from "react";
import comingsoon from "../../assets/comingsoon.jpg";
import Logo from "../../components/Logo";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

function ComingSoon() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  function calculateTimeLeft() {
    const futureDate = new Date("Dec 1, 2024 00:00:00").getTime();
    const todayDate = new Date().getTime();
    const t = futureDate - todayDate;

    if (t < 0) {
      //   setMonths(0);
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      //   setMonths(Math.floor(t / (30 * 24 * 60 * 60 * 1000)));
      setDays(Math.floor(t / (24 * 60 * 60 * 1000)));
      setHours(Math.floor((t % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)));
      setMinutes(Math.floor((t % (60 * 60 * 1000)) / (60 * 1000)));
      setSeconds(Math.floor((t % (60 * 1000)) / 1000));
    }
  }

  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${comingsoon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" absolute bg-black opacity-75 h-full w-full flex flex-col justify-between  items-center py-12">
        <div className="relative z-20 text-white flex flex-col justify-center  gap-12 py-16">
          <div className="flex justify-center text-3xl ">
            <h3 className="text-5xl lg:text-8xl text-[#2E3C6B]  font-extrabold ">
              rent<span className="text-customyellow">w</span>ise
              <span className="text-customyellow">.</span>
            </h3>
          </div>

          <p className="shadow-lg text-xl lg:text-4xl  text-center">
            Something <span className=" text-customyellow">Unique</span> is
            coming soon!!
          </p>
          <div className="text-white flex justify-evenly ">
            <div className="flex flex-col justify-center items-center ">
              <h3 className="font-normal text-3xl lg:text-6xl ">{days}</h3>
              <div className="border-b-2 border-customgray2 w-16 lg:w-24 my-2"></div>
              <p className="font-normal text-sm lg:text-lg text-customgray2 ">
                DAYS
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-normal text-3xl lg:text-6xl ">{hours}</h3>
              <div className="border-b-2 border-customgray2 w-16 lg:w-24 my-2"></div>
              <p className="font-normal text-sm lg:text-lg text-customgray2 ">
                HOURS
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-normal text-3xl lg:text-6xl ">{minutes}</h3>
              <div className="border-b-2 border-customgray2 w-16 lg:w-24 my-2"></div>
              <p className="font-normal text-sm lg:text-lg text-customgray2 ">
                MINUTES
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3 className="font-normal text-3xl lg:text-6xl ">{seconds}</h3>
              <div className="border-b-2 border-customgray2 w-16 lg:w-24 my-2"></div>
              <p className="font-normal text-sm lg:text-lg text-customgray2 ">
                SECS
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-around gap-8 text-white">
          <div className="border-2 border-customgray2 rounded-md p-1">
            <XIcon />
          </div>
          <div className="border-2 border-customgray2 rounded-md p-1">
            <LinkedInIcon />
          </div>
          <div className="border-2 border-customgray2 rounded-md p-1">
            <InstagramIcon />
          </div>
          <div className="border-2 border-customgray2 rounded-md p-1">
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
