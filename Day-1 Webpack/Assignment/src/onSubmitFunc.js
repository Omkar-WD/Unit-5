function onSubmitFunc(func) {
  let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
  let task = document.getElementById("todo-task").value;
  let note = document.getElementById("todo-note").value;
  let priority = document.getElementById("task-priority").value;
  let tasks = {
    task,
    note,
    priority,
  };
  taskList.push(tasks);
  localStorage.setItem("taskList", JSON.stringify(taskList));
  func(taskList);
  document.getElementById("todo-task").value = "";
  document.getElementById("todo-note").value = "";
  document.getElementById("task-priority").value = "Priority";
}

export { onSubmitFunc };
