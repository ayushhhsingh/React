import { useState } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    setCount(count + 1);
  };
  const removeValue = () => {
    setCount(count - 1);
  };
  return (
    <div className="centered">
      <h1>Learn React:{count}</h1>
      <h2>Counter Value :{count}</h2>
      <button onClick={addValue}>Add a value</button>
      {""}
      <button onClick={removeValue}>Remove value</button>
      <p>footer:{count}</p>
    </div>
  );
}

export default App;
