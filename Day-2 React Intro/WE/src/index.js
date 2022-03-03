import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

// Method 1
// const h1 = document.createElement("h1");
// h1.innerText = "Welcome to Webpack";
// h1.classList.add("redtext");
// //h1.setAttribute("class", "redtext");

// Method 2
// const el = React.createElement(
//   "h1", //createElement
//   { className: "redtext fontSize12", id: "myId", name: "myName" }, //give attributes as obj
//   "Welcome to React and Webpack!!!", // add children
//   React.createElement("span", {}, "Hello World")
// );
// ReactDOM.render(
//   el, //what
//   document.getElementById("root") //where
// );

// Method 3
ReactDOM.render(
  <div className="redtext">
    <h1>Hello React and Webpack</h1>
    <input placeholder="enter your name" />
  </div>, //JSX Syntax
  document.getElementById("root") //where to render (show)
);
