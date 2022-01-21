import React from 'react';
import '../style.css';
import './Cover.css';

export default function Cover() {
  return (
    <>
      <article className="Cover">
        <h1>Choose between:</h1>
        <button cpassName="btn">Time</button>
        <button cpassName="btn">Temperature</button>
        <button cpassName="btn">Stopwatch</button>
        <button cpassName="btn">Countdown</button>
        <button cpassName="btn">Alarm</button>
      </article>
    </>
  );
}
