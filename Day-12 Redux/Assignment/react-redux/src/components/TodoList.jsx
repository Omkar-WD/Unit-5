import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addTodo } from "../Redux/Todo/action";

function TodoList({ todo }) {
  const dispatch = useDispatch();

  const getTodos = () => {
    axios.get("http://localhost:8080/todos").then(({ data }) => {
      dispatch(addTodo(data));
    });
  };

  const handleTodoStaus = (id, curr_status) => {
    axios
      .patch(`http://localhost:8080/todos/${id}`, { status: !curr_status })
      .then(() => {
        getTodos();
      });
  };
  const handleTodoDelete = (id) => {
    axios.delete(`http://localhost:8080/todos/${id}`).then(() => {
      getTodos();
    });
  };

  return (
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>
        <Link to={`/todo-details/${todo.id}`}>More Info</Link>
      </td>
      <td>
        <button
          onClick={() => {
            handleTodoStaus(todo.id, todo.status);
          }}
        >
          {todo.status ? "Complete" : "Incomplete"}
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            handleTodoDelete(todo.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoList;
