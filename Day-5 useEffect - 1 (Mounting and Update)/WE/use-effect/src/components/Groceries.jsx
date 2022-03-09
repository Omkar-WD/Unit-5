import { useState, useEffect } from "react";
import axios from "axios";
import GroceryList from "./GroceryList";

export function Groceries() {
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [groceries, setGroceries] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/groceries").then((res) => {
      setGroceries(res.data);
    });
  }, []);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    axios
      .get(`http://localhost:3001/groceries?_page=${page}&_limit=5`)
      .then((res) => {
        setGroceries(res.data);
      });
  };
  return (
    <>
      <br />
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          fetch(`http://localhost:3001/groceries`, {
            method: "POST",
            body: JSON.stringify({ title: text, purchase: false }),
            headers: {
              "content-type": "application/json",
            },
          });
        }}
      >
        ADD
      </button>
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
      {groceries.map((e) => (
        <GroceryList key={e.id} data={e} />
      ))}
    </>
  );
}
