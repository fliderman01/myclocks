import React from 'react';
import '../style.css';
import './Cover.css';

export default function Cover(props) {
  return (
    <article className="Cover">
      <h1>Choose between:</h1>
      <button className="btn hov" onClick={() => props.displayTime()}>
        Time
      </button>
      <button className="btn hov" onClick={() => props.displayTemp()}>
        Temperature
      </button>
      <button className="btn hov" onClick={() => props.displayStWatch()}>
        Stopwatch
      </button>
      <button className="btn hov" onClick={() => props.displayCDown()}>
        Countdown
      </button>
    </article>
  );
}
