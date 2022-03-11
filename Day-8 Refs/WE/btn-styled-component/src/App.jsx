import "./App.css";
import { useState } from "react";
import { Button } from "./components/Button";

// Import Button styled-components use it as a normal button

function App() {
  const [theme, setTheme] = useState("Dark");

  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className="App">
      {/* Simple Child Prop Example */}
      {/* start */}

      <Button
        theme={theme}
        onClick={() => {
          handleClick();
        }}
      >
        Child Prop Button1
      </Button>
      <Button theme={theme}>Child Prop Button2</Button>

      {/* end */}

      {/* Child Prop Example To Change the Theme */}
      {/* start */}

      <Button
        theme={theme}
        onClick={() => {
          console.log("click", theme);
          setTheme(theme == "Dark" ? "Light" : "Dark");
        }}
      >
        Change Theme
      </Button>
      {/* <Button> give here name it will send as childern prop </Button> */}

      {/* end */}
    </div>
  );
}

export default App;
