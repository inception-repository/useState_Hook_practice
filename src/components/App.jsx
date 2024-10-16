import React, { useState } from "react";

function App() {
  // var count = 0;

  const [count, setCount] = useState(0);

  console.log(count);

  function increase() {
    // count++;
    setCount(count + 1);
  }

  function Dicrease() {
    // count++;
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={count > 0 ? Dicrease : 0}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}
export default App;
