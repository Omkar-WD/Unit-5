import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Home() {
  let x = localStorage.getItem("isLogin") || "false";
  const [isLogin, setIsLogin] = useState(x == "true" ? true : false);
  console.log(isLogin, typeof isLogin);
  if (!isLogin) return <Navigate to={"/login"} />;
  return (
    <div>
      <h1>Home</h1>
      {isLogin ? (
        <div className="container-a">
          <h1>User is Login</h1>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
