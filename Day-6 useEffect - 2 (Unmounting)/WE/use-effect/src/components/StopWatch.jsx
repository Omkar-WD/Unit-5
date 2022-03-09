import { useState, useEffect } from "react";

function StopWatch() {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((prev) => {
        console.log("prev", prev);
        if (prev < 1) {
          console.log("Timer reached to 0 , Clear Interval and Hide Timer");
          setTimer(0);
          clearInterval(id);
        }
        return prev - 1;
      });
    }, 500);

    // callback function for useEffect (Cleanup or Unmounting Function)
    return () => {
      console.log("Manually Clear Interval and Hide Timer");
      setTimer(0);
      clearInterval(id);
    };
  }, []);

  return <h1> Timer : {timer}</h1>;
}

export default StopWatch;
