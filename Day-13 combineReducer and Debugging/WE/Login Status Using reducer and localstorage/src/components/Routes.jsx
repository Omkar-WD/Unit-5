import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/login"} element={<Login />}></Route>
      <Route path={"/signup"} element={<SignUp />}></Route>
    </Routes>
  );
}

export default AllRoutes;
