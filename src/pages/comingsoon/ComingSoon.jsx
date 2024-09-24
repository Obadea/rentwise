import React from "react";
import commingsoon from "../../assets/comingsoon.jpg";
import Logo from "../../components/Logo";

function ComingSoon() {
  // Function for time
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
      </div>
    </div>
  );
}

export default ComingSoon;
