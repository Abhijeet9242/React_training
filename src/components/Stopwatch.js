import { useState } from "react";
import style from "../components/style.module.css";

let adjustInterval = undefined;
const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const[status,setStatus] = useState(false)

  const handleStart = () => {
    adjustInterval = setInterval(() => {
      setTimer((time) => time + 1);
    }, 1000);
    setStatus(true)
  };

  const handleStop = () => {
    clearInterval(adjustInterval);
    setStatus(false)
  };

  const handleReset = () => {
    setTimer(0)
    clearInterval(adjustInterval)
    setStatus(false)

  };

  return (
    <div className={style.div}>
      <h2 className={style.form}>Stopwatch</h2>

      <h2 style={{ textAlign: "center" }}>Timer:{timer}</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button disabled={status} onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
