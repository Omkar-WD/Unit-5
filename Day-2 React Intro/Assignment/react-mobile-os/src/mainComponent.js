function MainComponent({ heading, list }) {
  return (
    <div className="mainBox">
      <h1>{heading}</h1>
      <ul>
        {list.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default MainComponent;
