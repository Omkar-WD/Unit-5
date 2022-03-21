export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      <button
        onClick={() => {
          handleSort(1);
        }}
        className="sortByTitleAsc"
      >
        sort title in Ascending order
      </button>
      <button
        onClick={() => {
          handleSort(2);
        }}
        className="sortByTitleDesc"
      >
        sort title in Descending order
      </button>
      <button
        onClick={() => {
          handleSort(3);
        }}
        className="sortByPriceAsc"
      >
        sort price asending order
      </button>
      <button
        onClick={() => {
          handleSort(4);
        }}
        className="sortByPriceDesc"
      >
        sort price descending order
      </button>
    </div>
  );
};
