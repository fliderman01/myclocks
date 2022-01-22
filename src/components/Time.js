import React, { useState, useEffect } from 'react';
import '../style.css';
import './Time.css';

export default function Time() {
  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <article className="Time">
      <p className="clock">{time}</p>
    </article>
  );
}
