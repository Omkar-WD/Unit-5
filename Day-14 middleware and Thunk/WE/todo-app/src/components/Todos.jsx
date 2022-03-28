import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoData } from "../Redux/Todo/action";
import axios from "axios";

function Todos() {
  const [text, setText] = useState("");

  const { todo, loading } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getTodoData());
  };

  useEffect(() => {
    getData();
  }, []);

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
    <>
      {loading ? (
        "loading....."
      ) : (
        <>
          <h1>Todos</h1>
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button
            onClick={() => {
              addTodos();
            }}
          >
            ADD Todo
          </button>
          {todo.map((e, i) => (
            <div key={i}>
              {e.title}
              <button onClick={() => handleDelete(e.id)}>Delete Todo</button>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Todos;
