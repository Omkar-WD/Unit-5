import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Home from "./Home";
import NotFound from "./NotFound";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/todo" element={<Todo />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default AllRoutes;
