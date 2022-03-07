import "./App.css";
import { Books } from "./components/Books";
import { InkPens } from "./components/InkPens";
import { Notebooks } from "./components/Notebooks";
import { Pens } from "./components/Pens";

function App() {
  const books = 13;
  const pens = 10;
  const notebooks = 44;
  const inkpens = 78;
  return (
    <div>
      <Books books={books} />
      <Pens pens={pens} />
      <Notebooks notebooks={notebooks} />
      <InkPens inkpens={inkpens} />
    </div>
  );
}

export default App;
