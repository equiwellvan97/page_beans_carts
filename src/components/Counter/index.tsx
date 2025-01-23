import { useState } from "react";

const Counter = () => {
  useState();
  const [count, setCount] = useState(0);

  const handleClickNext = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleClickPrev = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickPrev}>Prev</button>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
};

export default Counter;
