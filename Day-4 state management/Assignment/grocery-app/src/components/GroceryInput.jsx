import React, { useState } from "react";

function GroceryInput({ handleAdd }) {
  const [itemName, setItemName] = useState("");
  return (
    <div className="grocery-input-container">
      <h1>Grocery Input</h1>
      <input
        type="text"
        placeholder="enter a item name"
        value={itemName}
        onChange={(e) => {
          setItemName(e.target.value);
        }}
      />{" "}
      <button
        className="addBtnStyle"
        onClick={() => {
          handleAdd(itemName);
          setItemName("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default GroceryInput;
