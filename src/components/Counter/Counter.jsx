import { useState } from "react";

const Counter = () => {
  // hooks
  // const [getter, setter]= useState(initialValue)

  const [counter, setCounter] = useState(0);

  const handleCounter = (operation) => {
    if (operation === "+") {
      setCounter(counter + 1);
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h3>Contador: {counter}</h3>
      <button onClick={()=> handleCounter("+")}> + </button>
      <button onClick={()=> handleCounter("-")}> - </button>
    </>
  );
};

export default Counter;
