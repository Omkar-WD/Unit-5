import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

function Button() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const [token, setToken] = useState("");
  const handleLogin = () => (isAuth ? loginRequest() : "");

  const loginRequest = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((res) => {
        setToken(res.data.token);
        // console.log(res.data);
      });
  };

  return (
    <button
      onClick={() => {
        handleLogin();
        toggleAuth(!isAuth, token);
      }}
    >
      {isAuth ? "logout" : "login"}
    </button>
  );
}

export default Button;
