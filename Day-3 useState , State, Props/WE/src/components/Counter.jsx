import { useState } from "react";

export function Counter(props) {
  const [counter, setCounter] = useState(props.value);

  const handleChange = (val) => {
    if (counter + val < 0) return;
    setCounter(counter + val);
  };
  return (
    <>
      <h3 style={{ color: props.color }}>Counter : {counter}</h3>
      <button onClick={() => handleChange(1)}>Add One</button>{" "}
      <button onClick={() => handleChange(-1)}>Remove One</button>
    </>
  );
}
