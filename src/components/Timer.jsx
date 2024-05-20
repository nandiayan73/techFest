import React, { useState, useEffect } from "react";
import "./Timer.css";
import { useMediaQuery } from "@chakra-ui/react";

const Timer = ({ selectedDateTime }) => {
  const [countdown, setCountdown] = useState(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDateTime = Date.now();
      const difference = selectedDateTime - currentDateTime;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown("Date must be after today");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedDateTime]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="timer-container" >
      <div className="countdown-container">
        <div className="countdown countdown-days">
          <div className="card">
            <div data-days className="display days" >
              {countdown && formatTime(countdown.days)}
            </div>
            <div className="front-display"></div>
            <div className="back-display"></div>
          </div>
          <div className="display-heading">Days</div>
        </div>
        <div className="countdown countdown-hours">
          <div className="card">
            <div data-hours className="display hours">
              {countdown && formatTime(countdown.hours)}
            </div>
            <div className="front-display"></div>
            <div className="back-display"></div>
          </div>
          <div className="display-heading">Hours</div>
        </div>
        <div className="countdown countdown-minutes">
          <div className="card">
            <div data-minutes className="display minutes">
              {countdown && formatTime(countdown.minutes)}
            </div>
            <div className="front-display"></div>
            <div className="back-display"></div>
          </div>
          <div className="display-heading">Minutes</div>
        </div>
        <div className="countdown countdown-seconds">
          <div className="card">
            <div data-seconds className="display seconds">
              {countdown && formatTime(countdown.seconds)}
            </div>
            <div className="front-display"></div>
            <div className="back-display"></div>
          </div>
          <div className="display-heading">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
