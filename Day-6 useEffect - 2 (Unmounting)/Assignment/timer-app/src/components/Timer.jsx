function Timer({ startTime, endTime, timer }) {
  return (
    <div>
      <h1>Start Time : {startTime} Sec</h1>
      <h1>End Time : {endTime} Sec</h1>
      <h1>Timer : {timer} Sec</h1>
    </div>
  );
}

export default Timer;
