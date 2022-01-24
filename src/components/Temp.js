import React, { useEffect, useState } from 'react';
import '../style.css';
import './Temp.css';

export default function Temp() {
  const [displ, setDispl] = useState('');
  const [cityN, setCityN] = useState(() => {
    const saved = localStorage.getItem('temp');
    return saved ? JSON.parse(saved) : `Tbilisi`;
  });

  useEffect(() => {
    localStorage.setItem('temp', JSON.stringify(cityN));
  }, [cityN]);
  // fetch data from openweathermap.org
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      cityN +
      ',&appid=822fc8446f5adc72ac8c766a871329a8'
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      setDispl(
        `${Math.round(res.main.temp - 273.15)}°C, ${res.name},${
          res.sys.country
        }; "${res.weather[0].description}"`
      );
    });
  // upload city name
  const uplCity = (e) => {
    e.charCode == 13 && setCityN(e.target.value);
  };
  return (
    <>
      <article className="Temp">
        <p>{displ}</p>
        <label>
          <input
            type="text"
            placeholder="Enter city name..."
            onKeyPress={uplCity}
          />
        </label>
      </article>
    </>
  );
}
