import { useState } from "react";
export function Notebooks(props) {
  let [notebooks, setNotebooks] = useState(props.notebooks);
  return (
    <div className="items">
      <span>Notebooks:</span>
      <button className="addNotebook">+</button>
      <button className="remNotebook">-</button>
      <span className="totalNotebooks">{notebooks}</span>
    </div>
  );
}
