import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import "./LoginStatus.css";

function LoginStatus() {
  const { isAuth, userToken } = useContext(AuthContext);
  return (
    <div className="login-status-container">
      <table>
        <tbody>
          <tr>
            <td>
              <h2>Login Status :</h2>
            </td>
            <td>
              <p className={isAuth ? "login" : "logout"}></p>
            </td>
          </tr>
          <tr>
            <td>
              <h2>{isAuth ? `Auth Token :` : ""}</h2>
            </td>
            <td>{isAuth ? `${userToken}` : ""} </td>
          </tr>
        </tbody>
      </table>
      <h4></h4>
      <h4></h4>
    </div>
  );
}

export default LoginStatus;
