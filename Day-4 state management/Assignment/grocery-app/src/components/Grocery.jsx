import GroceryInput from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Grocery() {
  let [groceryList, setGroceryList] = useState(
    JSON.parse(localStorage.getItem("groceryList")) || []
  );
  const addItem = (val) => {
    if (val !== "") {
      let obj = {
        name: val,
        id: uuidv4(),
      };
      setGroceryList([...groceryList, obj]);
      localStorage.setItem(
        "groceryList",
        JSON.stringify([...groceryList, obj])
      );
    } else {
      alert("add a item name!!!");
    }
  };

  const removeItem = (val) => {
    groceryList = groceryList.filter(function (e) {
      if (val.id !== e.id) return e;
    });
    setGroceryList([...groceryList]);
    localStorage.setItem("groceryList", JSON.stringify([...groceryList]));
  };

  return (
    <div className="grocery-container">
      <h1>Grocery List Management Tool</h1>
      <GroceryInput handleAdd={addItem} />
      <GroceryList handleList={groceryList} handleDelete={removeItem} />
    </div>
  );
}

export default Grocery;
