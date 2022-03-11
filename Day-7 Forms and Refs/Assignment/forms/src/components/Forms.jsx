import { useState, useEffect } from "react";
import axios from "axios";

function Forms({ handleAllEmployeeData }) {
  const [isMarried, setIsMarried] = useState(false);
  const [employeeFormData, setEmployeeFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "Select Department",
    salary: "",
    maritalStatus: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees", employeeFormData)
      .then((res) => {
        let data = res.data;
        handleAllEmployeeData(data);
      });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id == "maritalStatus") {
      setIsMarried(!isMarried);
    }
    setEmployeeFormData({ ...employeeFormData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/employees", employeeFormData)
      .then((res) => {
        console.log(res.data);
        alert("Responce Submited!!!");
      });
    setEmployeeFormData({
      name: "",
      age: "",
      address: "",
      department: "Select Department",
      salary: "",
      maritalStatus: "",
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1>Employee Details</h1>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                value={employeeFormData.name}
                id="name"
                placeholder="enter a name"
              />
            </td>
          </tr>
          <tr>
            <td>Age</td>
            <td>
              <input
                onChange={handleChange}
                type="number"
                value={employeeFormData.age}
                id="age"
                placeholder="enter a age"
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <input
                onChange={handleChange}
                type="text"
                value={employeeFormData.address}
                id="address"
                placeholder="enter a address"
              />
            </td>
          </tr>
          <tr>
            <td>Department</td>
            <td>
              <select
                value={employeeFormData.department}
                id="department"
                onChange={handleChange}
              >
                <option>Select Department</option>
                <option value="Mechanical">Mechanical</option>
                <option value="IT">IT</option>
                <option value="Computer">Computer</option>
                <option value="Electronics">Electronics</option>
                <option value="Civil">Civil</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Salary</td>
            <td>
              <input
                onChange={handleChange}
                type="number"
                value={employeeFormData.salary}
                id="salary"
                placeholder="enter a salary"
              />
            </td>
          </tr>
          <tr>
            <td>
              {console.log("Ankit Kumar ", isMarried)}
              <input
                onChange={handleChange}
                type="checkbox"
                id="maritalStatus"
                checked={isMarried}
              />
            </td>
            <td>Marital Status</td>
          </tr>
          <tr>
            <td>
              <input type="submit" value="Submit" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default Forms;
