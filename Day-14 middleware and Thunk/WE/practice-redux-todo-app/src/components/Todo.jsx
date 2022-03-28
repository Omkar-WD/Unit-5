import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getTodo } from "../Redux/Todo/action";
import axios from "axios";

function Todo() {
  const [todo, setTodo] = useState("");
  const todos = useSelector((store) => store.todo.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios.get("http://localhost:8080/todos").then(({ data }) => {
      dispatch(getTodo(data));
    });
  };

  const addTodo = () => {
    axios
      .post("http://localhost:8080/todos", { title: todo, status: false })
      .then(({ data }) => {
        getTodos();
        setTodo("");
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/todos/${id}`).then(() => {
      getTodos();
    });
  };

  const handleComplete = (id, status) => {
    axios
      .patch(`http://localhost:8080/todos/${id}`, { status: !status })
      .then(() => {
        getTodos();
      });
  };

  return (
    <>
      <h1>TODO APP</h1>
      <input
        type="text"
        value={todo}
        placeholder="enter a task"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <button onClick={() => handleComplete(todo.id, todo.status)}>
            {todo.status ? "Complete" : "Incomplete"}
          </button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default Todo;
