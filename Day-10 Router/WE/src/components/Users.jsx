import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Form from "./RegisterUser";

function Users() {
  const { id } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    document.title = "Users";
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      console.log(data.data);
      setList([...data.data]);
    });
  }, []);
  return (
    <div>
      <h1>Welcome To Users</h1>
      <Form />
      {list.map((e) => (
        <Link to={`/users/${e.id}`} key={e.id}>
          <table>
            <thead>
              <tr>
                <th>Sr.No</th>

                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{e.id}</td>
                <td>{e.first_name}</td>
              </tr>
            </tbody>
          </table>
        </Link>
      ))}
    </div>
  );
}

export default Users;
