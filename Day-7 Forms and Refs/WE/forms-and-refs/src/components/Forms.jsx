import { useState, useEffect } from "react";
import axios from "axios";

function Forms() {
  const [formData, setFormData] = useState({
    userName: "",
    age: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id, value);
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/users", formData).then(() => {
      alert("user created");
    });
    setFormData({
      userName: "",
      age: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>SignUp Form</h1>
      <input
        type="text"
        name=""
        value={formData.userName}
        id="userName"
        placeholder="enter username"
        onChange={handleChange}
      />
      <input
        type="number"
        name=""
        value={formData.age}
        id="age"
        placeholder="enter age"
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Forms;
