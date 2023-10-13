import React, { useState, useEffect } from 'react';
import './index.css'

const Timer = ({ targetDate }) => {
    const calculateTimeRemaining = () => {
        const currentTime = new Date().getTime();
        const difference = targetDate - currentTime;
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        return { days, hours, minutes, seconds };
      };

  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);



  return (
    <div className="countdown-timer">
      <div className="countdown-item">
        <span className='text-timer-big wht'>{remainingTime.days}</span>
        <span className='text-timer-lit wht'>Days</span>
      </div>
      <div className="countdown-item">
        <span className='text-timer-big wht'>{remainingTime.hours}</span>
        <span className='text-timer-lit wht'>Hour</span>
      </div>
      <div className="countdown-item">
        <span className='text-timer-big wht'>{remainingTime.minutes}</span>
        <span className='text-timer-lit wht'>Min</span>
      </div>
      <div className="countdown-item">
        <span className='text-timer-big wht'>{remainingTime.seconds}</span>
        <span className='text-timer-lit wht'>Sec</span>
      </div>
    </div>
  );
};

export default Timer;