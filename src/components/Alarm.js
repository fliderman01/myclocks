import React from 'react';
import '../style.css';
import './Alarm.css';

export default function Alarm() {
  return (
    <>
      <article className="Alarm">
        <div className="weekDays">
          <button>Mon</button>
          <button>Tu</button>
          <button>We</button>
          <button>Thu</button>
          <button>Fri</button>
          <button>Sat</button>
          <button>Sun</button>
        </div>
        <div className="clock">
          <p>00</p>
          <span>:</span>
          <p>00</p>
          <span>:</span>
          <p>00</p>
        </div>
        <label>
          <input type="text" id="alarm" />
        </label>
      </article>
    </>
  );
}
