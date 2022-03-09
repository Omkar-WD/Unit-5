export function GroceryList({ handleList, handleDelete }) {
  return (
    <div className="grocery-list">
      {handleList.map((elem) => (
        <div key={elem.id} className="grocery-list-item">
          {elem.title} &emsp;
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
