import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const onButtonClick = (event) => {
    setCount((count) => count + 1);
  };
  const OnResetClick = (event) => {
    setCount(0);
    if (count > 5 && count < 10) {
      setCount(5);
    }
  };
  return (
    <div className="App">
      <button onClick={onButtonClick}>click me</button>
      {count}
      <button onClick={OnResetClick}>reset</button>
    </div>
  );
}
