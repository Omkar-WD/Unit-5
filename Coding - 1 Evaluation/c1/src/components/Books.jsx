import { useState } from "react";
import { Pens } from "./Pens";
export function Books(props) {
  const pens = 10;
  let [books, setBooks] = useState(props.books);
  let [total, setTotal] = useState(props.books);
  console.log("book total", total);
  const handleClick = (val) => {
    if (val == 1) {
      setBooks(books + 1);
      setTotal(total + 1);
    } else {
      setBooks(books - 1);
      setTotal(total - 1);
    }
  };
  return (
    <>
      <div className="items">
        <span>Books:</span>
        <button
          onClick={() => {
            handleClick(1);
          }}
          className="addBook"
        >
          +
        </button>
        <button
          onClick={() => {
            handleClick(-1);
          }}
          className="remBook"
        >
          -
        </button>
        <span className="totalBooks">{books}</span>
      </div>
      <Pens total={total} pens={pens} />
    </>
  );
}
