import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

function UsersDetal() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  console.log("user", user);
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${userId}`).then((res) => {
      setUser(res.data.data);
    });
  }, []);

  if (true) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>
              <img src={user.avatar} alt="" />
            </td>
            <td>{user.first_name}</td>
            <td> {user.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UsersDetal;
