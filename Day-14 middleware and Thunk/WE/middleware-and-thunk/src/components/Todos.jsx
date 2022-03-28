import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodo,
  getTodoLoading,
  getTodoError,
  getTodoData,
} from "../Redux/Todo/action";
import axios from "axios";

function Todos() {
  const [text, setText] = useState("");

  const todos = useSelector((store) => store.todo.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getTodoData());
    // dispatch(getTodoLoading());
    // axios
    //   .get("http://localhost:3001/todos")
    //   .then(({ data }) => {
    //     dispatch(getTodo(data));
    //   })
    //   .catch((err) => {
    //     dispatch(getTodoError(err));
    //   });
  };

  const addTodos = () => {
    axios
      .post("http://localhost:3001/todos", { title: text, status: false })
      .then(() => {
        getData();
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`).then(() => {
      getData();
    });
  };
  return (
    <div>
      Todos
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          addTodos();
        }}
      >
        ADD Todo
      </button>
      {todos.map((e, i) => (
        <div key={i}>
          {e.title}
          <button onClick={() => handleDelete(e.id)}>Delete Todo</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
