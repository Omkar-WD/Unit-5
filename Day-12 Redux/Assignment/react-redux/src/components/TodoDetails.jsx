import { useParams } from "react-router-dom";

function TodoDetails() {
  const { id } = useParams();
  return (
    <div className="todo-list-container">
      <h1>Todo Details</h1>
      <h4>Selected Todo is {id}</h4>
    </div>
  );
}

export default TodoDetails;
