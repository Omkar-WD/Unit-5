import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import axios from "axios";

export const Home = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      setAllBooks(res.data);
    });
  }, []);

  const Main = styled.div`
    /* Apply some responsive styling to children */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    gap: 30px;
    padding: 40px;
  `;

  const handleSort = (val) => {
    let demo;
    if (val == 1) {
      demo = allBooks.sort((a, b) => {
        if (a.title > b.title) return 1;
        return -1;
      });
    } else if (val == 2) {
      demo = allBooks.sort((a, b) => {
        if (a.title < b.title) return 1;
        return -1;
      });
    } else if (val == 3) {
      demo = allBooks.sort((a, b) => {
        if (a.price > b.price) return 1;
        return -1;
      });
    } else {
      demo = allBooks.sort((a, b) => {
        if (a.price < b.price) return 1;
        return -1;
      });
    }
    setAllBooks([...demo]);
  };

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>

      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="mainContainer">
        {allBooks.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            imageUrl={book.imageUrl}
            title={book.title}
            price={book.price}
          />
        ))}
      </Main>
    </div>
  );
};
