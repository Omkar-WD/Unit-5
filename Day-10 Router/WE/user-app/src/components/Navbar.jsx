import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          gap: "10px",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">User</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
