import { useState } from "react";
export function Pens(props) {
  let [pens, setPens] = useState(props.pens);
  return (
    <div className="items">
      <span>Pens:</span>
      <button className="addPen">+</button>
      <button className="remPen">-</button>
      <span className="totalPens">{pens}</span>
    </div>
  );
}
