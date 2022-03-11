import "./App.css";
import Refs from "./components/Refs";
import { useState } from "react";
import { ChildrenProp } from "./components/ChildrenProp";

function App() {
  const [theme, setTheme] = useState("Dark");
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="App">
      <Refs />
      <ChildrenProp
        onClick={() => {
          handleClick();
        }}
      >
        Child Prop Button1
      </ChildrenProp>
      <ChildrenProp>Child Prop Button2</ChildrenProp>
      <ChildrenProp
        theme={setTheme}
        onClick={() => {
          setTheme(theme == "Dark" ? "Light" : "Dark");
        }}
      >
        Change Theme
      </ChildrenProp>
      {/* <ChildrenProp> give here name it will send as childern prop </ChildrenProp> */}
    </div>
  );
}

export default App;
