import "./App.css";
import Parent from "./components/Parent";
// here we gonna study about relationships for data transfer in React

// 1.Parent To Child
// 2.Child To Parent
// 3.Sibling To Sibling

function App() {
  return (
    <div className="container">
      <Parent />
    </div>
  );
}

export default App;
