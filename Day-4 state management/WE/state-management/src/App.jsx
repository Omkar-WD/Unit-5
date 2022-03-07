import "./App.css";
import { useState } from "react";
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

function Left({ fn }) {
  const data = 40;
  fn(data);
  return (
    <>
      <h1>Left data {data}</h1>
    </>
  );
}

function Right({ data }) {
  return (
    <>
      <h1>Right data {data}</h1>
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
