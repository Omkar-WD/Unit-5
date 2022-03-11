import "./App.css";
import { useState, useEffect } from "react";
import Forms from "./components/Forms";
import EmployeesData from "./components/EmployeesData";

function App() {
  const [allData, setAllData] = useState([]);
  const handleAllEmployeeData = (arr) => {
    setAllData(arr);
    console.log("Parent", arr);
  };
  return (
    <div className="App">
      <Forms handleAllEmployeeData={handleAllEmployeeData} />
      <EmployeesData allData={allData} />
    </div>
  );
}

export default App;
