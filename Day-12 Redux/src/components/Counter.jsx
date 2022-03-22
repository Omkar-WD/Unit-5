import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount } from "../Redux/action";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count);
  return (
    <div>
      <h3>Counter : {count}</h3>
      <button
        onClick={() => {
          // add 1 to count
          dispatch(addCount(1));
        }}
      >
        ADD_COUNT
      </button>
      <button
        onClick={() => {
          // remove 1 from count
          dispatch(subCount(1));
        }}
      >
        SUB_COUNT
      </button>
    </div>
  );
}

export default Counter;
