import "./App.css";
import Button from "./components/Button";
import { nanoid } from "nanoid";

function App() {
  const buttonsArr = [
    {
      title: "Primary",
      border: "none",
      color: "white",
      outline: "none",
      backgroundColor: "#2490fe",
      hoverBackgroundColor: "#0176ee",
      hoverColor: "white",
    },
    {
      title: "Default",
      color: "black",
      outline: "solid",
      backgroundColor: "transparent",
      hoverBackgroundColor: "transparent",
      hoverColor: "black",
    },
    {
      title: "Dashed",
      border: "Dashed",
      color: "black",
      outline: "dashed",
      backgroundColor: "transparent",
      hoverBackgroundColor: "transparent",
      hoverColor: "black",
    },
    {
      title: "Text",
      border: "none",
      color: "black",
      outline: "none",
      backgroundColor: "transparent",
      hoverBackgroundColor: "transparent",
      hoverColor: "black",
    },
    {
      title: "Link",
      border: "none",
      color: "#2490fe",
      outline: "none",
      backgroundColor: "transparent",
      hoverBackgroundColor: "transparent",
      hoverColor: "#0176ee",
    },
  ];
  return (
    <div className="App">
      {buttonsArr.map((btn, ind) => (
        <Button key={nanoid()} info={btn}>
          {btn.title} Button
        </Button>
      ))}
    </div>
  );
}

export default App;
