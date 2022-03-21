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
        <button className="mystery">
          <Link to={"/section/mystery"}>mystery</Link>
        </button>
        <button className="technology">
          <Link to={"/section/technology"}>technology</Link>
        </button>
        <button className="mythology">
          <Link to={"/section/mythology"}>mythology</Link>
        </button>
      </div>
    </>
  );
};
