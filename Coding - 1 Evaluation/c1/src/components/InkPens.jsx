import { useState } from "react";
export function InkPens(props) {
  let [inkpens, setInkPens] = useState(props.inkpens);
  const handleClick = (val) => {
    if (val == 1) setInkPens(inkpens + 1);
    else setInkPens(inkpens - 1);
  };
  return (
    <div className="items">
      <span>InkPens:</span>
      <button
        onClick={() => {
          handleClick(1);
        }}
        className="addInkpen"
      >
        +
      </button>
      <button
        onClick={() => {
          handleClick(-1);
        }}
        className="remInkpen"
      >
        -
      </button>
      <span className="totalInkpens">{inkpens}</span>
    </div>
  );
}
