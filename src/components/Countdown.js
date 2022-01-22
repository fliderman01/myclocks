import React, { useState, useEffect } from 'react';
import '../style.css';
import './Countdown.css';

export default function Countdown() {
  const [showInp, setShowInp] = useState(true);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  // pause count
  const pause = () => {
    setIsActive(false);
    setIsPaused(true);
  };
  // start count
  const start = () => {
    setIsActive(true);
    setIsPaused(false);
    setShowInp(false);
  };
  // edit count values
  const edit = () => {
    setIsActive(false);
    setIsPaused(true);
    setShowInp(true);
  };

  useEffect(() => {
    if (isActive) {
      var interval = setInterval(() => {
        setSec(sec - 1);
        sec == 0 && setMin(min - 1);
        sec == 0 && setSec(59);
        min == 0 && setHour(hour - 1);
        min == 0 && setMin(59);
        if (hour < 0) {
          setHour(0);
          setMin(0);
          setSec(0);
          setIsActive(false);
          setIsPaused(true);
        }
      }, 1000);
      return () => clearInterval(interval);
    } else if (isPaused) {
      clearInterval(interval);
    }
  });
  return (
    <article className="CDown">
      {showInp ? (
        <div className="numInputs">
          <label>
            Hours
            <input
              onChange={(e) => setHour(e.target.value)}
              type="number"
              min="0"
              id="hours"
              value={hour}
            />
          </label>
          <label>
            Minutes
            <input
              onChange={(e) => setMin(e.target.value)}
              type="number"
              max="59"
              min="0"
              id="minutes"
              value={min}
            />
          </label>
          <label>
            Seconds
            <input
              onChange={(e) => setSec(e.target.value)}
              type="number"
              max="59"
              min="0"
              id="seconds"
              value={sec}
            />
          </label>
        </div>
      ) : (
        <div className="clock">
          <p>
            {hour < 10 ? '0' + hour : hour}:{min < 10 ? '0' + min : min}:
            {sec < 10 ? '0' + sec : sec}
          </p>
        </div>
      )}

      <div className="CDBtns">
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
        <button onClick={edit}>
          <img
            src="https://www.freeiconspng.com/uploads/edit-new-icon-22.png"
            width="44px"
          />
        </button>
      </div>
    </article>
  );
}
