import React from "react";
import { Link } from "react-router-dom";
import AllRoutes from "./Routes";

function Navbar() {
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        &emsp;
        <Link to={"/todo"}>Todo</Link>
        &emsp;
        <Link to={"/counter"}>Counter</Link>
      </div>
      <AllRoutes />
    </>
  );
}

export default Navbar;
