import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [toggleButtonForForm, setToggleButtonForForm] = useState(false);
  return (
    <div className="App">
      <button
        className="toggleForm"
        onClick={() => setToggleButtonForForm(!toggleButtonForForm)}
      >
        {/* Show text Add House or Show Rentals based on state */}
        {toggleButtonForForm ? "Show Rentals" : "Add House"}
      </button>
      {/* Show component based on state */}
      <br />
      <br />
      {toggleButtonForForm ? <AddHouse /> : <Rentals />}
    </div>
  );
}

export default App;
