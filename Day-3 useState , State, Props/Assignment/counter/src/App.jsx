import { Counter } from "./components/Counter";
import "./App.css";

function App() {
  const value = 0;
  return (
    <div className="container">
      <h1>My First React App : "COUNTER"</h1>
      <Counter value={value} />
    </div>
  );
}

export default App;
