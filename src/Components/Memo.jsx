import React, { useMemo, useState } from "react";

const Count = React.memo(({ count }) => {
//   console.log("Render");
  return <div>{count}</div>;
});
const Memo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const doubleCount = useMemo(() => {
    // console.log("Double count");
    return count * 2;
  }, [count]);
  return (
    <div>
      <Count count={count} />

      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click me
      </button>
      <div>Double : {doubleCount}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="enter"
        className="border"
      />
    </div>
  );
};

export default Memo;
