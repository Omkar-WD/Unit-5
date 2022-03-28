import React, { useState } from "react";

function Login() {
  let x = localStorage.getItem("isLogin") || "false";
  const [isLogin, setIsLogin] = useState(x == "false" ? false : true);
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          localStorage.setItem("isLogin", !isLogin);
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Login;
