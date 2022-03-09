function Child2({ dataFromChild1 }) {
  return (
    <>
      <h1>Child 2</h1>
      <h4>
        {dataFromChild1 === 0 ? null : `Data from Child 1 : ${dataFromChild1}`}
      </h4>
    </>
  );
}

export default Child2;
