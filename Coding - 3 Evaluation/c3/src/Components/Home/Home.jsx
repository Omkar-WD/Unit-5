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
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
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
