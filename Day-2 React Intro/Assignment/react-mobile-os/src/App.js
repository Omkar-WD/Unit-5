import "./App.css";
import MainComponent from "./mainComponent";

function App() {
  const data = [
    {
      heading: "Mobile Operating System",
      list: ["Android", "BlckBerry", "iPhone", "Windows Phone"],
    },
    {
      heading: "Mobile Manufacturers",
      list: ["Samsung", "HTC", "Micromax", "Apple"],
    },
  ];
  return (
    <div className="App">
      {data.map((element, index) => {
        return (
          <MainComponent
            key={index}
            heading={element.heading}
            list={element.list}
          />
        );
      })}
    </div>
  );
}

export default App;
