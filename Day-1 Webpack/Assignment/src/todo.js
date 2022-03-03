const todo = () => {
  return `
<div class="container">
    <div class="header">
        <img id="todo-logo" width="100px" alt="logo" />
        <h1>ToDo List</h1>
    </div>
    <div class="todo-form">
        <form id="todo-form">
            <input type="text" placeholder="enter task here" id="todo-task" required/>
            <input type="text" placeholder="enter note here" id="todo-note" required/>
            <select id="task-priority">
            <option>Priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            </select>
            <input type="submit" value="submit" />
        </form>
    </div>
    <div class="display-todo-list">
        <table>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Task</th>
              <th>Note</th>
              <th>Proirity</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="todolist-table-body">
          </tbody>
        </table>
    </div>
</div>`;
};

export { todo };
