import { useState } from "react";
function Child1({ value, sendDataToParent, sendDataToChild2 }) {
  const [intialValue, setInitialValue] = useState("");
  const [dataForChild2, setDataForChild2] = useState("");
  return (
    <>
      <h1>Child 1</h1>

      <h4>Value from Parent : {value}</h4>

      <input
        type="text"
        onChange={(e) => setInitialValue(e.target.value)}
        placeholder="enter a value"
        value={intialValue}
      />
      <button
        onClick={() => {
          sendDataToParent(intialValue);
          setInitialValue("");
        }}
      >
        Send To Parent
      </button>

      <br />
      <br />

      <input
        type="text"
        onChange={(e) => setDataForChild2(e.target.value)}
        placeholder="enter a value"
        value={dataForChild2}
      />
      <button
        onClick={() => {
          sendDataToChild2(dataForChild2);
          setDataForChild2("");
        }}
      >
        Send To Child2
      </button>
    </>
  );
}

export default Child1;
