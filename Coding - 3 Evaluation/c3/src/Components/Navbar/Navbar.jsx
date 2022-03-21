import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <button className="home">
          <Link to={"/"}>home</Link>
        </button>
        <button className="history">
          <Link to={"/section/history"}>history</Link>
        </button>
        <button className="Mystery">
          <Link to={"/section/Mystery"}>Mystery</Link>
        </button>
        <button className="Technology">
          <Link to={"/section/Technology"}>Technology</Link>
        </button>
        <button className="Mythology">
          <Link to={"/section/Mythology"}>Mythology</Link>
        </button>
      </div>
    </>
  );
};
