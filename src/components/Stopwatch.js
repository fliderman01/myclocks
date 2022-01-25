import React, { useState, useEffect } from 'react';
import '../style.css';
import './Stopwatch.css';

export default function Stopwatch() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const pause = () => {
    setIsActive(false);
    setIsPaused(true);
  };
  const start = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const resetT = () => {
    setSec(0);
    setMin(0);
    setHour(0);
    setIsPaused(true);
    setIsActive(false);
  };

  useEffect(() => {
    if (isActive) {
      var interval = setInterval(() => {
        setSec(sec + 1);
        sec == 59 && setMin(min + 1);
        sec == 59 && setSec(0);
        min == 59 && setHour(hour + 1);
        min == 59 && setMin(0);
      }, 1000);
      return () => clearInterval(interval);
    } else if (isPaused) {
      clearInterval(interval);
    }
  });

  return (
    <article className="StWatch">
      <div className="clock">
        <p>
          {hour < 10 ? '0' + hour : hour}:{min < 10 ? '0' + min : min}:
          {sec < 10 ? '0' + sec : sec}
        </p>
      </div>
      <div className="StWatchBtns">
        <button onClick={resetT}>
          <img
            src="https://www.freeiconspng.com/uploads/restart-icon-9.png"
            width="44px"
          />
        </button>
        <button onClick={start}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/start-1438842-1214529.png"
            width="44px"
          />
        </button>
        <button onClick={pause}>
          <img
            src="https://www.freeiconspng.com/uploads/pause-icon-13.png"
            width="44px"
          />
        </button>
      </div>
    </article>
  );
}
