import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCard = ({ id, imageUrl, title, price }) => {
  return (
    <div className="bookCard">
      <Link to={`/bookdetailspage/${id}`}>
        <img src={imageUrl} alt="image" />
        <span>
          Title : <h2 className="title">{title}</h2>
        </span>
        <br />
        <span>
          Price : <p className="price">{price}</p>
        </span>
      </Link>
    </div>
  );
};
