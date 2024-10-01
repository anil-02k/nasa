import React, { useState, useEffect } from 'react';
import './AmazingUpdate.css'; // Link to your CSS for styling
import planetImage from '../../assets/planet.png'; // Replace with actual image path

const AmazingUpdate = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2025-01-01T00:00:00`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="amazing-update" id='update'>
      <div className="update-info">
        <h2>The Most Amazing Update Is Coming</h2>
        <span className="update-time">January 1, 2025 at 10 PM</span>
        <p>
          Direct repair of aneurysm, pseudoaneurysm, or excision (partial or total) and graft insertion.
        </p>
        <div className="countdown-timer">
          <div className="timer-element">
            <h3>{timeLeft.days || '0'}</h3>
            <p>Days</p>
          </div>
          <div className="timer-element">
            <h3>{timeLeft.hours || '0'}</h3>
            <p>Hours</p>
          </div>
          <div className="timer-element">
            <h3>{timeLeft.minutes || '0'}</h3>
            <p>Minutes</p>
          </div>
          <div className="timer-element">
            <h3>{timeLeft.seconds || '0'}</h3>
            <p>Seconds</p>
          </div>
        </div>
        <button className="join-btn">Join Our Community</button>
      </div>
      <div className="update-illustration">
        <img src={planetImage} alt="Planet Illustration" className="planet-img" />
      </div>
    </div>
  );
};

export default AmazingUpdate;
