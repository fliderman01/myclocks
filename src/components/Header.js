import React from 'react';
import '../style.css';
import './Header.css';

export default function Header(props) {
  return (
    <>
      <>
        <button onClick={() => props.displayTime()}>Time</button>
        <button onClick={() => props.displayTemp()}>Temperature</button>
        <button onClick={() => props.displayStWatch()}>Stopwatch</button>
        <button onClick={() => props.displayCDown()}>Countdown</button>
      </>
    </>
  );
}
