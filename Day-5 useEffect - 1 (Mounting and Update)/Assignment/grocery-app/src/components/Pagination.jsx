function Pagination({ handlePagination, currentPage, lastPage }) {
  return (
    <>
      {currentPage > 1 ? (
        <button
          className="paginationBtnStyle"
          onClick={() => {
            handlePagination(currentPage - 1);
          }}
        >
          Prev
        </button>
      ) : null}
      {currentPage < lastPage ? (
        <button
          className="paginationBtnStyle"
          onClick={() => {
            handlePagination(currentPage + 1);
          }}
        >
          Next
        </button>
      ) : null}
    </>
  );
}

export default Pagination;
