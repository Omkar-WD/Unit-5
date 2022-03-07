import { useState, useEffect } from "react";
import { Notebooks } from "./Notebooks";
export function Pens(props) {
  const notebooks = 44;
  let [pens, setPens] = useState(props.pens);
  let [total, setTotal] = useState(props.total + props.pens);
  console.log("pen props", props.total);
  console.log("pen total", total);
  const handleClick = (val) => {
    if (val == 1) {
      setPens(pens + 1);
      setTotal(total + 1);
    } else {
      setPens(pens - 1);
      setTotal(total - 1);
    }
  };
  useEffect(() => {
    setTotal(pens + props.total);
    console.log("pen useeffect", total);
  }, [pens + props.total]);
  return (
    <>
      <div className="items">
        <span>Pens:</span>
        <button
          onClick={() => {
            handleClick(1);
          }}
          className="addPen"
        >
          +
        </button>
        <button
          onClick={() => {
            handleClick(-1);
          }}
          className="remPen"
        >
          -
        </button>
        <span className="totalPens">{pens}</span>
      </div>
      <Notebooks total={total} notebooks={notebooks} />
    </>
  );
}
