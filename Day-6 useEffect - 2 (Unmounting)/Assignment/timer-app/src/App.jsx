import "./App.css";
import { useState, useRef } from "react";
import TimerInput from "./components/TimerInput";
import Timer from "./components/Timer";

function App() {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const ref = useRef(null);

  const handleStart = (start, end) => {
    setCounter(start);
    setStart(start);
    setEnd(end);
    if (ref.current === null) {
      ref.current = setInterval(() => {
        console.log("on");
        setCounter((prev) => {
          return prev + 1;
        });
      }, 1000);
    } else if (ref.current !== counter) {
      ref.current = setInterval(() => {
        setCounter((prev) => {
          return prev + 1;
        });
      }, 1000);
    } else return;
  };

  if (counter === end) {
    clearInterval(ref.current);
    console.log("off");
  }

  return (
    <div className="App">
      <>
        <Timer startTime={start} endTime={end} timer={counter} />
        <TimerInput handleStart={handleStart} />
      </>
    </div>
  );
}

export default App;
