import { addCount, subCount } from "../Redux/Counter/action";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count.count);
  return (
    <div>
      <h1>Counter</h1>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        Add 1
      </button>
      &emsp;
      <button
        onClick={() => {
          dispatch(subCount(1));
        }}
      >
        Sub 1
      </button>
    </div>
  );
}

export default Counter;
