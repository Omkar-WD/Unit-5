import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../Redux/Auth/action";
// email: "eve.holt@reqres.in",
// password: "cityslicka",

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const isLoginState = useSelector((store) => store.isLogin.isLogin);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { id, value } = e.target;
    setLoginData({ ...loginData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        email: loginData.email,
        password: loginData.password,
      })
      .then((res) => {
        localStorage.setItem("isLogin", "true");
        dispatch(isLogin(true));
        console.log("Responce", res.data);
      });
  };
  return (
    <>
      {isLoginState ? <h1>Logout</h1> : <h1>Login</h1>}
      {!isLoginState ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            id="email"
            onChange={(e) => handleInput(e)}
            placeholder="enter a username or email"
          />
          <br />
          <br />
          <input
            type="password"
            onChange={(e) => handleInput(e)}
            id="password"
            placeholder="enter a password"
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      ) : (
        <button
          onClick={() => {
            dispatch(isLogin(false));
            localStorage.setItem("isLogin", "false");
            console.log("click");
          }}
        >
          Logout
        </button>
      )}
    </>
  );
}

export default Login;
