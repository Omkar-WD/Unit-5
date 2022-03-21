import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

function About() {
  if (true) {
    return <Navigate to="/redirect" />;
  }
  return (
    <div>
      <h1>Welcome To About</h1>
    </div>
  );
}

export default About;
