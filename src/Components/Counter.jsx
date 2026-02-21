import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="px-4">
      <button
        className="border px-2"
        onClick={count > 0 ? () => setCount((prevCount) => prevCount - 1) : 0}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="border px-2"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
