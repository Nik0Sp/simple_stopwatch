import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="stopwatch-container glass">
      <div className="timer glass">
        {formatTime(Math.floor(time / 1000 / 60))}:
        {formatTime(Math.floor((time / 1000) % 60))}.
        {formatTime(Math.floor((time % 1000) / 10))}
      </div>
      <div className="buttons ">
        <button className="glass" onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="glass" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
