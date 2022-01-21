import React from 'react';
import '../style.css';
import './Temp.css';

export default function Temp() {
  return (
    <>
      <article className="Temp">
        <p>
          Tbilisi: 17 <sup>O</sup>; Clear Sky
        </p>
        <label>
          <select name="temp" id="temp">
            <option value="Tbilisi">Tbilisi</option>
            <option value="London">London</option>
          </select>
        </label>
      </article>
    </>
  );
}
