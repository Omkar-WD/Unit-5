import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterUser() {
  const navigate = useNavigate();
  return (
    <div>
      <input type="text" placeholder="enter name" />
      <button
        onClick={() => {
          console.log("hello");
          navigate("/");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default RegisterUser;
