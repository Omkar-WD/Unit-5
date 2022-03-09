import { useState, useEffect } from "react";

export function Todos() {
  const [count1, setCounter] = useState(0);
  const [count2, setCounter1] = useState(0);
  console.log("before useEffect");
  useEffect(() => {
    alert("Welcome");
  }, []);
  useEffect(() => {
    console.log("inside common useEffect");
  }, [count1, count2]);
  useEffect(() => {
    console.log("inside useEffect1");
  }, [count1]);
  useEffect(() => {
    console.log("inside useEffect2");
  }, [count2]);
  console.log("after useEffect");
  return (
    <>
      <h1>Count1 : {count1}</h1>
      <h1>Count2 : {count2}</h1>
      <button onClick={() => setCounter(count1 + 1)}>ADD</button>
      <button onClick={() => setCounter1(count2 + 1)}>ADD</button>
    </>
  );
}
