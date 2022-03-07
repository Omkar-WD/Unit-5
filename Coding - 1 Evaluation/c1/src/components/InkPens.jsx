import { useState, useEffect } from "react";
export function InkPens(props) {
  let [inkpens, setInkPens] = useState(props.inkpens);
  let [total, setTotal] = useState(props.total + props.inkpens);
  // console.log("inkpen total", total);
  const handleClick = (val) => {
    if (val == 1) {
      setInkPens(inkpens + 1);
      setTotal(total + 1);
    } else {
      setInkPens(inkpens - 1);
      setTotal(total - 1);
    }
  };
  useEffect(() => {
    setTotal(inkpens + props.total);
    console.log("inkpens useeffect", total);
  }, [inkpens + props.total]);
  return (
    <>
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
      <div className="total">{total}</div>
    </>
  );
}
