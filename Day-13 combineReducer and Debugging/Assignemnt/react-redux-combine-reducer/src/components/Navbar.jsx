import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const isLoginState = useSelector((store) => store.isLogin.isLogin);
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      &emsp;
      <Link to={"/login"}>{isLoginState ? "Logout" : "Login"}</Link>
    </div>
  );
}

export default Navbar;
