import React, { useState } from "react";
import Button from "./components/Button";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
  let count_value = document.getElementById("count_variable");
  console.log(count_value.innerText)
   if(count < 10)
    setCount(count + 1);
    if(count_value.innerText == 9)
    count_value.style.color = "red";
    if(count_value.innerText >= 4 && count_value.innerText <= 8)
    count_value.style.color = "blue";
    if(count_value.innerText >= -1 && count_value.innerText <= 3)
    count_value.style.color = "green";
  };

  let decrementCount = () => {
    if(count > 0)
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div>
        <div class="count">
          <h3>Count:</h3>
          <h1 id="count_variable">{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
}
