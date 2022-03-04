import { useState } from "react";
export function Counter(props) {
  const [counter, setCounter] = useState(props.value);
  const handleChange = (val) => {
    if (val === 0) {
      setCounter(0);
    } else if (val === 2) {
      setCounter(counter * 2);
    } else {
      if (counter + val < 0) return;
      setCounter(counter + val);
    }
  };
  return (
    <div className="innerContainer">
      <div className="btnDiv">
        <button
          onClick={() => {
            handleChange(1);
          }}
        >
          Increment Counter By 1
        </button>
        <button
          onClick={() => {
            handleChange(2);
          }}
        >
          Double
        </button>
        <button
          onClick={() => {
            handleChange(0);
          }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            handleChange(-1);
          }}
        >
          Decrement Counter By 1
        </button>
      </div>
      <div className="counterContainer">
        <h1>Counter : {counter}</h1>
      </div>
    </div>
  );
}
