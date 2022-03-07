import { useState, useEffect } from "react";
import { InkPens } from "./InkPens";

export function Notebooks(props) {
  const inkpens = 78;
  let [notebooks, setNotebooks] = useState(props.notebooks);
  let [total, setTotal] = useState(props.total + props.notebooks);
  // console.log("notebook total", total);
  const handleClick = (val) => {
    if (val == 1) {
      setNotebooks(notebooks + 1);
      setTotal(total + 1);
    } else {
      setNotebooks(notebooks - 1);
      setTotal(total - 1);
    }
  };
  useEffect(() => {
    setTotal(notebooks + props.total);
    console.log("notebook useeffect", total);
  }, [notebooks + props.total]);
  return (
    <>
      <div className="items">
        <span>Notebooks:</span>
        <button
          onClick={() => {
            handleClick(1);
          }}
          className="addNotebook"
        >
          +
        </button>
        <button
          onClick={() => {
            handleClick(-1);
          }}
          className="remNotebook"
        >
          -
        </button>
        <span className="totalNotebooks">{notebooks}</span>
      </div>
      <InkPens total={total} inkpens={inkpens} />
    </>
  );
}
