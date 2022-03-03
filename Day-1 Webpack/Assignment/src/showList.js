function showTasks(arr) {
  document.getElementById("todolist-table-body").innerHTML = "";
  let x = ``;
  arr.forEach((tasks, i) => {
    x += `<tr>
        <td>${i + 1}</td>
        <td>${tasks.task}</td>
        <td>${tasks.note}</td>
        <td>${tasks.priority}</td>
        <td class="deleteTask">Delete</td>
      </tr>`;
    document.getElementById("todolist-table-body").innerHTML = x;
    let deleteFunc = document.querySelectorAll(".deleteTask");
    for (let i = 0; i < deleteFunc.length; i++) {
      deleteFunc[i].addEventListener("click", function () {
        if (prompt("To Delete type YES") == "YES") {
          let taskList = JSON.parse(localStorage.getItem("taskList")) || [];
          taskList.splice(i, 1);
          localStorage.setItem("taskList", JSON.stringify(taskList));
          showTasks(taskList);
        }
      });
    }
  });
}

export { showTasks };
