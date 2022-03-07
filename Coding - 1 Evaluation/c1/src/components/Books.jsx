import { useState } from "react";

export function Books(props) {
  let [books, setBooks] = useState(props.books);
  const handleClick = (val) => {
    if (val == 1) setBooks(books + 1);
    else setBooks(books - 1);
  };
  return (
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
  );
}
