import "./App.css";
import { useState } from "react";
import { Left } from "./components/Left";
import { Right } from "./components/Right";

function App() {
  const [counter, setCounter] = useState(0);

  const getData = (val) => {
    console.log("Data from child", val);
    setCounter(val);
  };
  return (
    <>
      <Left fn={getData} />
      <Right data={counter} />
      <Todo />
    </>
  );
}

function Todo() {
  const [todos, setTodods] = useState(["a", "b"]);
  const addTodo = (data) => {
    setTodods([...todos, data]);
  };
  return (
    <>
      <ToDoInput handleAdd={addTodo} />
      {todos.map((e) => (
        <TodoItem todo={e} />
      ))}
    </>
  );
}
function TodoItem({ todo }) {
  return <h1>{todo}</h1>;
}
function ToDoInput({ handleAdd }) {
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleAdd(text);
          }}
        >
          ADD
        </button>
      </div>
    </>
  );
}
export default App;
