import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoDetails from "./TodoDetails";
import Todo from "./Todo";
import NotFound from "./NotFound";
import Login from "./Login";

function AllRoutes() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Todo />}></Route>
      <Route exact path={"/todo-details/:id"} element={<TodoDetails />}></Route>
      <Route exact path={"/login"} element={<Login />}></Route>
      <Route path={"*"} element={<NotFound />}></Route>
    </Routes>
  );
}

export default AllRoutes;
