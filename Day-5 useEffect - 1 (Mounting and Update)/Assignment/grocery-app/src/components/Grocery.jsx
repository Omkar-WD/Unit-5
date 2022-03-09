import GroceryInput from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import axios from "axios";

function Grocery() {
  const [groceryList, setGroceryList] = useState([]);
  const [paginationPage, setPaginationPage] = useState(1);
  const [lastPaginationPage, setlastPaginationPage] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:3001/groceries?_limit=3&_page=1")
      .then((res) => {
        setGroceryList(res.data);
        setlastPaginationPage(res.headers["x-total-count"]);
      });
  }, []);

  useEffect(() => {
    pagination();
  }, [paginationPage]);

  const addItem = (val) => {
    if (val !== "") {
      let obj = { title: val, purchase: false };
      fetch(`http://localhost:3001/groceries`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "content-type": "application/json",
        },
      });
      alert("Item Added!!!");
    } else {
      alert("add a item name!!!");
    }
  };

  const removeItem = (val) => {
    axios({
      method: "DELETE",
      url: "http://localhost:3001/groceries/" + val.id,
    });
  };

  const pagination = () => {
    axios
      .get(`http://localhost:3001/groceries?_page=${paginationPage}&_limit=3`)
      .then((res) => {
        setlastPaginationPage(res.headers["x-total-count"]);
        setGroceryList(res.data);
      });
  };

  return (
    <div className="grocery-container">
      <h1>Grocery List Management Tool</h1>
      <GroceryInput handleAdd={addItem} />
      <GroceryList handleList={groceryList} handleDelete={removeItem} />
      <Pagination
        handlePagination={setPaginationPage}
        currentPage={paginationPage}
        lastPage={Math.ceil(lastPaginationPage / 3)}
      />
    </div>
  );
}

export default Grocery;
