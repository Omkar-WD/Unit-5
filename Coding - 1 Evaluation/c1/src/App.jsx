import "./App.css";
import { Books } from "./components/Books";

function App() {
  const books = 13;
  return (
    <div className="container">
      <Books books={books} />
    </div>
  );
}

export default App;
