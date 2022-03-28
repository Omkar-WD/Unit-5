import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";

function Todos() {
  const [text, setText] = useState("");
  const todos = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  return (
    <div>
      Todos
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          dispatch(addTodo(text));
        }}
      >
        ADD Todo
      </button>
      {todos.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
}

export default Todos;
