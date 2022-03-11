import { useState, useEffect, useRef } from "react";

function Refs() {
  const [counter, setCounter] = useState(0);
  // const ref = useRef("Masai");
  const ref = useRef(null);

  console.log("initial", ref.current);

  useEffect(() => {
    handleStart();
  }, []);

  const handleStart = () => {
    if (ref.current === null) {
      ref.current = setInterval(() => {
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

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add
      </button>
      {/* <button
        onClick={() => {
          ref.current = "Masai School , changed";
          console.log("onclick", ref.current);
        }}
      >
        Change Name
      </button> */}
      <button onClick={handleStart}>Start Counter</button>
      <button
        onClick={() => {
          clearInterval(ref.current);
          console.log("stop counter", ref.current);
        }}
      >
        Stop Counter
      </button>
      <button
        onClick={() => {
          clearInterval(ref.current);
          setCounter(0);
          ref.current = null;
          console.log("Reset counter", ref.current);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Refs;
