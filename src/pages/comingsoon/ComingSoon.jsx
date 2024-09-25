import React, { useState, useEffect } from "react";
import comingsoon from "../../assets/comingsoon.jpg";
import Logo from "../../components/Logo";

function ComingSoon() {
  const [months, setMonths] = useState(0);
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
      <div className=" absolute bg-black opacity-75 h-full w-full flex justify-center">
        <div className="relative z-20 text-white ">
          <Logo />
          <p className="shadow-lg">
            Something <span>Unique</span> is coming soon!!
          </p>
          <div className="text-white flex justify-evenly ">
            <div className="flex flex-col justify-center items-center">
              <h3>{days}</h3>
              <p>DAYS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3>{hours}</h3>
              <p>HOURS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3>{minutes}</h3>
              <p>MINUTES</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h3>{seconds}</h3>
              <p>SECS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
