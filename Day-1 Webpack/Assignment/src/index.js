import { todo } from "./todo";
import { showTasks } from "./showList";
import { onSubmitFunc } from "./onSubmitFunc";
import "./todo.css";
import logo from "./logo.png";

document.getElementById("root").innerHTML = todo();

document.getElementById("todo-logo").setAttribute("src", logo);

let taskList = JSON.parse(localStorage.getItem("taskList")) || [];

showTasks(taskList);

document.getElementById("todo-form").addEventListener("submit", (event) => {
  event.preventDefault();
  onSubmitFunc(showTasks);
});
