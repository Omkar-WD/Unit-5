import "./App.css";
import { Button } from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className="App">
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        Child Prop Button1
      </Button>
      <Button>Child Prop Button2</Button>
      {/* <Button> give here name it will send as childern prop </Button> */}
    </div>
  );
}

export default App;
