import { useState, useRef } from "react";

function Refs() {
  const [counter, setCounter] = useState(0);
  const ref = useRef("Masai");

  console.log("initial", ref.current);

  return (
    <>
      <h1>Counter : {counter}</h1>
      <h1>Name : {ref.current}</h1>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Add
      </button>

      <button
        onClick={() => {
          ref.current = "Masai School";
          console.log("onclick", ref.current);
        }}
      >
        Change Name
      </button>
    </>
  );
}

export default Refs;
