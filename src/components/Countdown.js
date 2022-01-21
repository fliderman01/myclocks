import React from 'react';
import '../style.css';
import './Countdown.css';

export default function Countdown() {
  return (
    <>
      <article className="CDown">
        <div className="clock">
          <p>00</p>
          <span>:</span>
          <p>00</p>
          <span>:</span>
          <p>00</p>
        </div>
        <label htmlFor="countdown">
          <input type="text" name="countdown" id="countdown" />
        </label>
        <div className="CDBtns">
          <button>
            <img
              src="https://www.freeiconspng.com/uploads/restart-icon-9.png"
              width="44px"
            />
          </button>
          <button>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/start-1438842-1214529.png"
              width="44px"
            />
          </button>
          <button>
            <img
              src="https://www.freeiconspng.com/uploads/pause-icon-13.png"
              width="44px"
            />
          </button>
        </div>
      </article>
    </>
  );
}
