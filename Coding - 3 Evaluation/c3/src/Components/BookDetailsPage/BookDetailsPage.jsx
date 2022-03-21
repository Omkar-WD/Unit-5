import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const BookDetailsPage = () => {
  const { id } = useParams();

  const [book, setBook] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/books/${id}`).then((res) => {
      setBook(res.data);
    });
  }, []);

  return (
    <>
      <div className="bookContainer">
        <img className="image" src={book.imageUrl} alt="#" />
        <table>
          <tbody>
            <tr>
              <td>Title</td>
              <td>
                <h2 className="title">{book.title}</h2>
              </td>
            </tr>
            <tr>
              <td>Author</td>
              <td>
                <div className="author">{book.author}</div>
              </td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                <div className="description">{book.description}</div>
              </td>
            </tr>
            <tr>
              <td>Price</td>
              <td>
                <div className="price">{book.price}</div>
              </td>
            </tr>
            <tr>
              <td>Section</td>
              <td>
                <div className="section">{book.section}</div>
              </td>
            </tr>
            <tr>
              <td>ISBN </td>
              <td>
                <div className="isbnNumber">{book.isbnNumber}</div>
              </td>
            </tr>
            <tr>
              <td>Reviews </td>
              <td>
                <ul className="reviews">
                  {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
                  <li>{book.reviews}</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
