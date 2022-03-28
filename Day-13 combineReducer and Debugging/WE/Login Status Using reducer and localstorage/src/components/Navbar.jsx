import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      &emsp;
      <Link to={"/login"}>Login</Link>
      &emsp;
      <Link to={"/signup"}>SignUp</Link>
    </div>
  );
}

export default Navbar;
