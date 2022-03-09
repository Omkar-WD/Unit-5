import "./App.css";
import StopWatch from "./components/StopWatch";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? <StopWatch /> : ""} {/* or */}
      {/*  {show ? <StopWatch /> : null} */}
      <button
        onClick={() => {
          setShow(!show);
          // or setShow(show? false : true);
        }}
      >
        {show ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}

export default App;
