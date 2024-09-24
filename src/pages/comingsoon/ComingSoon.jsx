import React, { useState } from "react";
import comingsoon from "../../assets/comingsoon.jpg";
import Logo from "../../components/Logo";

function ComingSoon() {
  // Function for time
  const [time, setTime] = useState(null);
  function calculateTimeLeft() {
    let futureDate = new Date(2025, 1, 1);

    futureDate = futureDate.getTime();

    const todayDate = new Date().getTime();
    const t = futureDate - todayDate;

    const months = Math.floor(t / (30 * 24 * 60 * 60 * 1000));
    const days = Math.floor(
      (t % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
    );
    const hours = Math.floor((t % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((t % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((t % (60 * 1000)) / 1000);

    const values = [months, days, hours, minutes, seconds];

    setTime(values);
    startCountdown();
  }

  function startCountdown() {
    setInterval(calculateTimeLeft, 1000);
  }

  calculateTimeLeft();

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${comingsoon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <Logo />
        <p>
          Something <span>Unique</span> is coming soon!!
        </p>
        <div>
          <div>
            <h3>{time[1]}</h3>
            <p>DAYS</p>
          </div>
          <div>
            <h3>{time[2]}</h3>
            <p>HOURS</p>
          </div>
          <div>
            <h3>{time[3]}</h3>
            <p>MINUTES</p>
          </div>
          <div>
            <h3>{time[4]}</h3>
            <p>SECS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
