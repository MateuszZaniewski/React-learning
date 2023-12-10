import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = (value) => {
    setCount(count + value);
  };
  const decrementCount = (value) => {
    count > 0 ? setCount(count - value) : null;
  };
  return (
    <>
      <div>Current value is : {count}</div>
      <button onClick={() => incrementCount(1)}>Increment</button>
      <button onClick={() => decrementCount(2)}>Decrement</button>
    </>
  );
}
