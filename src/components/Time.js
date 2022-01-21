import React from 'react';
import '../style.css';
import './Time.css';

export default function Time() {
  return (
    <>
      <article className="Time">
        <div className="clock">
          <p>00</p>
          <span>:</span>
          <p>00</p>
          <span>:</span>
          <p>00</p>
        </div>
        <label>
          <select name="time" id="time">
            <option value="Tbilisi">Tbilisi</option>
            <option value="London">London</option>
          </select>
        </label>
      </article>
    </>
  );
}
