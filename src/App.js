import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [backg, setBackg] = useState("orange");

  const onButtonClick = (event) => {
    setCount((count) => count + 1);
    setBackg("blue");
  };
  const col = [
    "blue",
    "green",
    "red",
    "yellow",
    "purple",
    "ash",
    "orange",
    "brown"
  ];
  const OnResetClick = (event) => {
    setCount(0);
    if (count > 5 && count < 10) {
      setCount(5);
      setBackg("blue");
      return;
    }
    setBackg("orange");
  };
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      setInterval(() => {
        setBackg(col[i]);
      }, 1000);
    }
  });

  return (
    <div className="App" style={{ background: backg }}>
      <div>
        <button onClick={onButtonClick}>click me</button>
      </div>

      <div>{count}</div>

      <div>
        <button onClick={OnResetClick}>reset</button>
      </div>
    </div>
  );
}
