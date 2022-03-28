import "./App.css";
import Todos from "./components/Todos";

// Advantage of Redux over contextAPI

// performance
// single source of truth :- everything in one place
// immutability of store :- cant change the values or store , we can chnage entire store while updatig

function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
