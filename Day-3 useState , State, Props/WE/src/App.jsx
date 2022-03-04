import "./App.css";
import { Counter } from "./components/Counter";
function App() {
  let count = 0;
  return (
    <div className="container">
      <div>
        <Counter value={count} />
      </div>
    </div>
  );
}

export default App;
