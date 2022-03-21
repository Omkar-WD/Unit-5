import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  const [allBooks, setAllBooks] = useState([]);

  const { name } = useParams();

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

  useEffect(() => {
    axios.get("http://localhost:8080/books").then((res) => {
      let data = res.data;
      data = data.filter((e) => {
        if (e.section == name) return e;
      });
      setAllBooks(data);
    });
  }, [name]);

  const Main = styled.div`
    /* Apply some responsive styling to children */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
    gap: 30px;
    padding: 40px;
  `;
  return (
    <>
      <h2 style={{ textAlign: "center" }}>{name}</h2>

      <SortAndFilterButtons handleSort={handleSort} />

      <Main className="sectionContainer">
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
    </>
  );
};
