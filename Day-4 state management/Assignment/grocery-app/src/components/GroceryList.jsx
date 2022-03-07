export function GroceryList({ handleList, handleDelete }) {
  return (
    <div className="grocery-list">
      {handleList.map((elem) => (
        <div className="grocery-list-item">
          {elem.name} &emsp;
          <button
            onClick={() => {
              handleDelete(elem);
            }}
            className="removeBtnStyle"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
