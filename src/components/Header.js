import React from 'react';
import '../style.css';
import './Header.css';

export default function Header(props) {
  return (
    <>
      <>
        <button className="hov" onClick={() => props.displayTime()}>
          Time
        </button>
        <button className="hov" onClick={() => props.displayTemp()}>
          Temperature
        </button>
        <button className="hov" onClick={() => props.displayStWatch()}>
          Stopwatch
        </button>
        <button className="hov" onClick={() => props.displayCDown()}>
          Countdown
        </button>
      </>
    </>
  );
}
