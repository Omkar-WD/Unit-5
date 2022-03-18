import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";
import About from "./components/About";
import Footer from "./components/Footer";
import Users from "./components/Users";
import ProductDetails from "./components/ProductDetails";
import UsersDetal from "./components/UsersDetal";
import RegisterUser from "./components/RegisterUser";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hello />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:userId" element={<UsersDetal />}></Route>
        <Route path="/register" element={<RegisterUser />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
