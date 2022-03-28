import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Todo/action";
import axios from "axios";

function Todos() {
  const [text, setText] = useState("");
  const todos = useSelector((store) => store.todo.todo);

  useEffect(() => {
    getTodos();
  }, []);
  const dispatch = useDispatch();

  const getTodos = () => {
    axios.get("http://localhost:3001/todos").then(({ data }) => {
      dispatch(addTodo(data));
    });
  };

  const addTodos = () => {
    axios
      .post("http://localhost:3001/todos", { title: text, status: false })
      .then(() => {
        getTodos();
      });
  };

  // const completeTodo = (id, status) => {
  //   axios
  //     .patch(`http://localhost:3001/todos/${id}`, { status: !status })
  //     .then(() => {
  //       getTodos();
  //     });
  // };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`).then(() => {
      getTodos();
    });
  };
  return (
    <div>
      Todos
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          // dispatch(addTodo(text));
          addTodos();
        }}
      >
        ADD Todo
      </button>
      {todos.map((e, i) => (
        <div key={i}>
          {e.title}
          <button onClick={() => handleDelete(e.id)}>Delete Todo</button>
          {/* <button onClick={() => completeTodo(e.id, !e.id)}>
            Complete {e.status ? "No" : "Yes"}
          </button> */}
        </div>
      ))}
    </div>
  );
}

export default Todos;
