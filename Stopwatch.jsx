import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  function handleRunnning() {
    setRunning((prev) => !prev);
  }
  function handleReset() {
    setRunning(false);
    setTimer(0);
  }
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 10);

    return () => clearInterval(interval);
  }, [running]);
  const ms = timer % 1000;
  const sec = (timer % 60000) / 1000;
  const min = timer / 60000;

  return (
    <div>
      <h1>Stopwatch App</h1>
      <div className="stopwatch">
        <div id="min">{String(min).padStart(2, "0")}:</div>
        <div id="sec">{String(sec).padStart(2, "0")}:</div>
        <div id="ms">{String(ms).padStart(3, "0")}</div>
        <button className="btn" onClick={handleRunnning}>
          {running ? "Stop" : "Start"}
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
