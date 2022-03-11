import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(10);
  const [showTimer, setShowTimer] = useState(true);
  let id;
  console.log("\n--------------- START -----------------\n");
  console.log("Rendering on and value is ", time);

  useEffect(() => {
    console.log("\nInside useEffect 1 , No Dependency");
    return () => {};
  });

  useEffect(() => {
    console.log("\nInside useEffect 2 , Empty Dependency");

    id = setInterval(() => {
      setTime((prev) => {
        console.log("inside setInterval and prev value is ", prev);
        console.log("next value is ", prev - 1);
        if (prev <= 1) {
          console.log("clear interval");
          clearInterval(id);
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      setTime(0);
    };
  }, []);

  useEffect(() => {
    console.log("\nInside useEffect 3 , ShowTimer Dependency");
    return () => {
      clearInterval(id);
    };
  }, [showTimer]);

  useEffect(() => {
    console.log("\nInside useEffect 4 , Time Dependency");
    return () => {};
  }, [time]);

  return (
    <div className="App">
      {showTimer ? <Timer time={time} handleTimerClick={setTime} /> : null}
      <br />
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}

function Timer({ time, handleTimerClick }) {
  return (
    <>
      <h1> Timer : {time}</h1>
      <button onClick={() => handleTimerClick(time + 1)}>ADD</button>
    </>
  );
}
export default App;
