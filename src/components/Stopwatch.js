import React from 'react';
import '../style.css';
import './Stopwatch.css';

export default function Stopwatch() {
  return (
    <>
      <article className="StWatch">
        <div className="clock">
          <p>00</p>
          <span>:</span>
          <p>00</p>
          <span>:</span>
          <p>00</p>
        </div>
        <label htmlFor="stopwatch">
          <input type="text" name="stopwatch" id="stopwatch" />
        </label>
        <div className="StWatchBtns">
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
