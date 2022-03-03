import { add, mult, div } from "./calc";
import "./index.css";
console.log(add(1, 3));
console.log(mult(1, 2));
console.log(mult(4, 2));

const h1 = document.createElement("h1");
h1.innerText = "Welcome to Webpack";
h1.classList.add("redtext");
// h1.setAttribute("class", "redtext");
document.getElementById("root").append(h1);
