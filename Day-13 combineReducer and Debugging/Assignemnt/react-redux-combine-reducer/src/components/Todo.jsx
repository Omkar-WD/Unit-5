import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addTodo } from "../Redux/Todo/action";
import TodoList from "./TodoList";
import { Navigate } from "react-router-dom";

function Todo() {
  const [text, setText] = useState("");

  const isLoginState = useSelector((store) => store.isLogin.isLogin);
  const todos = useSelector((store) => store.todo.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios.get("http://localhost:8080/todos").then(({ data }) => {
      dispatch(addTodo(data));
    });
  };

  const addTodos = () => {
    axios
      .post("http://localhost:8080/todos", { title: text, status: false })
      .then(() => {
        getTodos();
      });
  };

  const handleAdd = () => {
    addTodos();
  };

  if (!isLoginState) return <Navigate to={"/login"} />;
  return (
    <>
      <div className="todo-input-container">
        <h1>Todo</h1>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={() => handleAdd()}>Add Todo</button>
      </div>
      <div className="todo-list-container">
        <h1>Todo List</h1>
        <table>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Todo</th>
              <th>More Info</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoList key={todo.id} todo={todo} />
              // <tr key={todo.id}>
              //   <td>{todo.id}</td>
              //   <td>{todo.title}</td>
              //   <td>
              //     <Link to={`/todo-details/${todo.id}`}>More Info</Link>
              //   </td>
              //   <td>
              //     <button
              //       onClick={() => {
              //         handleTodoStaus(todo.id, todo.status);
              //       }}
              //     >
              //       {todo.status ? "Complete" : "Incomplete"}
              //     </button>
              //   </td>
              //   <td>
              //     <button
              //       onClick={() => {
              //         handleTodoDelete(todo.id);
              //       }}
              //     >
              //       Delete
              //     </button>
              //   </td>
              // </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Todo;
