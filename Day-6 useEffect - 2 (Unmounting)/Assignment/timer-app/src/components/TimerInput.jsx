import { useState } from "react";

function TimerInput({ handleStart }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  return (
    <div>
      <input
        type="number"
        placeholder="enter start time"
        onChange={(e) => {
          setStart(Number(e.target.value));
        }}
      />
      <input
        type="number"
        placeholder="enter end time"
        onChange={(e) => {
          setEnd(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          handleStart(start, end);
        }}
      >
        Start Counter
      </button>
    </div>
  );
}

export default TimerInput;
