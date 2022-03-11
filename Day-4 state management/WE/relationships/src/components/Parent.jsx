import Child1 from "./Child1";
import Child2 from "./Child2";
import { useState } from "react";

function Parent() {
  const [data, setData] = useState(0);
  const [dataForChild2, setDataForChild2] = useState(0);
  const getDataFromChild1 = (val) => {
    setData(val);
  };

  const transferDataFromChild1ToChild2 = (val) => {
    setDataForChild2(val);
  };

  const value = 10;
  return (
    <>
      <h1>Parent</h1>

      <h4>Value Send to Child 1 : {value}</h4>

      <h4>{data === 0 ? null : `Data from Child 1 to Parent: ${data}`}</h4>

      <h4>
        {dataForChild2 === 0
          ? null
          : `Data from Child 1 to Child 2: ${dataForChild2}`}
      </h4>

      <Child1
        value={value}
        sendDataToParent={getDataFromChild1}
        sendDataToChild2={transferDataFromChild1ToChild2}
      />
      <Child2 dataFromChild1={dataForChild2} />
    </>
  );
}

export default Parent;
