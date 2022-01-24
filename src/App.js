import React, { useState } from 'react';
import Countdown from './components/Countdown';
import Cover from './components/Cover';
import Header from './components/Header';
import Stopwatch from './components/Stopwatch';
import Time from './components/Time';
import Temp from './components/Temp';
import './style.css';

export default function App(props) {
  const [display, setDisplay] = useState('cover');
  // display Time
  const displayTime = () => {
    setDisplay('time');
  };
  // display Temp
  const displayTemp = () => {
    setDisplay('temp');
  };
  // display Stopwatch
  const displayStWatch = () => {
    setDisplay('stopwatch');
  };
  // display Countdown
  const displayCDown = () => {
    setDisplay('countdown');
  };

  const show = () => {
    if (display == 'cover') return <Cover />;
    else if (display == 'time') return <Time />;
    else if (display == 'temp') return <Temp />;
    else if (display == 'stopwatch') return <Stopwatch />;
    else if (display == 'countdown') return <Countdown />;
  };
  return (
    <div>
      <header>
        <Header
          displayTime={displayTime}
          displayTemp={displayTemp}
          displayStWatch={displayStWatch}
          displayCDown={displayCDown}
        />
      </header>
      <main>{show()}</main>
    </div>
  );
}
