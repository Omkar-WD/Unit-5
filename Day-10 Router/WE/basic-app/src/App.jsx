import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";
import About from "./components/About";
import Redirect from "./components/Redirect";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hello />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/redirect" element={<Redirect />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
